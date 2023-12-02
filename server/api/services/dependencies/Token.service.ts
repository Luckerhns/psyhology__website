import { sign, verify } from "jsonwebtoken";
import ErrorException from "../../errors/ErrorException";
import Token from "../../../database/models/Token";

export default class TokenService {
    static generateTokens(payload) {
        const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "30m",
        });

        const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "15m",
        });

        return {
            accessToken,
            refreshToken,
        };
    }

    static async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { id: userId } });
        if (tokenData) {
            tokenData.update({ refreshToken: refreshToken });
            return tokenData;
        }

        const token = await Token.create({ user: userId, refreshToken });
        return token;
    }

    static async validateAccesToken(token) {
        try {
            const userData = verify(token, process.env.JWT_ACCESS_SECRET, (err, res) => {
                if(err) {
                    return ErrorException.UnauthorizedError('Token was expired')
                } 
                return res
            });
            return userData;
        } catch (error) {
            return error;
        }
    }

    static async validateRefreshToken(token) {
        try {
            const userData = verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return error;
        }
    }

    static async removeToken(token) {
        try {
            const tokenData = await Token.destroy({ where: { refreshToken: token } });
            return tokenData;
        } catch (error) {
            return error;
        }
    }

    static async findToken(paramToken) {
        try {
            const token = await Token.findOne({ where: { refreshToken : paramToken } });
            return token
        } catch (error) {
            return error;
        }
    }
}

