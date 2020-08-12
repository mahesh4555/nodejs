var nodemailer = require('nodemailer');  // npm install nodemailer

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxxx@gmail.com',
    pass: 'xxxxx'
  }
});

var mailOptions = {
  from: 'xxxxxx@gmail.com',
  to: 'xxxxxxxxxx@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 