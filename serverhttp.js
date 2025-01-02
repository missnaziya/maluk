const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});





// const { createServer } = require('https');
// const { parse } = require('url');
// const next = require('next');
// const fs = require('fs');
// const path = require('path');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname, 'cert/myzk.key')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert/myzk.crt')),
// };

// app.prepare().then(() => {
//   createServer(httpsOptions, (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   }).listen(4000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on https://localhost:4000');
//   });
// });