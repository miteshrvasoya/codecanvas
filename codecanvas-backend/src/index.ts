import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import generateRoutes from './routes/generateRoutes';

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api/generate', generateRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
