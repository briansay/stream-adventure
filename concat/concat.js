let concat = require('concat-stream');

process.stdin.pipe( concat((src)=>{
  let s = src.toString().split('').reverse().join('');
  console.log(s);
}));
