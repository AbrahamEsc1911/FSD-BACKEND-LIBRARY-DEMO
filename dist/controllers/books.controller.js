"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookById = exports.updateBooksById = exports.newBook = exports.bookDetailsById = exports.bookList = void 0;
/////// GET
const bookList = (req, res) => {
    res.json({
        success: true,
        message: `Lista Libros`
    });
};
exports.bookList = bookList;
const bookDetailsById = (req, res) => {
    res.json({
        success: true,
        message: `Detalles libro ${req.params.id}`
    });
};
exports.bookDetailsById = bookDetailsById;
////// POST 
const newBook = (req, res) => {
    res.json({
        success: true,
        message: `Nuevo Libro`
    });
};
exports.newBook = newBook;
////// PUT
const updateBooksById = (req, res) => {
    res.json({
        success: true,
        message: `Actualiza libro ${req.params.id}`
    });
};
exports.updateBooksById = updateBooksById;
////// DELETE
const deleteBookById = (req, res) => {
    res.json({
        success: true,
        message: `Elimina librio ${req.params.id}`
    });
};
exports.deleteBookById = deleteBookById;
