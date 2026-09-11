
const http=require('http'); //importing the http module
const server=http.createServer((req,res)=>{ 
    //creating a server
    res.writeHead(200,{'Content-Type':'text/plain','server':'Node.js'}); //setting the response header
            // status code 200 means OK and content type is text/plain 
            // server is Node.js
    res.end("Hello World!"); //sending response to the client
    
});
const PORT=5000; //setting the port number
server.listen(PORT,()=>{ //listening to the port number
    console.log(`Server is running on http://localhost:${PORT}`); //logging the message to the console
});
    