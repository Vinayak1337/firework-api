import { config } from "dotenv";
config();

export const SECRETS = {
  
  spacesEndpoint: process.env.DO_SPACES_ENDPOINT,
  spacesAcessKey: process.env.DO_SPACES_ACCESS_KEY,
  spacesSecretKey: process.env.DO_SPACES_SECRET_KEY,
  aws_accessKey_Id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_key_Id: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
};



