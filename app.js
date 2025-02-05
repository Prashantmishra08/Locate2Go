const express = require("express");
const path = require("path")
const { connectToMongoDB } = require("./connect");
//socket
const http = require('http');
const socketIo = require('socket.io');



const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/user');
const driverRoute = require('./routes/driver');
const app = express();
//const PORT = 8001;
//socket.io
const server = http.createServer(app);
const io = socketIo(server);



connectToMongoDB("mongodb://127.0.0.1:27017/Final").then(() =>
    console.log("Mongodb connected")
);


//middlewares

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);
app.use("/", driverRoute);
app.use("/", staticRoute);


//socket.io code for sending live locati
let driverLocation = null;

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('updateLocation', (latitude, longitude) => {
        driverLocation = { latitude, longitude };
        io.emit('driverLocationUpdate', driverLocation);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});







//app.listen(PORT, () => console.log(`Server Started at PORT: http://localhost:${PORT}`));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});