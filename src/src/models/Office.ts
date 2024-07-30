/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A representation of a CWMS office
 * @export
 * @interface Office
 */
export interface Office {
    /**
     * 
     * @type {string}
     * @memberof Office
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Office
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof Office
     */
    type?: OfficeTypeEnum;
    /**
     * Reference to another office, like a division, that this office reports to.
     * @type {string}
     * @memberof Office
     */
    reportsTo?: string;
}


/**
 * @export
 */
export const OfficeTypeEnum = {
    Unknown: 'unknown',
    CorpsHeadquarters: 'corps headquarters',
    DivisionHeadquarters: 'division headquarters',
    DivisionRegional: 'division regional',
    District: 'district',
    FiledOperatingActivity: 'filed operating activity'
} as const;
export type OfficeTypeEnum = typeof OfficeTypeEnum[keyof typeof OfficeTypeEnum];


/**
 * Check if a given object implements the Office interface.
 */
export function instanceOfOffice(value: object): boolean {
    return true;
}

export function OfficeFromJSON(json: any): Office {
    return OfficeFromJSONTyped(json, false);
}

export function OfficeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Office {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'longName': json['long-name'] == null ? undefined : json['long-name'],
        'type': json['type'] == null ? undefined : json['type'],
        'reportsTo': json['reports-to'] == null ? undefined : json['reports-to'],
    };
}

export function OfficeToJSON(value?: Office | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'long-name': value['longName'],
        'type': value['type'],
        'reports-to': value['reportsTo'],
    };
}

