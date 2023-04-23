// const FileReader = require('FileReader')
const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');
const fs = require('fs');
const officeParser = require('officeparser');
const { extractText } = require('node-extract-text-from-file')
// const s3 = new AWS.S3({
//   accessKeyId: 'YOUR_ACCESS_KEY',
//   secretAccessKey: 'YOUR_SECRET_KEY'
// });





app.use(fileupload());
app.post('/upload',async(req,res)=>{
  // let Bucket = config.aws.s3.bucketPath;
    const s3 = new AWS.S3({
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_KEY,
        region: process.env.S3_BUCKET_REGION,
      });
  
      const date = new Date();
      const name = `${date.getTime()}${req.files.file.name}`;
      let params = {
        Bucket: process.env.S3_BUCKET_NAME + '/word-count',
        Key: name,
        Body: req.files.file.data,
        ACL: 'public-read',
      };

      const data = await s3.upload(params).promise();
      const location = data.Location
  const { text, originFileType } = await extractText({ fromUrl: location });
  // console.log(text,"text")
  const arr = text.split(' ');
  const newArr = arr.filter(item=>item!=='');

  console.log(newArr.length,"kkkk")
      // const param = {
      //   Bucket: process.env.S3_BUCKET_NAME,
      //   Key: data.Key
      // };
      // s3.getObject(param, function(err, data) {
      //   if (err) {
      //     console.log(err, err.stack);
      //   } else {
      //     const fileContent = data.Body.toString('utf-8');
      //     console.log(fileContent);
          // officeParser.parseOffice(fileContent, function(data, err){
          //   // "data" string in the callback here is the text parsed from the office file passed in the first argument above
          //   if (err) return console.log(err);
          //   console.log(data,"LLLLLLLLLLLLL");
          // });
    //     }
    // });

  })

//   app.post('/upload',async(req,res)=>{
//     let arr = [];
//     console.log(req.files.file,">>>>>>>>>>>")
//     console.log(process.env.S3_ACCESS_KEY,"S3_ACCESS_KEY")
//     const s3 = new AWS.S3({
//         accessKeyId: process.env.S3_ACCESS_KEY,
//         secretAccessKey: process.env.S3_SECRET_KEY,
//         region: process.env.S3_BUCKET_REGION,
//       });

//       const date = new Date()
//    req.files.file.map(async (file)=>{
//         let filename = `${date.getTime()}${file.name}`
//         let params = {
//             Bucket: process.env.S3_BUCKET_PATH + '/diplomas',
//             Key: filename,
//             ACL: 'public-read',
//             Body: file.data,
//           };

//       const fileData = await s3.upload(params).promise()
//       console.log(fileData,"fileData")
            
//             arr.push(fileData.Location);
//             console.log(arr,"arr>>>>>>>>>")
//             if(arr.length === req.files.file.length){
//                 console.log('Hello World.')
//                 console.log(arr,"arr")
// res.status(200).send(arr);
//             }
         
//       })
    
//   })


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