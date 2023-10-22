const http = require('http');
const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const dbody = JSON.parse(body);
    const content = dbody.text.content;
    const response = {
      msgtype: 'text',
      text: {
        content: `你发送了：${content}`
      }
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  });
});
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
