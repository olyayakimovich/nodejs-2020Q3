import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath = 'csv/books.csv';

csv()
  .fromFile(csvFilePath)
  .then((data: any) => {
    const books = JSON.stringify(data);

    fs.writeFileSync('books.txt', books, 'utf8');
  });
