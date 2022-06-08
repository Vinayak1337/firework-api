import { Router } from 'express';
import {
	get_videos,
	get_video,
	convertion,
	delete_video,
	uploadVideo,
	editVideo
} from '../controllers/images_to_video.js';
import { upload } from '../config/Upload_function.js';
const router = Router();

router.post('/converstion', convertion);
router.post('/upload_video', upload.array('video'), uploadVideo);
router.get('/view_videos', get_videos);
router.route('/view_video/:id').get(get_video).post(editVideo);
router.delete('/delete_video/:id', delete_video);

export default router;
