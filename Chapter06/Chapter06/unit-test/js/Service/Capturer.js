const toBuffer = require( "blob-to-buffer" ),
      appWindow = nw.Window.get(),
      ICON = `./assets/icon-48x48.png`;

export default class Capturer {
  /**
   * @param {Fsys} fsys
   * @param {Dom} dom
   */
  constructor( fsys, dom ){
    this.fsys = fsys;
    this.dom = dom;
    Capturer.detectDesktopStreamId(( id ) => {
      this.start( id );
    });
  }

  /**
   * Detect first available screen target for capturing
   */
  static detectDesktopStreamId( done ){
    const dcm = nw.Screen.DesktopCaptureMonitor;
    nw.Screen.Init();
    // New screen target detected
    dcm.on("added", ( id, name, order, type ) => {
      // We are interested only in screens
      if ( type !== "screen" ){
        return;
      }
      done( dcm.registerStream( id ) );
      dcm.stop();
    });
    dcm.start( true, true );
  }

  /**
   * Take a screenshot and save it with filename confronting a given pattern
   * @param {string} filenameRaw
   */
  takeScreenshot( filenameRaw ){
    const base64Data = this.dom.getVideoFrameAsBase64(),
          filename = this.fsys.saveFile( filenameRaw, base64Data, ".png" );
    new Notification( "Screenshot saved",  {
      body: `The screenshot was saved as ${filename}`,
      icon: ICON
    });
  }

  /**
   * Hook method, used by mediaRecorder.onstop handler to save video stream buffer
   * Gets overrided in the body of record method
   */
  onVideoSave = () => {}
  /**
   * Start recording
   * @param {string} filenameRaw - file name template like animation{N}.webm
   */
  record( filenameRaw ){
    this.mediaRecorder.start();
    /**
     * @param {Buffer} buffer
     */
    this.saveAnimationBuffer = ( buffer ) => {
      const filename = this.fsys.saveFile( filenameRaw, buffer, ".webm" );
      new Notification( "Animation saved",  {
        body: `The animation was saved as ${filename}`,
        icon: ICON
      });
    }
  }
  /**
   * Stop recording
   */
  stop(){
    this.mediaRecorder.stop();
  }

  /**
   * Start capturer
   * Screen output gets redirected to video element
   * @param {string} desktopStreamId
   */
  start( desktopStreamId ){
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: desktopStreamId,
            minWidth: 1280,
            maxWidth: 1920,
            minHeight: 720,
            maxHeight: 1080
          }
        }
      }, ( stream ) => {
        let chunks = [];
        this.dom.video.src = URL.createObjectURL( stream );
        this.mediaRecorder = new MediaRecorder( stream );
        this.mediaRecorder.onstop = ( e ) => {
          const blob = new Blob( chunks, { type: "video/webm" });
          toBuffer( blob, ( err, buffer ) => {
            if ( err ) {
              throw err;
            }
            this.saveAnimationBuffer( buffer );
            chunks = [];
          });
        }
        this.mediaRecorder.ondataavailable = function( e ) {
          chunks.push( e.data );
        }

      }, ( error ) => {
        console.log( "navigator.getUserMedia error: ", error );
      });

  }
}