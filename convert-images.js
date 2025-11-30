import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SOURCE_DIR = path.join(__dirname, 'public');
const QUALITY = 80; // WebP quality (0-100)

// Supported extensions
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.bmp', '.tiff'];

// Statistics
let stats = {
    processed: 0,
    converted: 0,
    skipped: 0,
    errors: 0,
    savedBytes: 0
};

async function convertImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!EXTENSIONS.includes(ext)) return;

    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const webpPath = path.join(dir, `${name}.webp`);

    // Skip if WebP already exists (optional, remove check to force overwrite)
    if (fs.existsSync(webpPath)) {
        // console.log(`Skipping (WebP exists): ${name}${ext}`);
        stats.skipped++;
        return;
    }

    try {
        const originalSize = fs.statSync(filePath).size;

        await sharp(filePath)
            .webp({ quality: QUALITY })
            .toFile(webpPath);

        const newSize = fs.statSync(webpPath).size;
        const saved = originalSize - newSize;
        stats.savedBytes += saved;
        stats.converted++;

        console.log(`✅ Converted: ${name}${ext} -> ${name}.webp`);
        console.log(`   Saved: ${(saved / 1024).toFixed(2)} KB (${((saved / originalSize) * 100).toFixed(1)}%)`);

        // Optional: Delete original file?
        // fs.unlinkSync(filePath); 

    } catch (error) {
        console.error(`❌ Error converting ${filePath}:`, error.message);
        stats.errors++;
    }
}

async function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await walkDir(filePath);
        } else {
            await convertImage(filePath);
            stats.processed++;
        }
    }
}

console.log('🚀 Starting image conversion to WebP...');
console.log(`📂 Source Directory: ${SOURCE_DIR}`);
console.log('----------------------------------------');

try {
    await walkDir(SOURCE_DIR);
} catch (error) {
    console.error('Fatal Error:', error);
}

console.log('----------------------------------------');
console.log('🎉 Conversion Complete!');
console.log(`📊 Total Files Scanned: ${stats.processed}`);
console.log(`✅ Converted: ${stats.converted}`);
console.log(`⏭️  Skipped: ${stats.skipped}`);
console.log(`❌ Errors: ${stats.errors}`);
console.log(`💾 Total Space Saved: ${(stats.savedBytes / 1024 / 1024).toFixed(2)} MB`);
