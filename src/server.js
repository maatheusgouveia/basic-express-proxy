var express = require("express");
var proxy = require("http-proxy-middleware");
var server = express();

server.get("/", (req, res) => res.json(["Initial route"]));

// redireciona as requisições recebidas na porta 3000 para a porta 3333
server.use(
	["/test1", "/test2"],
	proxy({ target: "http://localhost:3001", changeOrigin: true })
);

server.use(
	["/test3", "/test4"],
	proxy({ target: "http://localhost:3002", changeOrigin: true })
);

server.listen(3000);
