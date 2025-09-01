const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Hardcoded products data
const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Headphones", price: 99.99 },
    { id: 4, name: "Tablet", price: 299.99 },
    { id: 5, name: "Smartwatch", price: 199.99 }
];

// GET /products endpoint
app.get('/products', (req, res) => {
    res.json(products);
});

// POST /cart endpoint
app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;

    // Input validation
    if (!productId || !quantity || typeof quantity !== 'number' || quantity <= 0) {
        return res.status(400).json({ 
            error: 'Invalid input. Please provide a valid product ID and quantity.'
        });
    }

    // Find the product
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).json({ 
            error: 'Product not found'
        });
    }

    // Calculate total price
    const totalPrice = product.price * quantity;

    res.json({
        productId,
        productName: product.name,
        quantity,
        unitPrice: product.price,
        totalPrice
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
