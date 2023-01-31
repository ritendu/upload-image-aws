const express = require('express');
const app = express();
// const fileupload = require('express-fileupload');

var AWS = require('aws-sdk');
// const AWS_PROFILE=testuser
  
// app.use(fileupload());
// app.post('/upload',async(req,res)=>{
//     console.log(req.files.file,">>>>>>>>>>>")
//     const S3_ACCESS_KEY=S3_ACCESS_KEY
// const S3_SECRET_KEY=S3_SECRET_KEY
// const S3_BUCKET_PATH=S3_BUCKET_PATH
// const S3_BUCKET_REGION=S3_BUCKET_REGION
// // Set the region 
// AWS.config.update({
//     secretAccessKey: S3_SECRET_KEY,
//     accessKeyId: S3_ACCESS_KEY,
//     region: S3_BUCKET_REGION,
// })

// const s3 = new AWS.S3();
// const fileContent  = Buffer.from(req.files.file.data, 'binary');
// console.log(fileContent,"fileContent")

//     let filename = `${Date.now()}.${req.files.file.name}`;


// // Setting up S3 upload parameters
// const params = {
//     Bucket: S3_BUCKET_PATH,
//     Key: filename, // File name you want to save as in S3
//     ACL: "public-read",
//     Body: fileContent 
// };
// const data = await s3.upload(params).promise();
// console.log(data,"data")

// // s3.upload(params, function(err, data) {
// //     if (err) {
// //         throw err;
// //     }
// //     res.send({
// //         "response_code": 200,
// //         "response_message": "Success",
     
// //     });
// });



app.listen(3000,()=>{
console.log('App is running..')
})