const fs = require('fs');
const epubZip = require('epub-zip');
 
const content = epubZip("Blitz_template/Blitz_epub3");

fs.writeFileSync("Blitz_template/Blitz_epub3.epub", content);