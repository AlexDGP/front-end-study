// let ws = require("nodejs-websocket");
//
// let server = ws.createServer(function (conn) {
//   setInterval(function () {
//     const date = new Date();
//     const time = date.getMinutes() + ":" + date.getSeconds();
//     conn.sendText(time);
//   }, 3000);
//   conn.on("text", function (str) {});
//   conn.on("error", function (err) {
//     console.log("error");
//   });
// });
// server.listen(2333);

const WebSocket = require("ws");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

// 用户认证函数
function authenticateUser(token) {
  return true;
  // 在这里实现您的身份验证逻辑
  // 如果令牌有效，返回 true；否则返回 false
}

wss.on("connection", (ws, req) => {
  const token = req.headers["sec-websocket-protocol"];
  console.log(req.headers);
  if (authenticateUser(token)) {
    // 认证成功
    // 在这里处理 WebSocket 通信
  } else {
    // 认证失败
    ws.terminate(); // 关闭连接
  }
});

server.listen(3000, () => {
  console.log("服务器正在监听端口 3000");
});
