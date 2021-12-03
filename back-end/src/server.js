import http from "http"
import WebSocket from "ws"
import express from "express"

const app = express()

app.set("view engine","pug")
app.set("views",__dirname+"/views")
app.use("/public",express.static(__dirname+"/public"))
app.get("/",(_,res)=>res.render("home"))
app.get("/*",(_,res)=>res.redirect("/"))

const handleListen = () => console.log(`Listening on http://localhost:4001`)



//아래와 같이 선언하면 http 서버, ws 서버 둘다 돌릴 수 있다.
const server = http.createServer(app)

const wss = new WebSocket.Server({server}) // http 서버 위에 webSocket 서버가 있게 됨 (동일한 포트에서 두 프로토콜을 다 처리 가ㅡㄴㅇ)

server.listen(4001,handleListen)