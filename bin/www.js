const app = require('../app');
const port = process.env.PORT || 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http)

io.on("connection", socket => {
  console.log("ADA YG MASUK");
  socket.on("disconnect", () => {
    console.log("ADA YG KELUAR");
  });
});

http.listen(port, function () {
  console.log(`listening on ${port}`);
});