const fs = require('fs-extra');
const childProcess = require('child_process');

try {
    fs.removeSync('./dist/');
} catch (err) {
    console.log(err);
}
