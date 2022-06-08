// import express from "express";
// import expressFileUpload from "express-fileupload";
// import { existsSync, mkdirSync } from "fs";
// export default(app)=>  {
//     // app.use(express.json());
//     // app.use(express.urlencoded({ extended: true }));
//     app.use(
//       expressFileUpload({
//         userTepFiles:true,
//         tempFileDir: "/tmp/",
//       })
//     )
//     if(!existsSync("tmp")){
//       mkdirSync( "tmp" )
//       if(!existsSync("tmp/youtubevideo")){
//         mkdirSync( "tmp/youtubevideo" )
//     }
//     }
//      if(!existsSync("tmpoutput")){
//        mkdirSync( "tmpoutput" )
//     }
//   };