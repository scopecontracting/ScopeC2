import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/images/scope-logo.png');
const outputPath = path.join(__dirname, '../public/images/scope-logo-transparent.png');

async function removeWhiteBackground() {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    
    // Process each pixel
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If pixel is white or near-white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    await sharp(data, { raw: { width, height, channels } })
      .png()
      .toFile(outputPath);

    console.log('Background removed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeWhiteBackground();
