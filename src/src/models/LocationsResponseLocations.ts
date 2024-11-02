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
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';
import type { LocationsResponseLocationsQueryInfo } from './LocationsResponseLocationsQueryInfo';
import {
    LocationsResponseLocationsQueryInfoFromJSON,
    LocationsResponseLocationsQueryInfoFromJSONTyped,
    LocationsResponseLocationsQueryInfoToJSON,
} from './LocationsResponseLocationsQueryInfo';

/**
 * 
 * @export
 * @interface LocationsResponseLocations
 */
export interface LocationsResponseLocations {
    /**
     * 
     * @type {LocationsResponseLocationsQueryInfo}
     * @memberof LocationsResponseLocations
     */
    queryInfo?: LocationsResponseLocationsQueryInfo;
    /**
     * 
     * @type {Array<Location>}
     * @memberof LocationsResponseLocations
     */
    locations?: Array<Location>;
}

/**
 * Check if a given object implements the LocationsResponseLocations interface.
 */
export function instanceOfLocationsResponseLocations(value: object): boolean {
    return true;
}

export function LocationsResponseLocationsFromJSON(json: any): LocationsResponseLocations {
    return LocationsResponseLocationsFromJSONTyped(json, false);
}

export function LocationsResponseLocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsResponseLocations {
    if (json == null) {
        return json;
    }
    return {
        
        'queryInfo': json['query-info'] == null ? undefined : LocationsResponseLocationsQueryInfoFromJSON(json['query-info']),
        'locations': json['locations'] == null ? undefined : ((json['locations'] as Array<any>).map(LocationFromJSON)),
    };
}

export function LocationsResponseLocationsToJSON(value?: LocationsResponseLocations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query-info': LocationsResponseLocationsQueryInfoToJSON(value['queryInfo']),
        'locations': value['locations'] == null ? undefined : ((value['locations'] as Array<any>).map(LocationToJSON)),
    };
}
