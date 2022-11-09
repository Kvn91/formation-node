import axios from "axios";
import fs, { cp } from "fs";

fs.readFile('link.txt', 'utf8', (err, data) => {
    if (err) throw err;
    axios.get(data)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('------------\n');
            console.log('scrapped\n');
            console.log('------------\n');
        })
    ;
});