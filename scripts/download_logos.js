const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGO_DIR = path.join(__dirname, '..', 'public', 'images', 'logos');

// Ensure the directory exists
if (!fs.existsSync(LOGO_DIR)) {
  fs.mkdirSync(LOGO_DIR, { recursive: true });
}

const LOGOS = [
  { id: 'google-analytics', url: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  { id: 'hubspot', url: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg' },
  { id: 'blue-ocean', url: 'https://www.vectorlogo.zone/logos/insead/insead-icon.svg' },
  { id: 'mcim', url: 'https://logo.clearbit.com/cim.co.uk' },
  { id: 'dmi', url: 'https://logo.clearbit.com/digitalmarketinginstitute.com' },
  { id: 'cmc', url: 'https://logo.clearbit.com/cmc-canada.ca' },
  { id: 'sfp', url: 'https://logo.clearbit.com/cesmii.org' },
  { id: 'pm-foundations', url: 'https://logo.clearbit.com/pmaspire.com' },
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
        return;
      }
      const writeStream = fs.createWriteStream(filePath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        console.log(`Successfully downloaded ${filePath}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const logo of LOGOS) {
    const ext = logo.url.endsWith('.svg') ? '.svg' : '.png';
    const filePath = path.join(LOGO_DIR, `${logo.id}${ext}`);
    try {
      await download(logo.url, filePath);
    } catch (err) {
      console.error(`Error downloading logo for ${logo.id}:`, err.message);
      // Let's try downloading from clearbit as a fallback if vectorlogo.zone fails
      if (ext === '.svg') {
        const fallbackUrl = `https://logo.clearbit.com/${logo.id === 'blue-ocean' ? 'insead.edu' : 'google.com'}`;
        const pngPath = path.join(LOGO_DIR, `${logo.id}.png`);
        try {
          console.log(`Trying fallback for ${logo.id}: ${fallbackUrl}`);
          await download(fallbackUrl, pngPath);
        } catch (fallbackErr) {
          console.error(`Fallback failed for ${logo.id}:`, fallbackErr.message);
        }
      }
    }
  }
}

run();
