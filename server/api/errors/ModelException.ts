export default class ModelException {
    status: number;
    message: string;
    errors: string[];
    errorHandler: string;

    constructor(status, message, errors?) {
        this.status = status;
        this.message = message;
    }

    static ModelExists(message) {
        return new ModelException(409, message)
    }

    static ModelNotFound(message) {
        return new ModelException(404, message)
    }
}