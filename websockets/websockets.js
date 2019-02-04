let ws = require('websocket-stream');
let stream = ws('ws://localhost:8000');

stream.pipe('hello\n');
