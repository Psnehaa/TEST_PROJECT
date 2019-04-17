let http=require('http');
//port declaration
let port=9001;
// Creating a Server
let server = http.createServer(function(req, res){
    res.write("My New Server");
    res.end();
})
// Listen to the Server
server.listen(port, function(){
    console.log('Server Listening to the port :'+port);
})