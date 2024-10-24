/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A representation of a location category
 * @export
 * @interface LocationCategory
 */
export interface LocationCategory {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof LocationCategory
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCategory
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCategory
     */
    description?: string;
}

/**
 * Check if a given object implements the LocationCategory interface.
 */
export function instanceOfLocationCategory(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function LocationCategoryFromJSON(json: any): LocationCategory {
    return LocationCategoryFromJSONTyped(json, false);
}

export function LocationCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function LocationCategoryToJSON(value?: LocationCategory | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'id': value['id'],
        'description': value['description'],
    };
}

