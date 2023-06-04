const fs = require('fs');
const path = require('path');

const clearTmp = (tmpDir) => {
  fs.readdir(tmpDir, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(tmpDir, file), err => {
        if (err) throw err;
      });
    }
  });
};

module.exports = clearTmp;