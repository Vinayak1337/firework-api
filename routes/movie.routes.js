import { Router } from "express";
import { upload } from "../config/Upload_function.js";
const router = Router();
//const uploading = require("../config/s3");
import {
  uploadImage,
  view_images,
  view_image,
  delete_image,
  delete_single,
} from "../controllers/image_controller.js";
//import { getmovieupload, movieupload, getYouTubeUrl, postOverlay, postdelete } from "../controllers/movie.controllers";

router.post("/upload_img", upload.array("file"), uploadImage);
router.get("/view_images", view_images);
router.get("/view_image/:id", view_image);
router.delete("/delete_image/:id", delete_image);
router.get("/delete_img/:id", delete_single);
// router.get(
//     "/movie/get",
//     getmovieupload
//   );
//   router.post(
//     "/movieupload",
//     movieupload
//   );

//   router.post(
//     "/youtube/post",
//     getYouTubeUrl
//   );
//   router.post(
//     "/layout/add",
//     postOverlay
//   );
//   router.post(
//     "/delete/video",
//     postdelete
//   );
export default router;
