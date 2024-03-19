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
import type { SeasonalValueBean } from './SeasonalValueBean';
import {
    SeasonalValueBeanFromJSON,
    SeasonalValueBeanFromJSONTyped,
    SeasonalValueBeanToJSON,
} from './SeasonalValueBean';

/**
 * 
 * @export
 * @interface LocationLevel
 */
export interface LocationLevel {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof LocationLevel
     */
    officeId: string;
    /**
     * Name of the location level
     * @type {string}
     * @memberof LocationLevel
     */
    locationLevelId: string;
    /**
     * Timeseries ID (e.g. from the times series catalog) to use as the location level. Mutually exclusive with seasonalValues and siParameterUnitsConstantValue
     * @type {string}
     * @memberof LocationLevel
     */
    seasonalTimeSeriesId?: string;
    /**
     * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
     * @type {Array<SeasonalValueBean>}
     * @memberof LocationLevel
     */
    seasonalValues?: Array<SeasonalValueBean>;
    /**
     * Generic name of this location level. Common names are 'Top of Dam', 'Streambed', 'Bottom of Dam'.
     * @type {string}
     * @memberof LocationLevel
     */
    specifiedLevelId?: string;
    /**
     * To indicate if single or aggregate value
     * @type {string}
     * @memberof LocationLevel
     */
    parameterTypeId?: LocationLevelParameterTypeIdEnum;
    /**
     * Data Type such as Stage, Elevation, or others.
     * @type {string}
     * @memberof LocationLevel
     */
    parameterId?: string;
    /**
     * Single value for this location level. Mutually exclusive with seasonableTimeSeriesId and seasonValues.
     * @type {number}
     * @memberof LocationLevel
     */
    constantValue?: number;
    /**
     * Units the provided levels are in
     * @type {string}
     * @memberof LocationLevel
     */
    levelUnitsId?: string;
    /**
     * The date/time at which this location level configuration takes effect.
     * @type {Date}
     * @memberof LocationLevel
     */
    levelDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    levelComment?: string;
    /**
     * The start point of provided seasonal values
     * @type {Date}
     * @memberof LocationLevel
     */
    intervalOrigin?: Date;
    /**
     * 
     * @type {number}
     * @memberof LocationLevel
     */
    intervalMonths?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationLevel
     */
    intervalMinutes?: number;
    /**
     * Indicating whether or not to interpolate between seasonal values.
     * @type {string}
     * @memberof LocationLevel
     */
    interpolateString?: LocationLevelInterpolateStringEnum;
    /**
     * 0 if parameterTypeId is Inst. Otherwise duration indicating the time window of the aggregate value.
     * @type {string}
     * @memberof LocationLevel
     */
    durationId?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationLevel
     */
    attributeValue?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    attributeUnitsId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    attributeParameterTypeId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    attributeParameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    attributeDurationId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationLevel
     */
    attributeComment?: string;
}


/**
 * @export
 */
export const LocationLevelParameterTypeIdEnum = {
    Inst: 'Inst',
    Ave: 'Ave',
    Min: 'Min',
    Max: 'Max',
    Total: 'Total'
} as const;
export type LocationLevelParameterTypeIdEnum = typeof LocationLevelParameterTypeIdEnum[keyof typeof LocationLevelParameterTypeIdEnum];

/**
 * @export
 */
export const LocationLevelInterpolateStringEnum = {
    T: 'T',
    F: 'F'
} as const;
export type LocationLevelInterpolateStringEnum = typeof LocationLevelInterpolateStringEnum[keyof typeof LocationLevelInterpolateStringEnum];


/**
 * Check if a given object implements the LocationLevel interface.
 */
export function instanceOfLocationLevel(value: object): boolean {
    if (!('officeId' in value)) return false;
    if (!('locationLevelId' in value)) return false;
    return true;
}

export function LocationLevelFromJSON(json: any): LocationLevel {
    return LocationLevelFromJSONTyped(json, false);
}

export function LocationLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'locationLevelId': json['location-level-id'],
        'seasonalTimeSeriesId': json['seasonal-time-series-id'] == null ? undefined : json['seasonal-time-series-id'],
        'seasonalValues': json['seasonal-values'] == null ? undefined : ((json['seasonal-values'] as Array<any>).map(SeasonalValueBeanFromJSON)),
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

export function LocationLevelToJSON(value?: LocationLevel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'location-level-id': value['locationLevelId'],
        'seasonal-time-series-id': value['seasonalTimeSeriesId'],
        'seasonal-values': value['seasonalValues'] == null ? undefined : ((value['seasonalValues'] as Array<any>).map(SeasonalValueBeanToJSON)),
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

