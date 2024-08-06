/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Single Office or List of Offices in comma separated format
 * @export
 * @interface CsvV1Office
 */
export interface CsvV1Office {
    /**
     * 
     * @type {string}
     * @memberof CsvV1Office
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof CsvV1Office
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof CsvV1Office
     */
    officeType?: string;
    /**
     * 
     * @type {string}
     * @memberof CsvV1Office
     */
    reportsToOffice?: string;
}

/**
 * Check if a given object implements the CsvV1Office interface.
 */
export function instanceOfCsvV1Office(value: object): boolean {
    return true;
}

export function CsvV1OfficeFromJSON(json: any): CsvV1Office {
    return CsvV1OfficeFromJSONTyped(json, false);
}

export function CsvV1OfficeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CsvV1Office {
    if (json == null) {
        return json;
    }
    return {
        
        'office': json['Office'] == null ? undefined : json['Office'],
        'longName': json['longName'] == null ? undefined : json['longName'],
        'officeType': json['officeType'] == null ? undefined : json['officeType'],
        'reportsToOffice': json['reportsToOffice'] == null ? undefined : json['reportsToOffice'],
    };
}

export function CsvV1OfficeToJSON(value?: CsvV1Office | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Office': value['office'],
        'longName': value['longName'],
        'officeType': value['officeType'],
        'reportsToOffice': value['reportsToOffice'],
    };
}

