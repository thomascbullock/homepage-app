const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const s3Uploader = async function (file) {

    console.log('made it to s3Uploader function...');

    const newUuid = uuid();

    const s3 = new AWS.S3();

    const uploadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: newUuid,
        Body: file
    }

    try {
    console.log('uploading...');
    console.log(uploadParams);
    await s3.putObject(uploadParams).promise();
    return newUuid;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

}

const s3Downloader = async function (fileName) {

    const s3 = new AWS.S3();

    const downloadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName
    }

    try {
        const file = await s3.getObject(downloadParams).promise();
        return file.Body.toString();
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports = { s3Uploader, s3Downloader}
