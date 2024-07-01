"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthorById = exports.updateAuthorById = exports.newAuthors = exports.authorsDetailsById = exports.authorsList = void 0;
////// GET
const authorsList = (req, res) => {
    res.json({
        success: true,
        message: `Lista de autores`
    });
};
exports.authorsList = authorsList;
const authorsDetailsById = (req, res) => {
    res.json({
        success: true,
        message: `Detalles author ${req.params.id}`
    });
};
exports.authorsDetailsById = authorsDetailsById;
///// POST 
const newAuthors = (requ, res) => {
    res.json({
        success: true,
        message: `Nuevo autor`
    });
};
exports.newAuthors = newAuthors;
////// PUT
const updateAuthorById = (req, res) => {
    res.json({
        success: true,
        message: `Actualizar Autor ${req.params.id}`
    });
};
exports.updateAuthorById = updateAuthorById;
/////// DELETE
const deleteAuthorById = (req, res) => {
    res.json({
        success: true,
        message: `Elimina Author ${req.params.id}`
    });
};
exports.deleteAuthorById = deleteAuthorById;
