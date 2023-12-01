require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/joinUs.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { nameIn, emailIn, phoneIn, commentIn } = req.body;
  const resumePath = req.file ? req.file.path : null; // Check if a file was uploaded
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL,
    to: 'ezjaramillo@wsd.net',
    subject: 'New Job Inquiry',
    text: `
      Name: ${nameIn}
      Email: ${emailIn}
      Phone Number: ${phoneIn}
      Comments: ${commentIn}
    `,
    attachments: [
      {
        filename: 'resume.pdf', // Customize the filename as needed
        path: resumePath, // Path to the uploaded file
      },
    ],
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
