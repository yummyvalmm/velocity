
import { readdir, unlink } from 'fs/promises';
import { join, extname } from 'path';
import sharp from 'sharp';

const directory = './public/images/products';

async function convertImages() {
    try {
        const files = await readdir(directory);

        for (const file of files) {
            const ext = extname(file).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                const inputPath = join(directory, file);
                const outputPath = join(directory, file.replace(ext, '.webp'));

                console.log(`Converting ${file} to WebP...`);

                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Deleting original ${file}...`);
                await unlink(inputPath);
            }
        }
        console.log('All images converted successfully!');
    } catch (err) {
        console.error('Error converting images:', err);
    }
}

convertImages();
