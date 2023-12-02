export default class ErrorException {
    status: number;
    message: string;
    errors: string[];
    errorHandler: string;

    constructor(status, message, errors?) {
        this.status = status;
        this.message = message;
        this.errors = errors
    }

    static NotFound(message) {
        return new ErrorException(404, message)
    }

    static BadRequest(message) {
        return new ErrorException(400, message)
    }

    static UnauthorizedError(message) {
        return new ErrorException(401, message)
    }

    static UnknownError(message) {
        return new ErrorException(520, message)
    }

    static Forbidden(message) {
        return new ErrorException(403, message)
    }

    static CandidateExists(message) {
        return new ErrorException(409, message)
    }
}