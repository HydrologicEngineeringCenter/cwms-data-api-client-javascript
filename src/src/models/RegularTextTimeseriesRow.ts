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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RegularTextTimeseriesRow
 */
export interface RegularTextTimeseriesRow {
    /**
     * 
     * @type {Date}
     * @memberof RegularTextTimeseriesRow
     */
    dateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RegularTextTimeseriesRow
     */
    dataEntryDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof RegularTextTimeseriesRow
     */
    textValue?: string;
    /**
     * 
     * @type {string}
     * @memberof RegularTextTimeseriesRow
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof RegularTextTimeseriesRow
     */
    mediaType?: string;
    /**
     * 
     * @type {number}
     * @memberof RegularTextTimeseriesRow
     */
    qualityCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RegularTextTimeseriesRow
     */
    destFlag?: number;
    /**
     * 
     * @type {string}
     * @memberof RegularTextTimeseriesRow
     */
    valueUrl?: string;
}

/**
 * Check if a given object implements the RegularTextTimeseriesRow interface.
 */
export function instanceOfRegularTextTimeseriesRow(value: object): boolean {
    return true;
}

export function RegularTextTimeseriesRowFromJSON(json: any): RegularTextTimeseriesRow {
    return RegularTextTimeseriesRowFromJSONTyped(json, false);
}

export function RegularTextTimeseriesRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegularTextTimeseriesRow {
    if (json == null) {
        return json;
    }
    return {
        
        'dateTime': json['date-time'] == null ? undefined : (new Date(json['date-time'])),
        'dataEntryDate': json['data-entry-date'] == null ? undefined : (new Date(json['data-entry-date'])),
        'textValue': json['text-value'] == null ? undefined : json['text-value'],
        'filename': json['filename'] == null ? undefined : json['filename'],
        'mediaType': json['media-type'] == null ? undefined : json['media-type'],
        'qualityCode': json['quality-code'] == null ? undefined : json['quality-code'],
        'destFlag': json['dest-flag'] == null ? undefined : json['dest-flag'],
        'valueUrl': json['value-url'] == null ? undefined : json['value-url'],
    };
}

export function RegularTextTimeseriesRowToJSON(value?: RegularTextTimeseriesRow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date-time': value['dateTime'] == null ? undefined : ((value['dateTime']).toISOString()),
        'data-entry-date': value['dataEntryDate'] == null ? undefined : ((value['dataEntryDate']).toISOString()),
        'text-value': value['textValue'],
        'filename': value['filename'],
        'media-type': value['mediaType'],
        'quality-code': value['qualityCode'],
        'dest-flag': value['destFlag'],
        'value-url': value['valueUrl'],
    };
}

