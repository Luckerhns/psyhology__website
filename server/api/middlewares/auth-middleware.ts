import ErrorException from "../error/ErrorException";
import TokenService from "../services/dependencies/Token.service";
import verify from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return next(ErrorException.UnauthorizedError("Not auth header"));

        const accessToken = authHeader.split(" ")[1];
        if (!accessToken)
            return next(ErrorException.UnauthorizedError("Incorrect token"));

        const userData = await TokenService.validateAccesToken(accessToken);

        if (!userData)
            return next(ErrorException.UnauthorizedError("Token is broken"));

        req.user = userData;
        // console.log(userData);

        next();
    } catch (error) {
        return next(ErrorException.UnauthorizedError("Not auth header"));
    }
};

export default authMiddleware;
