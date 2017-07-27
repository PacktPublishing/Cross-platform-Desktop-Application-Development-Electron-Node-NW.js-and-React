import * as fs from "fs";

export default class Fsys {
  /**
   * Scan dir for already stored filed of this type
   */
  static getStoredFiles( ext ){
    return fs.readdirSync( "." )
      .filter( (file) => fs.statSync( file ).isFile()
          && file.endsWith( ext ) ) || [ ];
  }
  /**
   * Save file as png or webm
   * @param {string} filenameRaw
   * @param {Base64|Buffer} data
   * @param {string} ext - e.g. .png
   */
  saveFile( filenameRaw, data, ext ){
    const files = Fsys.getStoredFiles( ext ),
          // Generate filename our of the pattern like screenshot5.png
          filename = filenameRaw.replace( "{N}", files.length + 1 );
    fs.writeFileSync( filename, data, "base64" );
    return filename;
  }
}