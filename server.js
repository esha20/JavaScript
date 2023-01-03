const http = require ('http')   //http is a core module so it needs to be imported

const server = http.createServer((req,res)=>{   //remember the order of req and res as parameters. 
    // writing in (res,req) order gives error (res.write  not a function). 
    //we are using the already declared http variale to create the server.
    console.log("HEY ESHA");        //output in terminal
    res.write("Hello Visitor !");   //output  in localhost.
    // res.end();
}).listen(8000);