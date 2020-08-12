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
  to: 'xxxxxxxxxx@gmail.com','yyyy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
 // html: '<h1>Welcome</h1><p>That was easy!</p>'  // msg will appear as appers in webpage, not as html tags
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
