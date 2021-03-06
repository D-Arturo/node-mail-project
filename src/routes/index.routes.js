const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', (req,res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>User: ${name} </li>
            <li>Email: ${email} </li>
            <li>Phone: ${phone} </li>
        </ul>
        <p>Query: ${message} </p>
    `;
    res.send('Form received');
});

module.exports = router;