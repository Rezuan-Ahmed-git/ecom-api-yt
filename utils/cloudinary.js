const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUploadImg = async (fileToUploads) => {
  return await cloudinary.uploader.upload(fileToUploads, {
    resource_type: 'auto',
  });

  //   return new Promise((resolve) => {
  //     cloudinary.uploader.upload(fileToUploads, (result) => {
  //       resolve(
  //         {
  //           url: result.secure_url,
  //         },
  //         {
  //           resource_type: 'auto',
  //         }
  //       );
  //     });
  //   });
};

module.exports = cloudinaryUploadImg;
