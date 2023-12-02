export default class UserDto {
    id: number;
    email: string;
    isActivated: boolean;
    role: string;   
    constructor(model) {
        this.id = model.dataValues.id
        this.email = model.dataValues.email
        this.isActivated = model.dataValues.isActivated
        this.role = model.dataValues.role    }
}