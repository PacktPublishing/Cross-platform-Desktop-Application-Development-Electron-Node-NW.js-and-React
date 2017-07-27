
export default class Dom {

  constructor(){
    this.canvas = document.createElement("canvas")
    this.video = Dom.createVideo();
  }

   static createVideo(){
    const div = document.createElement( "div" ),
          video = document.createElement( "video" );
    div.className = "preview";
    video.autoplay = true;
    div.appendChild( video );
    document.body.appendChild( div );
    return video;
  }

  /**
  *  generates a still frame image from the stream in the <video>
  *  appends the image to the <body>
  */
  getVideoFrameAsBase64() {
    const context = this.canvas.getContext("2d"),
          width = this.video.offsetWidth,
          height = this.video.offsetHeight;

    this.canvas.width = width;
    this.canvas.height = height;

    context.drawImage( this.video, 0, 0, width, height );

    return this.canvas.toDataURL("image/png")
      .replace( /^data:image\/png;base64,/, "" );

  }
}