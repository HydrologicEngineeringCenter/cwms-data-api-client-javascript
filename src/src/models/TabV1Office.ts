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
 * @interface TabV1Office
 */
export interface TabV1Office {
    /**
     * 
     * @type {string}
     * @memberof TabV1Office
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof TabV1Office
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof TabV1Office
     */
    officeType?: string;
    /**
     * 
     * @type {string}
     * @memberof TabV1Office
     */
    reportsToOffice?: string;
}

/**
 * Check if a given object implements the TabV1Office interface.
 */
export function instanceOfTabV1Office(value: object): boolean {
    return true;
}

export function TabV1OfficeFromJSON(json: any): TabV1Office {
    return TabV1OfficeFromJSONTyped(json, false);
}

export function TabV1OfficeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TabV1Office {
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

export function TabV1OfficeToJSON(value?: TabV1Office | null): any {
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

