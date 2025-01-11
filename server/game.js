const express = require("express");
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const { Server } = require("socket.io");
const { handleSocketConnection } = require("./sys/socketHandlers");

const app = express();

// Use CORS and logging middleware
app.use(cors());
app.use(morgan("combined"));

// Create HTTP server and initialize Socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Allow connections from this origin
        methods: ["GET", "POST"], // Allow only GET and POST methods
        credentials: true // Allow credentials (cookies) to be sent
    },
});

const PORT = 3001; // Set the server port

// Handle socket connections
io.on("connection", (socket) => {
    handleSocketConnection(socket, io);
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});