const http = require("http");

http.createServer((req, res) => {
  res.writeHead(302, {
    Location: "https://hsbc.bmsec.telecoms.my"
  });
  res.end();
}).listen(process.env.PORT || 8080);
