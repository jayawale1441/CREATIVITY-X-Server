const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require("path");
const { filterImages, filterMotionImages } = require('./controller');
const PORT = 3000;
const SERVER_PATH = `http://localhost:${PORT}`;

// Middleware: Parse JSON bodies (application/json)
app.use(bodyParser.json());

// Basic CORS setup (allow all origins)
app.use(cors());
    
// Serve static files from the "public" folder
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/fetch-image', async (req, res) => {
    // setTimeout(async function () {
    const resObj = {};
    const imagesData = await filterImages(req?.query?.prompt);
    console.log('imagesData ========', imagesData);
    // check if not empty images
    if (imagesData.filteredImage) {
        resObj.search_val = imagesData.filteredImage.search_val;
        resObj.image = `${req.protocol}://${req.get('host')}/${imagesData.filteredImage.image}`;
        resObj.isMotion = imagesData.isMotion;
    }
    console.log('resObj ====', resObj);
    res.send({ data: resObj });
    // }, 2000);
});

app.get('/fetch-motion-image', async (req, res) => {
    // setTimeout(async function () {
    const resObj = {};
    const imagesGif = await filterMotionImages(req.query.prompt);
    console.log('img gif=========', imagesGif);
    if (imagesGif[0]?.image) {
        resObj.image = `${req.protocol}://${req.get('host')}/${imagesGif[0]?.image}`;
    }
    res.send({ data: resObj });
    // }, 2000);
});

// ✅ Global error handler for CORS errors
app.use((err, req, res, next) => {
    if (err instanceof Error && err.message.includes('CORS')) {
        return res.status(403).json({ error: err.message });
    }
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// //app.js

// const express = require("express");
// const serverless = require("serverless-http");
// const app = express();
// const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("App is running..");
// });

// app.use("/.netlify/functions/app", router);
// module.exports.handler = serverless(app);