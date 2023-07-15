const express = require('express');

const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('project'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/project/index.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        // secure: true,
        auth:{
            user:'myportfolio064@gmail.com',
            pass: 'pkprhevtsysuacwe'
        }
    })

    const emailOptions ={
        from : req.body.email,
        to : 'myportfolio064@gmail.com',
        subject : `${req.body.name} 's message from portfolio contact form!`,
        text : `
            ${req.body.message}
            ---------------------------------------------
            Name : ${req.body.name},
            Email : ${req.body.email},
            Phone : ${req.body.phone}
            ---------------------------------------------
        `
    }

    transporter.sendMail(emailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log(`Email Sent: ${info.response}`);
            res.send('success');
        }
    })
})


app.listen(PORT,()=>{
    console.log(`Server Starting on port ${PORT}`)
})