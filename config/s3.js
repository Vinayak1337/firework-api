// import multer from "multer";
// import multerS3 from "multer-s3";
// import AWS from "aws-sdk";
// import md5 from "md5";
// import { SECRETS } from "./env_constant.js";
// import fs from "fs";
// import mime from "mime-types";
// const spacesEndpoint = new AWS.Endpoint(SECRETS.spacesEndpoint);

// const s3 = new AWS.S3({
//   endpoint: spacesEndpoint,
//   accessKeyId: SECRETS.spacesAcessKey,
//   secretAccessKey: SECRETS.spacesSecretKey,
//   region: SECRETS.region,
// });

// export const uploadFileToS3 = ({ filePath, ACL = "public-read", url }) => {
//   const contentType = mime.contentType(filePath);
//   // console.log(contentType);
//   // const ext = mime.extensions[contentType][0];
//   // console.log(ext);
//   const fileName = url + "_" + Date.now() + "." + "mp4";
//   return new Promise((resolve, reject) => {
//     const buffer = fs.readFileSync(filePath);
//     s3.putObject(
//       {
//         Bucket: "storage.tellytell.com",
//         Key: fileName,
//         ACL: ACL,
//         Body: buffer,
//         ContentType: contentType,
//       },
//       (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           data.Url = `https://storage.tellytell.com.${SECRETS.spacesEndpoint}/${fileName}`;
//           resolve(data);

//           // Uncommend this incase you want to get files with ACL = private
//           // s3.getSignedUrl("getObject", { Bucket: process.env.S3_BUCKET_NAME, Key: fileName }, (err, url) => {
//           //     if (err) {
//           //         reject(err);
//           //     } else {
//           //         resolve({ Url: url, Etag: data.ETag });
//           //     }
//           // })
//         }
//       }
//     );
//   });
// };
