
'use strict';
//import formData from './submit'
const AWS = require("aws-sdk")
const SES = new AWS.SES();

function sendEmail(formData, callback){
  const emailParams = {
    Source: "nissimramdotcom@gmail.com",
    ReplyToAddresses: [formData.reply_to],
    Destination : {
      ToAddresses : ["nissimram1812@gmail.com"]
    },
    Message: {
      Body : {
        Text : {
          Charset : "UTF-8",
          Data : `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.reply_to}`
        },
      },
      Subject : {
        Charset  : "UTF-8",
        Data : "New message from nissimram.com",
      },
    },
  };
  //Build SES Parameters
  // Send the email
  SES.sendEmail(emailParams, callback)
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body)


  sendEmail(formData,function(err, data){
    const response = {
      statusCode : err ? 500 : 200,
      headers : {
        "Content-Type" : "application/json",
        "Acces-Control-Allow-Origin" : "https://www.nissimram.com/#/",
      },
      body : JSON.stringify({
        message : err ? err.message : data
      })
    }
    callback(null, response);
  })
};
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  /*
const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);*/
