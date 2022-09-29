const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;
const home = fs.readFileSync('index.html')
const menu = fs.readFileSync('./menu.html') 
const franchies = fs.readFileSync('./franchies.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url)
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/menu'){
        res.end(menu);
    }
    else if(url == '/franchies'){
        res.end(franchies);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h2>404 not found </h2>");
    }
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
