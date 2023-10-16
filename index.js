import express from 'express';
// import { connect } from "mongoose";
import pkg from 'mongoose';
const { connect } = pkg;
// import { green, red } from "chalk";
import pkg1 from 'chalk';
const { green, red } = pkg1;
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { config } from 'dotenv';
//import timeout from "connect-timeout";
import path from 'path';
config();

// import { PORT, MONGODB_URI } from "./config/constants";

// import middlewaresConfig from "./config/middleware";
import movieRouter from './routes/movie.routes.js';
import VideoRouter from './routes/video_converted.js';
//import { convertion } from "./controllers/images_to_video.js";

const app = express();
// app.use(fileUpload());
// middlewaresConfig(app);
const __dirname = path.resolve();
//console.log(__dirname);
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
	origin: '*'
  }));

app.use('/', movieRouter);
app.use('/video_converted', VideoRouter);

// function haltOnTimedout(req, res, next) {
//   if (!req.timedout) next();
// }

connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(result => {
		console.log(
			green.bold(
				`
        Yep this is working 🍺
        App listen on port: ${process.env.PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `
			)
		);
		const server = app.listen(process.env.PORT);
		server.timeout = 300000;
	})
	.catch(err => {
		console.log(red('Cannot run!', err));
	});
