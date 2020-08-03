const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (input: Buffer) => {
  const output: string = input.toString().split('').reverse().join('');

  process.stdout.write(`${output}\n`);
});
