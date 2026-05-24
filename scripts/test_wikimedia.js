const fs = require('fs');
const path = require('path');
const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/2/25/INSEAD_Logo.svg';
const filePath = path.join(__dirname, '..', 'public', 'images', 'logos', 'test-wikimedia.svg');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  console.log('Status code:', res.statusCode);
  if (res.statusCode === 200) {
    const writeStream = fs.createWriteStream(filePath);
    res.pipe(writeStream);
    writeStream.on('finish', () => {
      writeStream.close();
      console.log('Success download from wikimedia!');
    });
  } else {
    console.error('Failed with status:', res.statusCode);
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});
