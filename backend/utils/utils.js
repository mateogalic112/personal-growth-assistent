exports.HttpError = class HttpError {
	constructor(statusCode, errorMessage) {
		(this.statusCode = statusCode), (this.errorMessage = errorMessage);
	}
};
