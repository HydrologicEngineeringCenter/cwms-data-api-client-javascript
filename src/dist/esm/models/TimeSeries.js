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
import { TimeSeriesColumnFromJSON, } from './TimeSeriesColumn';
import { TimeSeriesIntervalFromJSON, TimeSeriesIntervalToJSON, } from './TimeSeriesInterval';
import { VerticalDatumInfoFromJSON, VerticalDatumInfoToJSON, } from './VerticalDatumInfo';
/**
 * Check if a given object implements the TimeSeries interface.
 */
export function instanceOfTimeSeries(value) {
    if (!('units' in value))
        return false;
    return true;
}
export function TimeSeriesFromJSON(json) {
    return TimeSeriesFromJSONTyped(json, false);
}
export function TimeSeriesFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'begin': json['begin'] == null ? undefined : (new Date(json['begin'])),
        'end': json['end'] == null ? undefined : (new Date(json['end'])),
        'interval': json['interval'] == null ? undefined : TimeSeriesIntervalFromJSON(json['interval']),
        'intervalOffset': json['interval-offset'] == null ? undefined : json['interval-offset'],
        'name': json['name'] == null ? undefined : json['name'],
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'officeId': json['office-id'] == null ? undefined : json['office-id'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
        'timeZone': json['time-zone'] == null ? undefined : json['time-zone'],
        'total': json['total'] == null ? undefined : json['total'],
        'units': json['units'],
        'valueColumns': json['value-columns'] == null ? undefined : (json['value-columns'].map(TimeSeriesColumnFromJSON)),
        'values': json['values'] == null ? undefined : json['values'],
        'verticalDatumInfo': json['vertical-datum-info'] == null ? undefined : VerticalDatumInfoFromJSON(json['vertical-datum-info']),
    };
}
export function TimeSeriesToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'interval': TimeSeriesIntervalToJSON(value['interval']),
        'name': value['name'],
        'office-id': value['officeId'],
        'units': value['units'],
        'values': value['values'],
        'vertical-datum-info': VerticalDatumInfoToJSON(value['verticalDatumInfo']),
    };
}
