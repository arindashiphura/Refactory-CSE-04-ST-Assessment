const express = require('express')
const router = express.Router();
const Form = require('../models/forms'); // Check this path



router.get("/signup", (req, res) => {
    res.render("forms");
});


// POST request handler for registration
router.post('/signup', async (req, res) => {
    try {
        const newPassenger = new Form(req.body);
        console.log('This  data is being sent to the DB:', newPassenger);
        await newPassenger.save();
    } catch (error) {
        console.error('Error registering the passenger:', error);
        res.status(400).render('form', { error: 'An error occurred while registering the passenger.' });
    }
});


module.exports = router;