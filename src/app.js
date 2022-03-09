const http = require('http');
 
const server = http.createServer((req, res) =>{
    const url = req.url;
    if(url == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
          res.write('<body>')
           res.write('<h1>Hello word! </h1>');
           res.write('<ul><li>User 1</li></ul>')
         res.write('</body>')
        res.write('</html>')
       res.end(JSON.stringify(data));
    
    }else{
        res.write('<html>')
           res.write('<body>')
             res.write('<h1> Home ppage</h1>');
          res.write('</body>')
        res.write('</html>')
        res.end();
    }
});


const PORT = 3000;

server.listen(PORT, () =>{
    console.log(`Server running port ${PORT}`);
})