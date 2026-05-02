import express from "express";
import ejs from "ejs";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

// configuration
dotenv.config();
const PORT = process.env.PORT || 4000;

// create express request handler
const app = express();
// socket io requires rsaw http server instance that's why we are creating http server manually
const http_server = http.createServer(app);
const socket_server = new Server(http_server);

// middlewares
app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("idx");
});

http_server.listen(PORT, () => {
  console.log("SERVER STARTED");
});
