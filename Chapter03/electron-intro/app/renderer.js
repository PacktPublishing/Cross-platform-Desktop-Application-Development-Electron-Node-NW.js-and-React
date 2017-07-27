const manifest = require( "../package.json" );

const platforms = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

function write( id, text ){
  document.getElementById( id ).innerHTML = text;
}

write( "app", `${manifest.name} v.${manifest.version}` );
write( "os", `Platform: ${platforms[ process.platform ]}` );
write( "electronVer", `Electron v.${process.versions.electron}` );