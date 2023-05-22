/**
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * OpenAPI spec version: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TimeSeriesColumn {
    'name'?: string;
    'ordinal'?: number;
    'datatype'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "datatype",
            "baseName": "datatype",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesColumn.attributeTypeMap;
    }

    public constructor() {
    }
}

