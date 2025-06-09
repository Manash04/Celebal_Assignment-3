const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File data:', data);
        
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileAsync('example.txt');
