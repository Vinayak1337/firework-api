import { VideoConverted } from '../models/video_converted.js';
// import videoshow from 'videoshow';
//import { uploadFileToS3 } from "../config/s3.js";
//import fs from "fs";
import path, { join } from 'path';
import chalk from 'chalk';
import img2vid from 'img2vid';

let __dirname = path.resolve();

const baseUrl = 'https://firework-backend.onrender.com';
// const baseUrl = 'http://localhost3000';

export const convertion = async (req, res, _next) => {
	try {
		const VideoDoc = await (await VideoConverted.create({ ...req.body }))
			.populate('images')
			.execPopulate();

		console.log(chalk.green('Received Images doc: '), VideoDoc.images.upload);
		const random_name = (Math.random() + 1).toString(36).substring(7);
		const path = join(__dirname, 'public/video', `video_${random_name}.mp4`);

		const payload = {
			slides: VideoDoc.images.upload.map(url => ({ path: url, duration: 2 })),
			output: path,
			forceScale: true
		};
		console.log(chalk.green('Conversion started, path:'), path);
		const isConverted = await img2vid.render(payload);

		if (isConverted) {
			VideoDoc.videoUrl = `${baseUrl}/video/video_${random_name}.mp4`;
			await VideoDoc.save();
			console.log(
				chalk.green('Created video:'),
				chalk.blue(`${baseUrl}/video/video_${random_name}.mp4`)
			);
			res.status(200).send(VideoDoc);
			return;
		}
		await VideoDoc.remove();
		console.log(chalk.red(`Creating video_${random_name}.mp4 was failed.`));
		res.status(500).json('failed');
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
};

//const staticUrl = "https://sgp1.digitaloceanspaces.com/storage.tellytell.com";
// const convertion = async (req, res, next) => {
// 	try {
// 		const add_images = await VideoConverted.create({ ...req.body });
// 		let images = await add_images.populate('images').execPopulate();
// 		console.log(images.images.upload);

// const videoOptions = {
// 	fps: 25,
// 	loop: images.loop, // seconds
// 	transition: true,
// 	transitionDuration: 1, // seconds
// 	videoBitrate: 1024,
// 	videoCodec: 'libx264',
// 	size: '640x?',
// 	audioBitrate: '128k',
// 	audioChannels: 2,
// 	format: 'mp4',
// 	pixelFormat: 'yuv420p'
// };

// const random_name = (Math.random() + 1).toString(36).substring(7);
// let filePath = path.join(
//   __dirname,
//   "/public/video_url",
//   `${random_url}.mp4`
// );
// console.log(filePath);
// let video = videoshow(images.images.upload, videoOptions)
// 	.save(`./public/video_url/${random_url}.mp4`)
// 	.on('start', function (command) {
// 		console.log('ffmpeg process started:', command);
// 	})
// 	.on('error', function (err, stdout, stderr) {
// 		console.log('Error:', err, '\n', stdout, '\n', stderr);
// 		// console.log("ffmpeg stderr:", stderr);
// 	})
// 	.on('end', async function (output) {
// 		console.log('Video created in:', output);

// 		const saved = await images.updateOne({
// 			$set: { videoUrl: `${baseUrl}/video_url/${random_url}.mp4` }
// 		});

// 		res.status(200).json(saved);
// uploadFileToS3({ filePath: filePath, url: random_url })
//   .then(async (data) => {
//     console.log(data);
//     const saved = await images.update({
//       $set: { videoUrl: data.Url, upload_flag: true },
//     });

//     res
//       .status(200)
//       .send(`video is uploaded successfully!!   -  ${data.Url}`);
//     const remove_file = fs.unlink(filePath, (err, res) => {
//       if (err) console.log(err);
//       else {
//         console.log("removed successfully");
//       }
//     });

//     // do whatever you want with it (save in database etc.)
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const saved = await images.updateOne({
//   $set: { videoUrl: `${staticUrl}/${random_url}.mp4` },
// });
// res.send(saved);
// 			});
// 		//res.send("converstion started");
// 	} catch (err) {
// 		console.log(err);
// 		res.status(404).json({ message: err.message });
// 	}
// };

const get_videos = async (req, res) => {
	try {
		const view_all = await VideoConverted.find({});
		res.status(200).send(view_all);
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

const get_video = async (req, res) => {
	try {
		const id = req.params.id;
		const view = await VideoConverted.findById(id);
		res.status(200).json({ data: view });
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

const delete_video = async (req, res) => {
	try {
		const id = req.params.id;
		const delete_video = await VideoConverted.findByIdAndDelete(id);
		res.status(200).json({ data: `deleted success ${delete_video}` });
	} catch (err) {
		console.log(err);
		res.status(404).json({ message: err.message });
	}
};

export const uploadVideo = async (req, res) => {
	const videoUrl = req.files?.map(video => video.location)[0];

	const doc = await VideoConverted.create({ ...req.body, videoUrl });
	res.status(200).json(doc);
};

export const editVideo = async (req, res) => {
	const { id } = req.params;

	await VideoConverted.findByIdAndUpdate(id, {
		...req.body
	});

	res.status(200).json('Updated successflly');
};

export { get_videos, get_video, delete_video };
