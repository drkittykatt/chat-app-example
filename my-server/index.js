const express = require("express");
const helmet = require("helmet");
const { Server } = require("socket.io"); //do i need this? 
const app = express();
const cors = require("cors");
const authRouter = require("./routers/authRouter")

const server = require("http").createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    }
})

app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use(express.json());

// app.get("/api", (req, res) => {
//     //res.json("hi")
//     res.json({
//         message: "Hello World",
//     })
// })

io.on("connect", socket => { })

server.listen(4000, () => {
    console.log("server listening on port 4000")
})