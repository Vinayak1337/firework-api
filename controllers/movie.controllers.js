// const MovieandNameandThumnail = require("../models/movie.models");
// const Images = require("../models/image_model");
// const getVideoId = require("get-video-id");
// const ytdl = require("ytdl-core");

// const ffmpeg = require("../config/ffmpeg");
// const path = require("path");
// const fs = require("fs");
// const s3 = require("../config/s3");
// const { getVideoDurationInSeconds } = require("get-video-duration");
// const { v4: uuidv4 } = require("uuid");

// exports.getmovieupload = async (req, res, next) => {
//   try {
//     const data = await MovieandNameandThumnail.find({});
//     return res.send(data);
//   } catch (err) {
//     return res.error(`SomeThing Went Wrong!!`, err);
//   }
// };

// exports.movieupload = async (req, res, next) => {
//   try {
//     console.log(`\n\nJust before controllers Call\n\n${req.files.movie}`);
//     const response = await s3.uploadVideo(req.files.movie);
//     console.log("\n\nVideo Uploaded on Server\n\n");
//     const duration = await getVideoDurationInSeconds(response.Location);
//     if (duration > 60 || duration < 6) {
//       return res.send("Please Upload 6-60 sec videos...");
//     }
//     await ffmpeg.getThumnail(
//       req,
//       res,
//       next,
//       response.Location,
//       req.body.movieName
//     );
//   } catch (err) {
//     return res.error(`SomeThing Went Wrong!!`, err);
//   }
// };

// exports.getYouTubeUrl = async (req, res, next) => {
//   try {
//     const { url, caption } = req.body;
//     console.log(url, caption);
//     const title = uuidv4();
//     const writeableStream = fs.createWriteStream(
//       `tmp/youtubevideo/${title}.mp4`
//     );
//     ytdl(url).pipe(writeableStream);
//     writeableStream.on("finish", async (err) => {
//       console.log("Movie Saves in Local Directry");
//       const buffer = fs.readFileSync(`tmp/youtubevideo/${title}.mp4`);
//       const data = await s3.uploadStream(buffer, title);
//       fs.unlinkSync(`tmp/youtubevideo/${title}.mp4`);
//       await ffmpeg.capturedThumnail(req, res, next, data.Location, caption);
//     });
//   } catch (err) {
//     return res.send(`SomeThing Went Wrong!!`);
//   }
// };

// exports.postOverlay = async (req, res, next) => {
//   try {
//     const { caption, url,fontSize, color} = req.body;
//     const user = await MovieandNameandThumnail.findOne({ videoFIle: url });
//     user.caption = caption;
//     user.captionFontSize=fontSize||20;
//     user.captionFontColor=color||"#000000";
//     console.log("Saving Caption");
//     await user.save();
//     return res.send(user);
//   } catch (err) {
//     return res.send(`SomeThing Went Wrong!!`);
//   }
// };

// exports.postdelete = async (req, res, next) => {
//   try {
//     const { url } = req.body;
//     const data = await MovieandNameandThumnail.findOneAndDelete({
//       videoFIle: url,
//     });
//     return res.send(data);
//   } catch (err) {
//     return res.send(`SomeThing Went Wrong!!`);
//   }
// };


