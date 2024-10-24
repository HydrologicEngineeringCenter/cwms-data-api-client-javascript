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
exports.StateToJSON = exports.StateFromJSONTyped = exports.StateFromJSON = exports.instanceOfState = void 0;
/**
 * Check if a given object implements the State interface.
 */
function instanceOfState(value) {
    if (!('stateInitial' in value))
        return false;
    if (!('name' in value))
        return false;
    return true;
}
exports.instanceOfState = instanceOfState;
function StateFromJSON(json) {
    return StateFromJSONTyped(json, false);
}
exports.StateFromJSON = StateFromJSON;
function StateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'stateInitial': json['state-initial'],
        'name': json['name'],
    };
}
exports.StateFromJSONTyped = StateFromJSONTyped;
function StateToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'state-initial': value['stateInitial'],
        'name': value['name'],
    };
}
exports.StateToJSON = StateToJSON;
