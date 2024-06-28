import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {
    res.send('server is healthy')
})

app.get('/books', (req, res) => {
    res.send('get all books')
})

app.post('/books', (req, res) =>{
    res.send('Book created')
})

app.put('/book', (req, res) => {
    res.send('Book updated')
})

app.delete('/book', (req, res) => {
    res.send('books deleted')
})

app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
})