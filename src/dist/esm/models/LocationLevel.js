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
import { SeasonalValueBeanFromJSON, SeasonalValueBeanToJSON, } from './SeasonalValueBean';
/**
 * @export
 */
export const LocationLevelParameterTypeIdEnum = {
    Inst: 'Inst',
    Ave: 'Ave',
    Min: 'Min',
    Max: 'Max',
    Total: 'Total'
};
/**
 * @export
 */
export const LocationLevelInterpolateStringEnum = {
    T: 'T',
    F: 'F'
};
/**
 * Check if a given object implements the LocationLevel interface.
 */
export function instanceOfLocationLevel(value) {
    if (!('officeId' in value))
        return false;
    if (!('locationLevelId' in value))
        return false;
    return true;
}
export function LocationLevelFromJSON(json) {
    return LocationLevelFromJSONTyped(json, false);
}
export function LocationLevelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'officeId': json['office-id'],
        'locationLevelId': json['location-level-id'],
        'seasonalTimeSeriesId': json['seasonal-time-series-id'] == null ? undefined : json['seasonal-time-series-id'],
        'seasonalValues': json['seasonal-values'] == null ? undefined : (json['seasonal-values'].map(SeasonalValueBeanFromJSON)),
        'specifiedLevelId': json['specified-level-id'] == null ? undefined : json['specified-level-id'],
        'parameterTypeId': json['parameter-type-id'] == null ? undefined : json['parameter-type-id'],
        'parameterId': json['parameter-id'] == null ? undefined : json['parameter-id'],
        'constantValue': json['constant-value'] == null ? undefined : json['constant-value'],
        'levelUnitsId': json['level-units-id'] == null ? undefined : json['level-units-id'],
        'levelDate': json['level-date'] == null ? undefined : (new Date(json['level-date'])),
        'levelComment': json['level-comment'] == null ? undefined : json['level-comment'],
        'intervalOrigin': json['interval-origin'] == null ? undefined : (new Date(json['interval-origin'])),
        'intervalMonths': json['interval-months'] == null ? undefined : json['interval-months'],
        'intervalMinutes': json['interval-minutes'] == null ? undefined : json['interval-minutes'],
        'interpolateString': json['interpolate-string'] == null ? undefined : json['interpolate-string'],
        'durationId': json['duration-id'] == null ? undefined : json['duration-id'],
        'attributeValue': json['attribute-value'] == null ? undefined : json['attribute-value'],
        'attributeUnitsId': json['attribute-units-id'] == null ? undefined : json['attribute-units-id'],
        'attributeParameterTypeId': json['attribute-parameter-type-id'] == null ? undefined : json['attribute-parameter-type-id'],
        'attributeParameterId': json['attribute-parameter-id'] == null ? undefined : json['attribute-parameter-id'],
        'attributeDurationId': json['attribute-duration-id'] == null ? undefined : json['attribute-duration-id'],
        'attributeComment': json['attribute-comment'] == null ? undefined : json['attribute-comment'],
    };
}
export function LocationLevelToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office-id': value['officeId'],
        'location-level-id': value['locationLevelId'],
        'seasonal-time-series-id': value['seasonalTimeSeriesId'],
        'seasonal-values': value['seasonalValues'] == null ? undefined : (value['seasonalValues'].map(SeasonalValueBeanToJSON)),
        'specified-level-id': value['specifiedLevelId'],
        'parameter-type-id': value['parameterTypeId'],
        'parameter-id': value['parameterId'],
        'constant-value': value['constantValue'],
        'level-units-id': value['levelUnitsId'],
        'level-date': value['levelDate'] == null ? undefined : ((value['levelDate']).toISOString()),
        'level-comment': value['levelComment'],
        'interval-origin': value['intervalOrigin'] == null ? undefined : ((value['intervalOrigin']).toISOString()),
        'interval-months': value['intervalMonths'],
        'interval-minutes': value['intervalMinutes'],
        'interpolate-string': value['interpolateString'],
        'duration-id': value['durationId'],
        'attribute-value': value['attributeValue'],
        'attribute-units-id': value['attributeUnitsId'],
        'attribute-parameter-type-id': value['attributeParameterTypeId'],
        'attribute-parameter-id': value['attributeParameterId'],
        'attribute-duration-id': value['attributeDurationId'],
        'attribute-comment': value['attributeComment'],
    };
}
