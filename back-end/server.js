'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const postRouter = require('./route/post-router.js');
const s3Router = require('./route/s3-router.js');
const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose.connect(`${process.env.DATABASE_URL}/homepage-app-staging`, { useNewUrlParser: true });

app.use(cors());
app.use(postRouter);
app.use(s3Router);

app.listen(PORT, () => {
	console.log(`listening on: ${PORT}`);
});