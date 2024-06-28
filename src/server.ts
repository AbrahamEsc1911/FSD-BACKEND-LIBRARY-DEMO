import express from 'express';

const app = express();

///middleware

app.use(express.json())

const PORT = process.env.PORT || 4000;

app.get('/healthy', (req, res) => {
    res.send('server is healthy')
})

///AUTHORS

app.post('/authors', (req, res) =>{
    // recueperar la información de la req
    console.log(req.body)
    console.log(req.body.nationality)
    console.log(req.body.name)


    res.send('Create authors')
})


//// Rutas dinamicas req params /:.....
app.put('/authors/:id', (req, res) =>{
    console.log(req.body.id)

    res.send(`author update with ${req.params.id}`)
})

app.delete('/author/:id', (req, res) => {

    res.send(`author ${req.params.id} was deleted`)
})


/// BOOKS

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