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
 * Single Office or List of Offices in tab separated format
 * @export
 * @interface OfficeTabulation
 */
export interface OfficeTabulation {
    /**
     * 
     * @type {string}
     * @memberof OfficeTabulation
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof OfficeTabulation
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof OfficeTabulation
     */
    officeType?: string;
    /**
     * 
     * @type {string}
     * @memberof OfficeTabulation
     */
    reportsToOffice?: string;
}

/**
 * Check if a given object implements the OfficeTabulation interface.
 */
export function instanceOfOfficeTabulation(value: object): boolean {
    return true;
}

export function OfficeTabulationFromJSON(json: any): OfficeTabulation {
    return OfficeTabulationFromJSONTyped(json, false);
}

export function OfficeTabulationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficeTabulation {
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

export function OfficeTabulationToJSON(value?: OfficeTabulation | null): any {
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

