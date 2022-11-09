import fs from 'fs';

if (!process.argv[2]) throw 'Veuillez saisir un texte à écrire en deuxième argument';
let text = process.argv[2];
let destFilename = process.argv[3] ?? 'dest.txt';

fs.writeFile(destFilename, text, 
  {
    encoding: "utf8",
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File saved!\n");
      console.log(fs.readFileSync(destFilename, "utf8"));
    }
  }
);