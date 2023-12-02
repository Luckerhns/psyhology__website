import User from "../../../database/models/User";
import ErrorException from "../../error/ErrorException";

export default class ActivateService {
    public static async activate(link) {
        const user = await User.findOne({where: {activationLink: link}})
        if(!user) throw ErrorException.BadRequest('Incorrect activation link')

        await user.update({isActivated: true})
    }
}