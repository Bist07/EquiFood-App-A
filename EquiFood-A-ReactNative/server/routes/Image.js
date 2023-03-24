import express from "express";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from 'multer';
import prisma from '@prisma/client';
export const router = express.Router()
import sharp from 'sharp'
import crypto from 'crypto';
import dotenv from 'dotenv' //had .config() //might need to provide path to env file

dotenv.config({ path: '.env' });

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

router.post('/posts', upload.single('image'), async (req, res) => {

    const file = req.body
    console.log(file)
    const fileBuffer = await sharp(file.buffer).toBuffer()

    // Configure the upload details to send to S3
    const fileName = generateFileName();
    const uploadParams = {
        Bucket: bucketName,
        Body: fileBuffer,
        Key: fileName,
        ContentType: file.mimetype
    }

    // Send the upload to S3
    await s3Client.send(new PutObjectCommand(uploadParams));

    // Save the image name to the database. Any other req.body data can be saved here too but we don't need any other image data.
    // const post = await prisma.posts.create({
    //     data: {
    //         imageName,
    //     }
    // })

    res.send(post)
})

router.get("/images", async (req, res) => {
    const posts = await prisma.posts.findMany({ orderBy: [{ created: 'desc' }] }) // Get all posts from the database

    for (let post of posts) { // For each post, generate a signed URL and save it to the post object
        post.imageUrl = await getSignedUrl(
            s3Client,
            new GetObjectCommand({
                Bucket: bucketName,
                Key: imageName
            }),
            { expiresIn: 60 }// 60 seconds
        )
    }

    res.send(posts)
})