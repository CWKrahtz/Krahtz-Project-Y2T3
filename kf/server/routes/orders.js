const express = require('express');
const router = express.Router();
const Order = require('../models/orders');
const OrderSchema = require('../models/orders')


router.get('/api/allOrders', async (req, res) => {
    const findOrders = await OrderSchema.find()
    res.json(findOrders)
})

// Route to add a new order
router.post('/api/addOrder', async (req, res) => {
    try {
        const { name, total, details } = req.body;

        // Create a new order instance
        const newOrder = new Order({
            name,
            total,
            details,
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        res.json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete an order by ID
router.delete('/delete/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;

        // Check if the order exists
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Delete the order
        await Order.findByIdAndDelete(orderId);

        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/orderDetail/:id', async (req, res) => {
    const findOrder = await OrderSchema.findById(req.params.id)
    res.json(findOrder)
})

module.exports = router;
