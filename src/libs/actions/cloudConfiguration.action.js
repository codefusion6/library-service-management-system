// import { v2 as cloudinary } from "cloudinary";
// cloudinary.js
import nextCloudinary from 'next-cloudinary';

const { setup, cloudinary } = nextCloudinary;

 
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
 
// export async function POST( request) {
//   const body = await request.json();
//   const { paramsToSign } = body;
 
//   const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET);
  
//   return Response.json({ signature });
// }

// cloudinary.js


// cloudinary.js


const { cloud } = setup({
  cloudName: 'your_cloud_name',
});

export { cloudinary, cloud };

