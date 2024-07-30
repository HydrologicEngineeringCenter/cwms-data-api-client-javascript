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
import { ExtentsFromJSON, ExtentsToJSON, } from './Extents';
/**
 * Check if a given object implements the TimeseriesCatalogEntry interface.
 */
export function instanceOfTimeseriesCatalogEntry(value) {
    return true;
}
export function TimeseriesCatalogEntryFromJSON(json) {
    return TimeseriesCatalogEntryFromJSONTyped(json, false);
}
export function TimeseriesCatalogEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['office'] == null ? undefined : json['office'],
        'name': json['name'] == null ? undefined : json['name'],
        'units': json['units'] == null ? undefined : json['units'],
        'interval': json['interval'] == null ? undefined : json['interval'],
        'intervalOffset': json['interval-offset'] == null ? undefined : json['interval-offset'],
        'timeZone': json['time-zone'] == null ? undefined : json['time-zone'],
        'extents': json['extents'] == null ? undefined : (json['extents'].map(ExtentsFromJSON)),
    };
}
export function TimeseriesCatalogEntryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office': value['office'],
        'name': value['name'],
        'units': value['units'],
        'interval': value['interval'],
        'interval-offset': value['intervalOffset'],
        'time-zone': value['timeZone'],
        'extents': value['extents'] == null ? undefined : (value['extents'].map(ExtentsToJSON)),
    };
}
