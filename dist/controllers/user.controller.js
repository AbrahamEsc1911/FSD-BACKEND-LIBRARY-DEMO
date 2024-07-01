"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.deleteFavoriteBook = exports.updateRoleById = exports.updateUserById = exports.updateProfile = exports.newUser = exports.addFavoriteBook = exports.userDetails = exports.allUsers = exports.favoriteBooks = exports.usersProfile = void 0;
////GET
const usersProfile = (req, res) => {
    res.json({
        success: true,
        message: `Detalles del perfil`
    });
};
exports.usersProfile = usersProfile;
const favoriteBooks = (req, res) => {
    res.json({
        succes: true,
        message: `Obtener mis favoritos`
    });
};
exports.favoriteBooks = favoriteBooks;
const allUsers = (req, res) => {
    res.json({
        success: true,
        MessageChannel: `Lista de usuarios`
    });
};
exports.allUsers = allUsers;
const userDetails = (req, res) => {
    res.json({
        success: true,
        message: `Detalles del usuario ${req.params.id}`
    });
};
exports.userDetails = userDetails;
//// POST
const addFavoriteBook = (req, res) => {
    res.json({
        success: true,
        message: `Agregar mi favorito`
    });
};
exports.addFavoriteBook = addFavoriteBook;
const newUser = (req, res) => {
    res.json({
        success: true,
        message: `Nuevo Usuario`
    });
};
exports.newUser = newUser;
//// PUT
const updateProfile = (req, res) => {
    res.json({
        success: true,
        message: `Actualiza perfil`
    });
};
exports.updateProfile = updateProfile;
const updateUserById = (req, res) => {
    res.json({
        success: true,
        message: `Actualiza usuario ${req.params.id}`
    });
};
exports.updateUserById = updateUserById;
const updateRoleById = (req, res) => {
    res.json({
        success: true,
        message: `Cambiar rol del id${req.params.id}`
    });
};
exports.updateRoleById = updateRoleById;
//// DELETE
const deleteFavoriteBook = (req, res) => {
    res.json({
        success: true,
        message: `Eliminar mi Favorito`
    });
};
exports.deleteFavoriteBook = deleteFavoriteBook;
const deleteUserById = (req, res) => {
    res.json({
        success: true,
        message: `Elimina usuario ${req.params.id}`
    });
};
exports.deleteUserById = deleteUserById;
