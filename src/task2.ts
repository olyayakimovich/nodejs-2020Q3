import csv from 'csvtojson';
import fs from 'fs';
import { pipeline } from 'stream';

const readable = fs.createReadStream('csv/books.csv');

const writable = fs.createWriteStream('csv/books.txt');

pipeline(readable, csv(), writable, (err) => {
  if (err) console.error(`Saving failed: ${err}`);
  console.log('Saved successfully');
});
