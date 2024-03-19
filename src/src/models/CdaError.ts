/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CdaError
 */
export interface CdaError {
    /**
     * 
     * @type {string}
     * @memberof CdaError
     */
    message?: string;
    /**
     * A randomly generated number to help identify your request in the logs for analysis..
     * @type {string}
     * @memberof CdaError
     */
    incidentIdentifier?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CdaError
     */
    details?: { [key: string]: object; };
}

/**
 * Check if a given object implements the CdaError interface.
 */
export function instanceOfCdaError(value: object): boolean {
    return true;
}

export function CdaErrorFromJSON(json: any): CdaError {
    return CdaErrorFromJSONTyped(json, false);
}

export function CdaErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CdaError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'incidentIdentifier': json['incidentIdentifier'] == null ? undefined : json['incidentIdentifier'],
        'details': json['details'] == null ? undefined : json['details'],
    };
}

export function CdaErrorToJSON(value?: CdaError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'incidentIdentifier': value['incidentIdentifier'],
        'details': value['details'],
    };
}

