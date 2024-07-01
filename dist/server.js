"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const authors_controller_1 = require("./controllers/authors.controller");
const books_controller_1 = require("./controllers/books.controller");
const user_controller_1 = require("./controllers/user.controller");
const loans_controller_1 = require("./controllers/loans.controller");
const autentication_controller_1 = require("./controllers/autentication.controller");
const app = (0, express_1.default)();
///middleware
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
//////// USER
app.get('/api/users/profile', user_controller_1.usersProfile);
app.get('/api/users/favorite_books', user_controller_1.favoriteBooks);
app.get('/api/users', user_controller_1.allUsers);
app.get('/api/user/:id', user_controller_1.userDetails);
app.post('/api/users/favorite_books', user_controller_1.addFavoriteBook);
app.post('/api/users', user_controller_1.newUser);
app.put('/api/users/profile', user_controller_1.updateProfile);
app.put('/api/users/:id', user_controller_1.updateUserById);
app.put('/api/users/:id/role', user_controller_1.updateRoleById);
app.delete('/api/users/favorite_books', user_controller_1.deleteFavoriteBook);
app.delete('/api/users/:id', user_controller_1.deleteUserById);
//////// AUTHORS
app.get('/api.authors', authors_controller_1.authorsList);
app.get('/api/authors/:id', authors_controller_1.authorsDetailsById);
app.post('/api/authors', authors_controller_1.newAuthors);
app.put('/api/authors/:id', authors_controller_1.updateAuthorById);
app.delete('/api/authors/:id', authors_controller_1.deleteAuthorById);
///////// BOOKS
app.get('/api/books', books_controller_1.bookList);
app.get('/api/books/:id', books_controller_1.bookDetailsById);
app.post('/api/books', books_controller_1.newBook);
app.put('/api/books/:id', books_controller_1.updateBooksById);
app.delete('/api/books/:id', books_controller_1.deleteBookById);
////////// LOANS
app.get('/api/loans', loans_controller_1.loansList);
app.get('/api/loans/:id', loans_controller_1.loansDetailsById);
app.get('/api/loans/users/current', loans_controller_1.loansByCurrentUser);
app.get('/api/loans/users/:usersId', loans_controller_1.loansByUserId);
app.post('/api/loans', loans_controller_1.newLoans);
app.put('/api/loans/:id', loans_controller_1.updateLoansById);
app.put('/api/loans/return/:id', loans_controller_1.loansReturnedById);
app.delete('/api/loans/return/:id', loans_controller_1.deleteLoansById);
/////// AUTENTICACIÓN
app.post('/api/auth/register', autentication_controller_1.newUserRegister);
app.post('/api/auth/login', autentication_controller_1.login);
app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
});
