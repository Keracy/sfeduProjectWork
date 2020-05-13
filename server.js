const http = require("http")
const fs = require("fs");
const html = fs.readFileSync("index.html");
const css = fs.readFileSync("style.css");
const js = fs.readFileSync("script.js");

http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(html);
      break;
    case "/script.js":
      res.writeHead(200, {'Content-Type' : 'text/javascript'});
      res.end(js);
    case "/style.css":
      res.writeHead(200, {'Content-Type' : 'text/css'});
      res.end(css);
    default:
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.end("Ошибка 404 - Запрос не найден");

  }

}).listen(3000, () => console.log("Сервер работает"));
