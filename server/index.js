// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/apia", (req, res) => {
  res.json({
    data: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball",
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball",
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch",
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5",
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7",
      },
    ],
  });
});
("use strict");
const nodemailer = require("nodemailer");
//const { default: Header } = require("../src/containers/header/Header");

// async..await is not allowed in global scope, must use a wrapper
async function mail(email) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "rowland77@ethereal.email",
      pass: "N5wsCQ4XEc9Yb8qAu9",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: [email, "batihanozio@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world? Test 232", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
app.get("/mail/:email", (req, res) => {
  mail(req.params.email).catch(console.error);
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
