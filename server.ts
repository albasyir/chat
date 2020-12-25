import Express from "express";

const server = Express();

server.get('/', (req, res) => res.send('Express + TypeScript Server'));
server.listen(8000, () => {
  console.log("⚡️ [info]: Server is running at http://localhost:8000");
});