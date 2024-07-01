"use strict";
///// GET
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLoansById = exports.loansReturnedById = exports.updateLoansById = exports.newLoans = exports.loansByUserId = exports.loansByCurrentUser = exports.loansDetailsById = exports.loansList = void 0;
const loansList = (req, res) => {
    res.json({
        success: true,
        message: `lista préstamos`
    });
};
exports.loansList = loansList;
const loansDetailsById = (req, res) => {
    res.json({
        success: true,
        message: `Detalles préstamos ${req.params.id}`
    });
};
exports.loansDetailsById = loansDetailsById;
const loansByCurrentUser = (req, res) => {
    res.json({
        success: true,
        message: `Préstamos del usuario autenticado`
    });
};
exports.loansByCurrentUser = loansByCurrentUser;
const loansByUserId = (req, res) => {
    res.json({
        success: true,
        message: `Préstamos por usuario ${req.params.usersId}`
    });
};
exports.loansByUserId = loansByUserId;
////// POST 
const newLoans = (req, res) => {
    res.json({
        success: true,
        message: `Nuevo préstamo`
    });
};
exports.newLoans = newLoans;
///// PUT
const updateLoansById = (req, res) => {
    res.json({
        success: true,
        message: `Actualiza prestamo ${req.params.id}`
    });
};
exports.updateLoansById = updateLoansById;
const loansReturnedById = (req, res) => {
    res.json({
        success: true,
        message: `Actualiza préstamo ${req.params.id} como devuelto`
    });
};
exports.loansReturnedById = loansReturnedById;
/////// DELETE
const deleteLoansById = (req, res) => {
    res.json({
        success: true,
        message: `Elimina prestamo ${req.params.id}`
    });
};
exports.deleteLoansById = deleteLoansById;
