import fs from 'fs';

let filesList = [];

const listFiles = (folder) => {
    let files = fs.readdirSync(folder);

    if (files.length === 0) {
        return;
    }

    files.forEach(file => {
        let filepath = folder + '/' + file;
        if (fs.statSync(filepath).isDirectory()) {
            filesList.push('DIR:' + filepath);
            listFiles(filepath);
        } else if (fs.statSync(filepath).isFile()) {
            filesList.push('FILE:' + filepath);
        }
    });
}

listFiles('.');
console.log(filesList);