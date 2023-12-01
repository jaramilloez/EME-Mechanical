const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/joinUs.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { nameIn, emailIn, phoneIn, commentIn } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'business_email@example.com',
    subject: 'New Job Inquiry',
    text: `
      Name: ${nameIn}
      Email: ${emailIn}
      Phone Number: ${phoneIn}
      Comments: ${commentIn}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent:', info.response);
    res.send('Form submitted successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
