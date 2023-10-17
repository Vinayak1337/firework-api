# Firework Backend

This repository contains the backend server for Firework, providing RESTful APIs to support the frontend operations.

## Overview

The project is written in Node.js and JavaScript. It has several functionalities:
- Utilizes **Multer** to receive images from the frontend.
- Processes a series of images using **FFmpeg** to create a video slideshow with user-defined captions, caption colors, and font sizes.
- Supports painting captions on a video received from the frontend with similar configurations.
- Stores the processed videos in Amazon S3 and maintains metadata in MongoDB.

## Live Repository

You can access the repository [here](https://github.com/Vinayak1337/firework.backend).

## Getting Started

To set up a local copy of this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vinayak1337/firework.backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd firework.backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following values:
   ```
   DO_SPACES_ENDPOINT=<Your_DO_SPACES_ENDPOINT>
   DO_SPACES_ACCESS_KEY=<Your_DO_SPACES_ACCESS_KEY>
   DO_SPACES_SECRET_KEY=<Your_DO_SPACES_SECRET_KEY>
   JWT_SECRET=<Your_JWT_SECRET>
   MONGODB_URI=<Your_MONGODB_URI>
   COGNITO_REGION=<Your_COGNITO_REGION>
   NODE_ENV=development
   PORT=5000
   AWS_ACCESS_KEY_ID=<Your_AWS_ACCESS_KEY_ID>
   AWS_SECRET_ACCESS_KEY=<Your_AWS_SECRET_ACCESS_KEY>
   ```

5. Start the development server:
   ```bash
   npm start
   ```

This will launch the backend server, and it will start listening on the specified port.

## License

This project is licensed under the MIT License. You can view the license [here](https://github.com/Vinayak1337/firework.backend/blob/master/LICENSE.md).
