import { creatServer } from 'http';
creatServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Assignment 1 Node.js');
}).listen(8088);
