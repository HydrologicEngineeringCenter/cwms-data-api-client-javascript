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
import type { Offset } from './Offset';
import {
    OffsetFromJSON,
    OffsetFromJSONTyped,
    OffsetToJSON,
} from './Offset';

/**
 * 
 * @export
 * @interface VerticalDatumInfo
 */
export interface VerticalDatumInfo {
    /**
     * 
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    nativeDatum?: string;
    /**
     * 
     * @type {number}
     * @memberof VerticalDatumInfo
     */
    elevation?: number;
    /**
     * 
     * @type {Array<Offset>}
     * @memberof VerticalDatumInfo
     */
    offsets?: Array<Offset>;
}

/**
 * Check if a given object implements the VerticalDatumInfo interface.
 */
export function instanceOfVerticalDatumInfo(value: object): boolean {
    return true;
}

export function VerticalDatumInfoFromJSON(json: any): VerticalDatumInfo {
    return VerticalDatumInfoFromJSONTyped(json, false);
}

export function VerticalDatumInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerticalDatumInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'office': json['office'] == null ? undefined : json['office'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'location': json['location'] == null ? undefined : json['location'],
        'nativeDatum': json['native-datum'] == null ? undefined : json['native-datum'],
        'elevation': json['elevation'] == null ? undefined : json['elevation'],
        'offsets': json['offsets'] == null ? undefined : ((json['offsets'] as Array<any>).map(OffsetFromJSON)),
    };
}

export function VerticalDatumInfoToJSON(value?: VerticalDatumInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office': value['office'],
        'unit': value['unit'],
        'location': value['location'],
        'native-datum': value['nativeDatum'],
        'elevation': value['elevation'],
        'offsets': value['offsets'] == null ? undefined : ((value['offsets'] as Array<any>).map(OffsetToJSON)),
    };
}

