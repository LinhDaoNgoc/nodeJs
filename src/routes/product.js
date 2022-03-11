const { Router } = require('express');
const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

//fake data
const products = [{ id: 1, name: "Product A", }, { id: 2, name: "Product B", }];

router.get("/products", checkAuth, (req, res) => { //get all
    const products = [{ id: 1, name: "Product A", }, { id: 2, name: "Product B", },];
    res.json(products);
});

router.post('/products', checkAuth, (req, res) => { //creat product
    const products = [{ id: 1, name: "Product A", }, { id: 2, name: "Product B", },];
    products.push(req.body);
    res.json(products);
});


module.exports = router;