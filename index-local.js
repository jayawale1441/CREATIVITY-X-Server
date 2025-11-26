// const express = require("express");
const serverless = require("serverless-http");
const app = require('./app.js');
const PORT = 3000;
// const app = express();
// const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("App is running..");
// });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);