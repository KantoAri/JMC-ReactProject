import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
const app = express();
// const { resolve } = require('path');
// const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const port = 4000;
app.use(cors());
app.use(express.json({limit:"25mb"}));
app.use(express.urlencoded({limit:"25mb"}));
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});

function sendEmail({email,subject,message,name,telephone}){
    
   
        // var transpoter = nodemailer.createTransport({           
        //     //service:"gmail",
        //       host: 'smtp.gmail.com',
        //  //  service: "gmail",
        //      port: 587,
        //      secure: false,             
        //     auth: {
        //          user: "berfaceb@gmail.com",
        //         pass: "kykd pjkl cffn yhwj",
        //     },
        // });
        // // user: "bertrandsteev@gmail.com",
        // const mail_configs ={
        //     from: email,
        //     to: "berfaceb@gmail.com",
        //     subject: subject,
        //    // text: message, 
        //     html: `<div>
            
        //     <p>${message}</p>
        //         <br>
        //         <p></p>
        //         <p> Nom : <strong>${name}</strong></p>
        //         <p>Email : <strong>${email}</strong> </p>
        //         <p>Tél : <strong>${telephone}</strong> </p>
        //     </div>
        //     `,
        // };
        // (async()=>{
        //      transpoter.sendMail(mail_configs);
    
        // })();
       

            // secure: false,
    return new Promise((resolve,reject)=> {
        var transpoter = nodemailer.createTransport({           
            //service:"gmail",
              host: 'smtp.gmail.com',
         //  service: "gmail",
             port: 587,
             secure: false,             
            auth: {
                 user: "berfaceb@gmail.com",
                pass: "kykd pjkl cffn yhwj",
            },
        });
        // user: "bertrandsteev@gmail.com",
        const mail_configs ={
            from: email,
            to: "berfaceb@gmail.com",
            subject: subject,
           // text: message, 
            html: `<div>
            
            <p>${message}</p>
                <br>
                <p></p>
                <p> Nom : <strong>${name}</strong></p>
                <p>Email : <strong>${email}</strong> </p>
                <p>Tél : <strong>${telephone}</strong> </p>
            </div>
            `,
        };
        transpoter.sendMail(mail_configs,function(error,info)
        {
           if(error) 
            {
                console.log(error);
                return reject({message:'An error occurred'})
            } 
            return resolve({message:"Email sent successfully"}); 
              
        });
    });
};

app.get("/",(req,res) => {
    sendEmail(req.query)
     .then((response)=>res.status(200).send(response.message))
     .catch((error)=>res.status(500).send(error.message));
});

//.then((response)=>response.send(response.message))

app.listen(port,()=>{
    console.log(`nodemailer es listeninhg at http://localhost:${port}`);
});