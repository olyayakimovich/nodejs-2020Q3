const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (input: string) => {
  const output: string = input.split('').reverse().join('');

  process.stdout.write(`${output}\n`);
});
