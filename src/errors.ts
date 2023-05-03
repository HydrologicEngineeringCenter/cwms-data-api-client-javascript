/* eslint-disable max-len */
import { DOCS_LINK, MODULE_NAME } from './constants';


export class UnknownError extends Error {
    constructor(message="An unknown Error Occurred") {
        super(message)
    }
}

export class InvalidTimseriesID extends Error {
    constructor(message = "The timeseries ID you entered is invalid") {
        super(message)
    }
}



export class NoCredentialsError extends Error {
    constructor(message = `Missing credentials passed to ${MODULE_NAME} constructor.`) {
        super(message);
    }
}