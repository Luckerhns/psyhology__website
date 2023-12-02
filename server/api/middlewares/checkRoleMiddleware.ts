import { verify } from "jsonwebtoken";
import TokenService from "../services/dependencies/Token.service";
import ErrorException from "../error/ErrorException";

export default function (role) {
    return async function (req, res, next) {
        if (req.method === "Options") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return next(
                    ErrorException.UnauthorizedError("Token is undefined")
                );
            }

            const userRole = verify(token, process.env.JWT_ACCESS_SECRET)

            const userDto = await TokenService.validateAccesToken(token);

            if (userDto.role !== role) {
                return next(ErrorException.Forbidden("You have no access"))
            }

            next();
        } catch (error) {
            return next(ErrorException.Forbidden("You dont have access"));
        }
    };
}
