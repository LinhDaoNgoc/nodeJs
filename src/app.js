const express = require('express');
const app = express();

//routing 
app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get('/api/products', (req, res) => {
  const products = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }]
  res.json(products);
});

//connect 
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
})


// const server = http.createServer((req, res) =>{
//     const url = req.url;
//     if(url == '/'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>')
//           res.write('<body>')
//            res.write('<h1>Hello word! </h1>');
//            res.write('<ul><li>User 1</li></ul>')
//          res.write('</body>')
//         res.write('</html>')
//        res.end(JSON.stringify(data));
//     }else{
//         res.write('<html>')
//            res.write('<body>')
//              res.write('<h1> Home ppage</h1>');
//           res.write('</body>')
//         res.write('</html>')
//         res.end();
//     }
// });