import fs from 'fs';

if (!process.argv[2]) throw 'Veuillez saisir un nom de fichier';
let file = process.argv[2];

fs.stat(file, (err, stat) => {
    let read = fs.createReadStream(file);
  
    read.on('data', (chunck) => {
      console.log(chunck + '\n');
    });
    
    read.on('end', () => {
      console.log('J\'ai fini de lire le fichier');
    });
  })