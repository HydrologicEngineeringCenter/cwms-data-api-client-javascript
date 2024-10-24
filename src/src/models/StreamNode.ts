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
import type { CwmsId } from './CwmsId';
import {
    CwmsIdFromJSON,
    CwmsIdFromJSONTyped,
    CwmsIdToJSON,
} from './CwmsId';

/**
 * 
 * @export
 * @interface StreamNode
 */
export interface StreamNode {
    /**
     * 
     * @type {CwmsId}
     * @memberof StreamNode
     */
    streamId: CwmsId;
    /**
     * 
     * @type {string}
     * @memberof StreamNode
     */
    bank?: StreamNodeBankEnum;
    /**
     * 
     * @type {number}
     * @memberof StreamNode
     */
    station?: number;
    /**
     * 
     * @type {string}
     * @memberof StreamNode
     */
    stationUnits?: string;
}


/**
 * @export
 */
export const StreamNodeBankEnum = {
    L: 'L',
    R: 'R'
} as const;
export type StreamNodeBankEnum = typeof StreamNodeBankEnum[keyof typeof StreamNodeBankEnum];


/**
 * Check if a given object implements the StreamNode interface.
 */
export function instanceOfStreamNode(value: object): boolean {
    if (!('streamId' in value)) return false;
    return true;
}

export function StreamNodeFromJSON(json: any): StreamNode {
    return StreamNodeFromJSONTyped(json, false);
}

export function StreamNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamNode {
    if (json == null) {
        return json;
    }
    return {
        
        'streamId': CwmsIdFromJSON(json['stream-id']),
        'bank': json['bank'] == null ? undefined : json['bank'],
        'station': json['station'] == null ? undefined : json['station'],
        'stationUnits': json['station-units'] == null ? undefined : json['station-units'],
    };
}

export function StreamNodeToJSON(value?: StreamNode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stream-id': CwmsIdToJSON(value['streamId']),
        'bank': value['bank'],
        'station': value['station'],
        'station-units': value['stationUnits'],
    };
}

