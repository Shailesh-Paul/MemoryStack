require('dotenv').config();


const {ImageKit }= require('@imagekit/nodejs');
const { URLEndpoints } = require('@imagekit/nodejs/resources/accounts.js');



const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  URLEndpoint:process.env.IMAGEKIT_URL_ENDPOINT
});


async function uploadFile(file) {
        
    const result = await imagekit.files.upload({
      file: file.buffer.toString("base64"),
      fileName: file.originalname,
    });

    return result;
}


module.exports= uploadFile;