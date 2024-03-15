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

import { exists, mapValues } from '../runtime';
import type { StreamLocation } from './StreamLocation';
import {
    StreamLocationFromJSON,
    StreamLocationFromJSONTyped,
    StreamLocationToJSON,
} from './StreamLocation';
import type { StreamReach } from './StreamReach';
import {
    StreamReachFromJSON,
    StreamReachFromJSONTyped,
    StreamReachToJSON,
} from './StreamReach';

/**
 * 
 * @export
 * @interface Stream
 */
export interface Stream {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Stream
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    streamName?: string;
    /**
     * 
     * @type {Array<Stream>}
     * @memberof Stream
     */
    tributaries?: Array<Stream>;
    /**
     * 
     * @type {Array<StreamReach>}
     * @memberof Stream
     */
    streamReaches?: Array<StreamReach>;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    divertingStreamId?: string;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    receivingStreamId?: string;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    confluenceBank?: string;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    diversionBank?: string;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    streamLength?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    confluenceStation?: number;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    diversionStation?: number;
    /**
     * 
     * @type {Array<StreamLocation>}
     * @memberof Stream
     */
    streamLocations?: Array<StreamLocation>;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof Stream
     */
    averageSlope?: number;
}

/**
 * Check if a given object implements the Stream interface.
 */
export function instanceOfStream(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "officeId" in value;

    return isInstance;
}

export function StreamFromJSON(json: any): Stream {
    return StreamFromJSONTyped(json, false);
}

export function StreamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stream {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'streamName': !exists(json, 'stream-name') ? undefined : json['stream-name'],
        'tributaries': !exists(json, 'tributaries') ? undefined : ((json['tributaries'] as Array<any>).map(StreamFromJSON)),
        'streamReaches': !exists(json, 'stream-reaches') ? undefined : ((json['stream-reaches'] as Array<any>).map(StreamReachFromJSON)),
        'divertingStreamId': !exists(json, 'diverting-stream-id') ? undefined : json['diverting-stream-id'],
        'receivingStreamId': !exists(json, 'receiving-stream-id') ? undefined : json['receiving-stream-id'],
        'confluenceBank': !exists(json, 'confluence-bank') ? undefined : json['confluence-bank'],
        'diversionBank': !exists(json, 'diversion-bank') ? undefined : json['diversion-bank'],
        'streamLength': !exists(json, 'stream-length') ? undefined : json['stream-length'],
        'confluenceStation': !exists(json, 'confluence-station') ? undefined : json['confluence-station'],
        'diversionStation': !exists(json, 'diversion-station') ? undefined : json['diversion-station'],
        'streamLocations': !exists(json, 'stream-locations') ? undefined : ((json['stream-locations'] as Array<any>).map(StreamLocationFromJSON)),
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'averageSlope': !exists(json, 'average-slope') ? undefined : json['average-slope'],
    };
}

export function StreamToJSON(value?: Stream | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'office-id': value.officeId,
        'stream-name': value.streamName,
        'tributaries': value.tributaries === undefined ? undefined : ((value.tributaries as Array<any>).map(StreamToJSON)),
        'stream-reaches': value.streamReaches === undefined ? undefined : ((value.streamReaches as Array<any>).map(StreamReachToJSON)),
        'diverting-stream-id': value.divertingStreamId,
        'receiving-stream-id': value.receivingStreamId,
        'confluence-bank': value.confluenceBank,
        'diversion-bank': value.diversionBank,
        'stream-length': value.streamLength,
        'confluence-station': value.confluenceStation,
        'diversion-station': value.diversionStation,
        'stream-locations': value.streamLocations === undefined ? undefined : ((value.streamLocations as Array<any>).map(StreamLocationToJSON)),
        'comment': value.comment,
        'average-slope': value.averageSlope,
    };
}

