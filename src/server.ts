import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {
    res.send('server is healthy')
})



app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
})