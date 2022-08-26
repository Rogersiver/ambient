import nextConnect from 'next-connect';
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';

import { NextApiRequest, NextApiResponse } from "next";

cloudinary.config({ 
  cloud_name: 'dobno51hg', 
  api_key: '438888336457416', 
  api_secret: 'ZEdoB15zdCAa31CjpI_r_dXXroM' 
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: <any>{
    folder: "tracks",
    format: "wav",
    resource_type: 'video',
    allowedFormats: ['wav', 'mp3']
  },
});

const upload = multer({storage: storage});

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    console.warn(error);
    res
    .status(501)
    .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req: any, res) => {
  try {
    console.log(`gonna try upload now`);
  } catch (error) {
   console.warn(error); 
  }
  console.log(`it worked?`)
  console.log(`req.file`, req.file);
  res.status(200).json(req.file);
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
