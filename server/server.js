const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    const cors = require("cors");
    const nodemailer = require("nodemailer")
    require("dotenv").config();

    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))

    server.use(cors())
    server.use(express.json())

    server.post('/send', (req, res) => {
        const output = 
            `<p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>  
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>`
      
        let transporter = nodemailer.createTransport({
              service: process.env.NM_SERVICE,
              auth: {
                  user: process.env.NM_AUTH_USER,
                  pass: process.env.NM_AUTH_PASSWORD
              },
              tls:{
                rejectUnauthorized:false
              }
        });
      
        let mailOptions = {
            from: process.env.NM_FROM,
            to: process.env.NM_TO,
            subject: 'Node Contact Request',
            text: 'Hello world?',
            html: output
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            else{
                res.sendStatus(200);
            }
        });
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})