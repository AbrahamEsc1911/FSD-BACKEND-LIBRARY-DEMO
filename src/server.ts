import 'dotenv/config'
import express from 'express';
import { authorsDetailsById, authorsList, deleteAuthorById, newAuthors, updateAuthorById} from './controllers/authors.controller';
import { bookDetailsById, bookList, deleteBookById, newBook, updateBooksById } from './controllers/books.controller';
import { addFavoriteBook, allUsers, deleteFavoriteBook, deleteUserById, favoriteBooks, newUser, updateProfile, updateRoleById, updateUserById, userDetails, usersProfile } from './controllers/user.controller';
import { deleteLoansById, loansByCurrentUser, loansByUserId, loansDetailsById, loansList, loansReturnedById, newLoans, updateLoansById } from './controllers/loans.controller';
import { login, newUserRegister } from './controllers/autentication.controller';
import { AppDataSource } from './database/db';


const app = express();

///middleware

app.use(express.json())

const PORT = process.env.PORT || 4000;

//////// USER

app.get('/api/users/profile', usersProfile)
app.get('/api/users/favorite_books', favoriteBooks)
app.get('/api/users', allUsers)
app.get('/api/user/:id', userDetails)

app.post('/api/users/favorite_books', addFavoriteBook)
app.post('/api/users', newUser)

app.put('/api/users/profile', updateProfile)
app.put('/api/users/:id', updateUserById)
app.put('/api/users/:id/role', updateRoleById)

app.delete('/api/users/favorite_books', deleteFavoriteBook)
app.delete('/api/users/:id', deleteUserById)



//////// AUTHORS

app.get('/api/authors', authorsList)
app.get('/api/authors/:id', authorsDetailsById)

app.post('/api/authors', newAuthors)

app.put('/api/authors/:id', updateAuthorById)

app.delete('/api/authors/:id', deleteAuthorById)


///////// BOOKS

app.get('/api/books', bookList)
app.get('/api/books/:id', bookDetailsById)

app.post('/api/books', newBook)

app.put('/api/books/:id', updateBooksById)

app.delete('/api/books/:id', deleteBookById)

////////// LOANS

app.get('/api/loans', loansList)
app.get('/api/loans/:id', loansDetailsById)
app.get('/api/loans/users/current', loansByCurrentUser)
app.get('/api/loans/users/:usersId', loansByUserId)

app.post('/api/loans', newLoans)

app.put('/api/loans/:id', updateLoansById)
app.put('/api/loans/return/:id', loansReturnedById)

app.delete('/api/loans/return/:id', deleteLoansById)


/////// AUTENTICACIÓN

app.post('/api/auth/register', newUserRegister)
app.post('/api/auth/login', login)


AppDataSource.initialize()
.then(() => {
console.log('Database connected');
app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
})
})
.catch(error => {
console.log(error)
})
