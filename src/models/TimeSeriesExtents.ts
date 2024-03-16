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

/**
* TimeSeries extent information
*/
export class TimeSeriesExtents {
    /**
    * Earliest value in the timeseries
    */
    'earliestTime'?: Date;
    /**
    * Last update in the timeseries
    */
    'lastUpdate'?: Date;
    /**
    * Latest value in the timeseries
    */
    'latestTime'?: Date;
    /**
    * TimeSeries version to which this extent information applies
    */
    'versionTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "earliestTime",
            "baseName": "earliest-time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastUpdate",
            "baseName": "last-update",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "latestTime",
            "baseName": "latest-time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "versionTime",
            "baseName": "version-time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesExtents.attributeTypeMap;
    }

    public constructor() {
    }
}
