import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import generateRoutes from './routes/generateRoutes';
import rateLimiter from "./library/redisLibrary";

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


// Middleware
// app.use(rateLimiter(5, 60)); // 5 requests per 60 seconds


app.use('/api/generate', generateRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
