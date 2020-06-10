var http = require('http');
var lanthu = 0;
var ancuc = "co'"
const PORT = process.env.PORT || 5000
    // http.createServer(function (req, res) {
    //     lanthu++
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.end('Hello World!' + 
    //   "http:\\http://127.0.0.1:8080/" + 
    //   "localhost:8080"+
    //   "lan thu: " + lanthu);
    // }).listen(8080);

function XuLyWEB(request, response) {
    lanthu++
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Server V3 - Chao moi nguoi moi ngay!' +
        "<br> http://127.0.0.1:8080/" +
        "<br> localhost:8080" +
        "<br> lan thu: " + lanthu)
    console.log("\n\t ...lanthu - " + lanthu)
    console.log("\n\t Có làm thì mới có ăn " + " " + ancuc)
}
http.createServer(XuLyWEB).listen(PORT);
console.log("RUN")