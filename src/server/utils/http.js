const http = require('http');
const url = require('url');

http.createServer((req, res) => {

  res.writeHead(200, {'content-Type': "text/html, charset='utf-8'"}); // 设置响应头

  console.log(req.url)
  if (req.url !== '/favicon.ico') {
    const resolve = url.resolve(req.url, 'detail')

    console.log('resolve', url.resolve('/one/two/three&id=123', 'four'))
    console.log('resolve', resolve)
    const result = url.parse(req.url);

    console.log(result)
    
    console.log('query :>> ', result.query);
  }
  res.write('Hello, nodejs!'); // 设置响应内容
  res.end(); // 结束响应
}).listen(8001)