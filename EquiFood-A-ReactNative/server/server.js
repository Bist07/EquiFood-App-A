import express from "express";
import { router as restaurantRouter } from './routes/Restaurant.js'
import { router as customerRouter } from './routes/customer.js'
import { router as menuRouter } from './routes/Menu.js'
import dotenv from 'dotenv' //had .config() //might need to provide path to env file

dotenv.config({ path: '.env' });

var ip_address = "";

const app = express();

function json(url) {
    return fetch(url).then(res => res.json());
}

/**
 * Middleware
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */

app.get('/', (request, response) => {
    response.status(200).send("Hello world")
})

app.use('/Restaurant', restaurantRouter);
app.use('/customer', customerRouter);
app.use('/Menu', menuRouter);

<<<<<<< HEAD
//Images S3
//import crypto from 'crypto';
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from 'multer';
import prisma from '@prisma/client';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


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

//const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

app.post('/posts', upload.single('image'), async (req, res) => {
    const file = req.file
    const caption = req.body.caption

    const fileBuffer = await sharp(file.buffer).toBuffer()

    // Configure the upload details to send to S3
    const fileName = "generateFileName()"
    const uploadParams = {
        Bucket: bucketName,
        Body: fileBuffer,
        Key: fileName,
        ContentType: file.mimetype
    }

    // Send the upload to S3
    await s3Client.send(new PutObjectCommand(uploadParams));

    // Save the image name to the database. Any other req.body data can be saved here too but we don't need any other image data.
    const post = await prisma.posts.create({
        data: {
            imageName,
            caption,
        }
    })

    res.send(post)
})

app.get("/images", async (req, res) => {
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

=======
//creates connection router for Orders table
const ordersRouter = require('./routes/Orders');
app.use('/Orders', ordersRouter);
>>>>>>> f8fcef1b375810a33fe4726b862ce01656ee9e68


/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});
