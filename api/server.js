require("dotenv").config();
const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

const filePath = path.join(__dirname, "../database/db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}!`);
});

module.exports = server;
