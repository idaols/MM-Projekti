"use strict";

//localhost for locl dev only
const socket = io("http://localhost:3000");
// const socket = io(
//   "https://stream-server-jennash.norwayeast.cloudapp.azure.com/"
// );

const joinForm = document.querySelector("#join");
const roomDiv = document.querySelector("#roomDiv");
const writeMsg = document.querySelector("#msg-input");
const leaveBtn = document.querySelector("#leaveBtn");
const roomNumber = document.querySelector("#roomNumber");
const messages = document.getElementById("messages");

joinForm.addEventListener("submit", (event) => {
  const username = document.getElementById("username");
  const room = document.querySelector('input[name="room"]:checked').value;
  socket.emit("join", username.value, room);
  username.value = "";
  joinForm.style.display = "none";
  roomDiv.style.display = "block";
  writeMsg.style.display = "block";
  leaveBtn.style.display = "block";
  roomNumber.style.display = "block";
  roomNumber.innerHTML = "Olet huoneessa " + room;
  event.preventDefault();
});

leaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("leave");
  joinForm.style.display = "block";
  roomDiv.style.display = "none";
  writeMsg.style.display = "none";
  leaveBtn.style.display = "none";
  roomNumber.style.display = "none";
  messages.innerHTML = "";
});

writeMsg.addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("message");
  console.log("emitting", inp.value);
  socket.emit("write message", inp.value);
  inp.value = "";
});

socket.on("new message", (msg, username) => {
  const item = document.createElement("li");
  item.innerHTML = `<b style="color: #FE8A3B;">${username}: </b>` + msg;
  item.classList.add(
    "py-3",
    "px-3",
    "bg-mm-blue",
    "rounded-2xl",
    "text-mm-white",
    "text-sm",
    "w-fit",
    "m-2"
  );
  messages.appendChild(item);
});

socket.on("response", (msg) => {
  console.log(msg);
});

socket.on("leaveResponse", (msg) => {
  console.log(msg);
});
