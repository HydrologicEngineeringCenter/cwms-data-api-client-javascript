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
import { StreamLocationFromJSON, StreamLocationToJSON, } from './StreamLocation';
import { StreamReachFromJSON, StreamReachToJSON, } from './StreamReach';
/**
 * Check if a given object implements the Stream interface.
 */
export function instanceOfStream(value) {
    if (!('officeId' in value))
        return false;
    return true;
}
export function StreamFromJSON(json) {
    return StreamFromJSONTyped(json, false);
}
export function StreamFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'streamName': json['stream-name'] == null ? undefined : json['stream-name'],
        'tributaries': json['tributaries'] == null ? undefined : (json['tributaries'].map(StreamFromJSON)),
        'streamReaches': json['stream-reaches'] == null ? undefined : (json['stream-reaches'].map(StreamReachFromJSON)),
        'divertingStreamId': json['diverting-stream-id'] == null ? undefined : json['diverting-stream-id'],
        'receivingStreamId': json['receiving-stream-id'] == null ? undefined : json['receiving-stream-id'],
        'confluenceBank': json['confluence-bank'] == null ? undefined : json['confluence-bank'],
        'diversionBank': json['diversion-bank'] == null ? undefined : json['diversion-bank'],
        'streamLength': json['stream-length'] == null ? undefined : json['stream-length'],
        'confluenceStation': json['confluence-station'] == null ? undefined : json['confluence-station'],
        'diversionStation': json['diversion-station'] == null ? undefined : json['diversion-station'],
        'streamLocations': json['stream-locations'] == null ? undefined : (json['stream-locations'].map(StreamLocationFromJSON)),
        'comment': json['comment'] == null ? undefined : json['comment'],
        'averageSlope': json['average-slope'] == null ? undefined : json['average-slope'],
    };
}
export function StreamToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'stream-name': value['streamName'],
        'tributaries': value['tributaries'] == null ? undefined : (value['tributaries'].map(StreamToJSON)),
        'stream-reaches': value['streamReaches'] == null ? undefined : (value['streamReaches'].map(StreamReachToJSON)),
        'diverting-stream-id': value['divertingStreamId'],
        'receiving-stream-id': value['receivingStreamId'],
        'confluence-bank': value['confluenceBank'],
        'diversion-bank': value['diversionBank'],
        'stream-length': value['streamLength'],
        'confluence-station': value['confluenceStation'],
        'diversion-station': value['diversionStation'],
        'stream-locations': value['streamLocations'] == null ? undefined : (value['streamLocations'].map(StreamLocationToJSON)),
        'comment': value['comment'],
        'average-slope': value['averageSlope'],
    };
}
