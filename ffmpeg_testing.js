// import videoshow from "videoshow";
// var images = [
//   "https://sgp1.digitaloceanspaces.com/storage.tellytell.com/file-dc9e9de4dee0987585e34671b9659ab9.jpeg",
//   "https://sgp1.digitaloceanspaces.com/storage.tellytell.com/file-b1a192ef3166d56b3a7c1d9c3f8ca2cb.jpeg",
// ];

// var videoOptions = {
//   fps: 25,
//   loop: 5, // seconds
//   transition: true,
//   transitionDuration: 1, // seconds
//   videoBitrate: 1024,
//   videoCodec: "libx264",
//   size: "640x?",
//   audioBitrate: "128k",
//   audioChannels: 2,
//   format: "mp4",
//   pixelFormat: "yuv420p",
// };

// videoshow(images, videoOptions)
//   .save("video.mp4")
//   .on("start", function (command) {
//     console.log("ffmpeg process started:", command);
//   })
//   .on("error", function (err, stdout, stderr) {
//     console.log("Error:", err);
//     console.log("ffmpeg stderr:", stderr);
//   })
//   .on("end", function (output) {
//     console.log("Video created in:", output);
//   });
