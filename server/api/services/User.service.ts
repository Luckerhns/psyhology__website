import { compare } from "bcrypt";
import User from "../../database/models/User";
import UserDto from "../dto/User-dto";
import { hash } from "bcrypt";
import { v4 } from "uuid";
import MailService from "./dependencies/Mail.service";
import TokenService from "./dependencies/Token.service";
import ErrorException from "../errors/ErrorException";

export default class UserService {
    public static async registration(params) {
        const { email, password, role } = params;

        // CHECK USER EXIST
        const candidate = await User.findOne({ where: { email } });
        if (candidate)
            throw ErrorException.CandidateExists(
                "User with this email is exists"
            );

        // CREATE HASH PASSWORD
        const hashPassword = await hash(password, 3);
        const activationLink = await v4();

        // CREATING USER
        const user = await User.create({
            ...params,
            password: hashPassword,
            activationLink: activationLink,
            role: role
        });

        const userDto = new UserDto(user);

        // CREATE TOKENS
        const tokens = await TokenService.generateTokens({ ...userDto });

        // EMAIL ACTIVATION
        await MailService.sendActivationMail(
            email,
            `${process.env.API_URL}/api/activate/${activationLink}`
        );

        const data = await TokenService.saveToken(
            userDto.id,
            tokens.refreshToken
            );

        return { ...tokens, user: userDto };
    }

    public static async login(params) {
            // FIND USER
            const password = params.password
            const email = params.email
            const user = await User.findOne({ where: { email: email } });
            if (!user) throw ErrorException.NotFound("User was not found");

            const checkPassword = user.dataValues.password

            // CHECK PASSWORD
            const isEquals = await compare(password, checkPassword)
            if(!isEquals) throw ErrorException.BadRequest("Incorrect password")

            const userDto = new UserDto(user)
            const tokens = TokenService.generateTokens({...userDto})

            await TokenService.saveToken(userDto.id, tokens.refreshToken)
            return {...tokens, user: userDto}
        }

        public static async logout(refreshToken) {
            const token = await TokenService.removeToken(refreshToken)
            return token
        }
}
