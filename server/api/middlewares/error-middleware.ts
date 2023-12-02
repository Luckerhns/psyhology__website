import ErrorException from "../errors/ErrorException";

export default function (err, req, res, next) {
    console.log(err);
    if (err.errorHandler === "Model") {
        return res
            .status(err.status)
            .json({ message: `MODEL ERROR! - ${err.message}`, errors: err.errors });
    }
    if (err.errorHandler === "Error") {
        return res
            .status(err.status)
            .json({
                message: `SERVER ERROR! - ${err.message}`,
                errors: err.errors,
            });
    }
    return res.status(500).json({ message: "Incoming error!" });
}
