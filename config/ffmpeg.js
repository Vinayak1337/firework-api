// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// const ffmpeg = require("fluent-ffmpeg");

// ffmpeg.setFfmpegPath(ffmpegPath);
// ffmpeg.setFfprobePath("/app/node_modules/@ffprobe-installer/darwin-x64/ffprobe");

// const fs = require("fs");
// const s3 = require("../config/s3");
// const { v4: uuidv4 } = require('uuid');

// const { exec } = require('child_process')

// const movieThumnailName=require("../models/movie.models")

// const {DetectLanguage}= require('./language.detect');

// const uni2kur = require('../config/unicodetokurtidev');

// const uni2bamini = require('../config/uni2bamini');

// exports.getThumnail = async (req, res, next,url,movieName) => {
//   console.log(`\n\ninside getThumnail\n\n`);
//   const thumnailPictureName=`${uuidv4()}-secound.png`;
//   let thumnailPicture = ffmpeg();
//   thumnailPicture.input(url);
//   thumnailPicture.screenshots({
//     timestamps: [5],
//     filename: thumnailPictureName,
//     folder: 'thumnailoutput',
//     size: '180x320'
//   }).on('error', function(err) {
//     console.log('An error occurred: ' + err.message);
//   })
//   .on('end', async()=> {
//     console.log(`\n\nThumnail captured\n\n`);
//           let filepart = {};
//           const path = `thumnailoutput/${thumnailPictureName}`;
//           const stat = fs.statSync(path);
//           const fileSize = stat.size;
//           const buffer = fs.readFileSync(path);
//           filepart.originalname = `${thumnailPictureName}`;
//           filepart.buffer = buffer;
//           filepart.size = fileSize;
//           console.log(`Thumnail Uploading on Aws`);
//           const responce=await s3.uploadFile(filepart);
//           console.log(`Thumnail Uploaded on Aws`);
//           const movieThumnail = new movieThumnailName({
//             movieName: `${movieName}`,
//             videoFIle:url,
//             thumnalFile:responce.Location,
//             caption:"",
//             captionFontSize:"20",
//             captionFontColor:"#000000"
//           });
//           console.log(`Just before saving data`);
//           await movieThumnail.save();
//           res.send(movieThumnail);
//           if(fs.existsSync( `thumnailoutput/${thumnailPictureName}`)){
//             fs.unlinkSync( `thumnailoutput/${thumnailPictureName}`);
//           }
//   })
// };


// exports.getYouTubeUrl = async (req, res, next,url,movieName) => {
//   console.log(`\n\ninside getThumnail\n\n`);
//   const thumnailPictureName=`${uuidv4()}-secound.png`;
//   let thumnailPicture = ffmpeg();
//   thumnailPicture.input(url);
//   thumnailPicture.screenshots({
//   timestamps: [5],
//   filename: thumnailPictureName,
//   folder: 'thumnailoutput',
//   size: '180x320'
//   }).on('error', function(err) {
//   console.log('An error occurred: ' + err.message);
//   })
//   .on('end', async()=> {
//     console.log(`\n\nThumnail captured\n\n`);
//         let filepart = {};
//         const path = `thumnailoutput/${thumnailPictureName}`;
//         const stat = fs.statSync(path);
//         const fileSize = stat.size;
//         const buffer = fs.readFileSync(path);
//         filepart.originalname = `${thumnailPictureName}`;
//         filepart.buffer = buffer;
//         filepart.size = fileSize;
//         console.log(`Thumnail Uploading on Aws`);
//         const responce=await s3.uploadFile(filepart);
//         console.log(`Thumnail Uploaded on Aws`);
//         const movieThumnail = new movieThumnailName({
//           movieName: `${movieName}`,
//           videoFIle:url,
//           thumnalFile:responce.Location
//         });
//         console.log(`Just before saving data`);
//         await movieThumnail.save();
//         res.send(movieThumnail);
//         if(fs.existsSync( `thumnailoutput/${thumnailPictureName}`)){
//           fs.unlinkSync( `thumnailoutput/${thumnailPictureName}`);
//         }



//   })
// };

// exports.capturedThumnail = async (req, res, next,url,movieName) => {
//   const thumnailPictureName=`${uuidv4()}-secound.png`;
//   let thumnailPicture = ffmpeg();
//   thumnailPicture.input(url);
//   thumnailPicture.screenshots({
//     timestamps: [5],
//     filename: thumnailPictureName,
//     folder: 'tmp/youtubevideo',
//     size: '180x320'
//   }).on('error', function(err) {
//     console.log('An error occurred: ' + err.message);
//   })
//   .on('end', async()=> {
//     console.log(`\nThumnail captured On YouTube\n`);
//           let filepart = {};
//           const path = `tmp/youtubevideo/${thumnailPictureName}`;
//           const stat = fs.statSync(path);
//           const fileSize = stat.size;
//           const buffer = fs.readFileSync(path);
//           filepart.originalname = `${thumnailPictureName}`;
//           filepart.buffer = buffer;
//           filepart.size = fileSize;
//           console.log(`Thumnail Uploading on Aws`);
//           const responce=await s3.uploadFile(filepart);
//           console.log(`Thumnail Uploaded on Aws`);
//           const movieThumnail = new movieThumnailName({
//             movieName: `${movieName}`,
//             videoFIle:url,
//             thumnalFile:responce.Location
//           });
//           console.log(`Just before saving data`);
//           await movieThumnail.save();
//           res.send(movieThumnail);
//           if(fs.existsSync( `tmp/youtubevideo/${thumnailPictureName}`)){
//             fs.unlinkSync( `tmp/youtubevideo/${thumnailPictureName}`);
//           }
//   })
// };


