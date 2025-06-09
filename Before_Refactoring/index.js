const fs = require('fs');

function readFileCallbackStyle(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return callback(err);
        callback(null, data);
    });
}

readFileCallbackStyle('example.txt', (err, data) => {
    if (err) {
        console.error('Error in reading file:', err);
        return;
    }
    console.log('File data:', data);
});
