import User from "../../database/models/User";
import { hash } from "bcrypt";
import UserService from "../services/User.service";
import TokenService from "../services/dependencies/Token.service";

const refreshCookieExpires = 30 * 24 * 60 * 60 * 1000;
const dtoCookieExpires = 30 * 60 * 60 * 1000;

export default class UserController {
    public static async registration(req, res, next) {
        try {
            const params = req.body;
            const user = await UserService.registration(params);
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async login(req, res, next) {
        try {
            const params = req.body;
            const user = await UserService.login(params);
            res.cookie("user", user.user, {
                maxAge: dtoCookieExpires,
                httpOnly: true,
            });
            res.cookie("accessToken", user.accessToken, {
                maxAge: dtoCookieExpires,
                httpOnly: true,
            });
            res.cookie("refreshToken", user.refreshToken, {
                maxAge: refreshCookieExpires,
                httpOnly: true,
            });
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public static async logout(req, res, next) {
        try {
            const { refreshToken, accessToken } = req.cookies;
            res.clearCookie("refreshToken");
            res.clearCookie("accessToken");
            res.clearCookie("user");
            const token = await UserService.logout(refreshToken);

            let status;
            let result;
            if (token === 1) {
                result = "You have successfully logged out";
                status = 200;
            } else if (token === 0) {
                result = "You are not logged out";
                status = 404;
            } else {
                result = "adasdasdas";
                status = 400;
            }
            return res.status(status).json(result);
        } catch (error) {
            next(error);
        }
    }

    public static async getAll(req, res, next) {
        try {
            const users = await User.findAndCountAll();
            return res.json(users);
        } catch (error) {
            next(error);
        }
    }
}
