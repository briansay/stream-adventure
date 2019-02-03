//18th pass
let split = require('split2');
let through = require('through2');
let count = 0;


let stream = through( function (buf, _, next) {
  let line = buf.toString();
  if (count % 2 === 0){
    //even
    this.push(line.toLowerCase()+ '\n');
    count++;
    next();
  } else {
    //odd
    this.push(line.toUpperCase()+ '\n');
    count++;
    next();
  }

});

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout)
;



//'properly' refactored if statement within stream

// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;
