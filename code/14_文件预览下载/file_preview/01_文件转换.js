const path = require('path');
const fs = require('fs').promises;

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

async function main() {
    const ext = '.pdf'
    const inputPath = path.join(__dirname, '../resources/邂逅软件开发.pptx');
    const outputPath = path.join(__dirname, `../resources/邂逅软件开发${ext}`);

    const inputBuf = await fs.readFile(inputPath);
    let outputBuf = await libre.convertAsync(inputBuf, ext, undefined);
    
    await fs.writeFile(outputPath, outputBuf);
}

main().catch(function (err) {
    console.log(`Error converting file: ${err}`);
});