const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

const filePath = path.join("database/db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server está rodando na porta 8000!");
});

module.exports = server;
