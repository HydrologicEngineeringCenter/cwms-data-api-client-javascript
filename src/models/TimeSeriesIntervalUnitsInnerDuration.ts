/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TimeSeriesIntervalUnitsInnerDuration {
    'seconds'?: number;
    'nano'?: number;
    'zero'?: boolean;
    'negative'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "nano",
            "baseName": "nano",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "zero",
            "baseName": "zero",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "negative",
            "baseName": "negative",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesIntervalUnitsInnerDuration.attributeTypeMap;
    }

    public constructor() {
    }
}
