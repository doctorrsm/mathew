const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Ошибка чтения папки:', err);
    return;
  }

  console.log('Имена файлов в папке:');
  files.forEach(file => {
    console.log(file);
  });
});