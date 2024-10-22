"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamLocationToJSON = exports.StreamLocationFromJSONTyped = exports.StreamLocationFromJSON = exports.instanceOfStreamLocation = void 0;
const StreamLocationNode_1 = require("./StreamLocationNode");
/**
 * Check if a given object implements the StreamLocation interface.
 */
function instanceOfStreamLocation(value) {
    if (!('streamLocationNode' in value))
        return false;
    return true;
}
exports.instanceOfStreamLocation = instanceOfStreamLocation;
function StreamLocationFromJSON(json) {
    return StreamLocationFromJSONTyped(json, false);
}
exports.StreamLocationFromJSON = StreamLocationFromJSON;
function StreamLocationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'streamLocationNode': (0, StreamLocationNode_1.StreamLocationNodeFromJSON)(json['stream-location-node']),
        'publishedStation': json['published-station'] == null ? undefined : json['published-station'],
        'navigationStation': json['navigation-station'] == null ? undefined : json['navigation-station'],
        'lowestMeasurableStage': json['lowest-measurable-stage'] == null ? undefined : json['lowest-measurable-stage'],
        'totalDrainageArea': json['total-drainage-area'] == null ? undefined : json['total-drainage-area'],
        'ungagedDrainageArea': json['ungaged-drainage-area'] == null ? undefined : json['ungaged-drainage-area'],
        'areaUnits': json['area-units'] == null ? undefined : json['area-units'],
        'stageUnits': json['stage-units'] == null ? undefined : json['stage-units'],
    };
}
exports.StreamLocationFromJSONTyped = StreamLocationFromJSONTyped;
function StreamLocationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'stream-location-node': (0, StreamLocationNode_1.StreamLocationNodeToJSON)(value['streamLocationNode']),
        'published-station': value['publishedStation'],
        'navigation-station': value['navigationStation'],
        'lowest-measurable-stage': value['lowestMeasurableStage'],
        'total-drainage-area': value['totalDrainageArea'],
        'ungaged-drainage-area': value['ungagedDrainageArea'],
        'area-units': value['areaUnits'],
        'stage-units': value['stageUnits'],
    };
}
exports.StreamLocationToJSON = StreamLocationToJSON;
