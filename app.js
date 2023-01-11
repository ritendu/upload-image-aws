const express = require('express');
const app = express();
const fileupload = require('express-fileupload');

var AWS = require('aws-sdk');
// const AWS_PROFILE=testuser
  
app.use(fileupload());
app.post('/upload',async(req,res)=>{
    console.log(req.files.file,">>>>>>>>>>>")
    const S3_ACCESS_KEY="AKIAUDB4AGAXKO2RKVPV"
const S3_SECRET_KEY="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"
const S3_BUCKET_PATH="ustadhihhm-dev-storage"
const S3_BUCKET_REGION="eu-west-3"
// Set the region 
AWS.config.update({
    secretAccessKey: S3_SECRET_KEY,
    accessKeyId: S3_ACCESS_KEY,
    region: S3_BUCKET_REGION,
})

const s3 = new AWS.S3();
const fileContent  = Buffer.from(req.files.file.data, 'binary');
console.log(fileContent,"fileContent")

    let filename = `${Date.now()}.${req.files.file.name}`;


// Setting up S3 upload parameters
const params = {
    Bucket: S3_BUCKET_PATH,
    Key: filename, // File name you want to save as in S3
    ACL: "public-read",
    Body: fileContent 
};
const data = await s3.upload(params).promise();
console.log(data,"data")
// Uploading files to the bucket
// s3.upload(params, function(err, data) {
//     if (err) {
//         throw err;
//     }
//     res.send({
//         "response_code": 200,
//         "response_message": "Success",
     
//     });
});



app.listen(3000,()=>{
console.log('App is running..')
})