"use strict";
///// POST
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.newUserRegister = void 0;
const newUserRegister = (req, res) => {
    res.json({
        success: true,
        message: `Registra un nuevo usuario`
    });
};
exports.newUserRegister = newUserRegister;
const login = (req, res) => {
    res.json({
        success: true,
        message: `Iniciar sesión`
    });
};
exports.login = login;
