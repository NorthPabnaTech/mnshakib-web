const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGO_DIR = path.join(__dirname, '..', 'public', 'images', 'logos');

const testUrl = 'https://cdn.brandfetch.io/insead.edu';
const filePath = path.join(LOGO_DIR, 'test-insead.png');

https.get(testUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Headers:', res.headers);
  if (res.statusCode === 200) {
    const writeStream = fs.createWriteStream(filePath);
    res.pipe(writeStream);
    writeStream.on('finish', () => {
      writeStream.close();
      console.log('Successfully downloaded test logo to', filePath);
    });
  } else {
    console.error('Download failed with status', res.statusCode);
  }
}).on('error', (err) => {
  console.error('Request error:', err.message);
});
