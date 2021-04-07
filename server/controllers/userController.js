const ApiError = require('../error/ApiError');
const { noExtendLeft } = require("sequelize/types/lib/operators");

class UserController {
    async registartion(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('не задан ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController();