"use strict";

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

const users = [];

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("join", (username, room) => {
    users.push({ id: socket.id, username: username, room: room });
    console.log("users connected: ", users);
    socket.emit(
      "response",
      "Joined with username " + username + " to room " + room
    );
    socket.join(room);
  });

  socket.on("leave", () => {
    let userObject = users.find((user) => user.id === socket.id);
    let username = userObject.username;
    let room = userObject.room;
    let userIndex = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === socket.id) {
        userIndex = i;
      }
    }
    users.pop(userIndex);
    socket.emit("response", username + " left the room " + room);
    socket.leave(room);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    // TODO: remove user with soket.id from users array
  });

  socket.on("write message", (msg) => {
    let userObject = users.find((user) => user.id === socket.id);
    let username = userObject.username;
    let room = userObject.room;
    console.log("message: ", username, msg);
    io.to(room).emit("new message", msg, username);
  });
});

http.listen(3000, () => {
  console.log("listening on port 3000");
});
