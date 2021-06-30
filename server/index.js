import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();

dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

// app.use('/api/posts', postRoutes); // prod -> server

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

/* // prod
app.get('/api/', (req, res) => {
    res.send('Hello to Memories API');
});
*/

// https://www.mongodb.com/cloud/atlas //

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNTECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
