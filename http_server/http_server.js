let http = require('http');
let through = require('through2');

let server = http.createServer( (req, res)=>{
  if (req.method != 'POST') return;

  let stream = through( function(buf, _, next){
    let line = buf.toString().toUpperCase();
    this.push(line);
    next();
  });

  req.pipe(stream).pipe(res);
});
server.listen(process.argv[2]);
