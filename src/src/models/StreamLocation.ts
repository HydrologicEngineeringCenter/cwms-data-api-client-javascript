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
 * @interface StreamLocation
 */
export interface StreamLocation {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof StreamLocation
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof StreamLocation
     */
    locationName?: string;
    /**
     * 
     * @type {string}
     * @memberof StreamLocation
     */
    streamName?: string;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    station?: number;
    /**
     * 
     * @type {string}
     * @memberof StreamLocation
     */
    bank?: string;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    publishedStation?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    lowestMeasurableStage?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    totalDrainageArea?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    ungagedDrainageArea?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamLocation
     */
    nagivationStation?: number;
}

/**
 * Check if a given object implements the StreamLocation interface.
 */
export function instanceOfStreamLocation(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function StreamLocationFromJSON(json: any): StreamLocation {
    return StreamLocationFromJSONTyped(json, false);
}

export function StreamLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamLocation {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'locationName': json['location-name'] == null ? undefined : json['location-name'],
        'streamName': json['stream-name'] == null ? undefined : json['stream-name'],
        'station': json['station'] == null ? undefined : json['station'],
        'bank': json['bank'] == null ? undefined : json['bank'],
        'publishedStation': json['published-station'] == null ? undefined : json['published-station'],
        'lowestMeasurableStage': json['lowest-measurable-stage'] == null ? undefined : json['lowest-measurable-stage'],
        'totalDrainageArea': json['total-drainage-area'] == null ? undefined : json['total-drainage-area'],
        'ungagedDrainageArea': json['ungaged-drainage-area'] == null ? undefined : json['ungaged-drainage-area'],
        'nagivationStation': json['nagivation-station'] == null ? undefined : json['nagivation-station'],
    };
}

export function StreamLocationToJSON(value?: StreamLocation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'location-name': value['locationName'],
        'stream-name': value['streamName'],
        'station': value['station'],
        'bank': value['bank'],
        'published-station': value['publishedStation'],
        'lowest-measurable-stage': value['lowestMeasurableStage'],
        'total-drainage-area': value['totalDrainageArea'],
        'ungaged-drainage-area': value['ungagedDrainageArea'],
        'nagivation-station': value['nagivationStation'],
    };
}

