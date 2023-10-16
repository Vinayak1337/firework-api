import { execSync } from 'child_process';
import os from 'os';

function installMediaTools() {
	const platform = os.platform();
	const arch = os.arch();

	let ffmpegPackageToInstall = '@ffmpeg-installer/ffmpeg'; // Default package for ffmpeg
	let ffprobePackageToInstall = '@ffprobe-installer/ffprobe'; // Default package for ffprobe

	if (platform === 'linux' && arch === 'x64') {
		ffmpegPackageToInstall = '@ffmpeg-installer/linux-x64';
		ffprobePackageToInstall = '@ffprobe-installer/linux-x64';
	}

	console.log(`Installing ${ffmpegPackageToInstall}...`);
	execSync(`npm install ${ffmpegPackageToInstall}`, { stdio: 'inherit' });

	console.log(`Installing ${ffprobePackageToInstall}...`);
	execSync(`npm install ${ffprobePackageToInstall}`, { stdio: 'inherit' });
}

installMediaTools();
