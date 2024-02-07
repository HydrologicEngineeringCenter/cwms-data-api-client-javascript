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

import { AssignedTimeSeries } from '../models/AssignedTimeSeries';
import { TimeSeriesCategory } from '../models/TimeSeriesCategory';
import { HttpFile } from '../http/http';

/**
* A representation of a timeseries group
*/
export class TimeSeriesGroup {
    'id'?: string;
    'timeSeriesCategory'?: TimeSeriesCategory;
    'officeId'?: string;
    'description'?: string;
    'sharedAliasId'?: string;
    'sharedRefTsId'?: string;
    'assignedTimeSeries'?: Array<AssignedTimeSeries>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeSeriesCategory",
            "baseName": "timeSeriesCategory",
            "type": "TimeSeriesCategory",
            "format": ""
        },
        {
            "name": "officeId",
            "baseName": "officeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "sharedAliasId",
            "baseName": "sharedAliasId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sharedRefTsId",
            "baseName": "sharedRefTsId",
            "type": "string",
            "format": ""
        },
        {
            "name": "assignedTimeSeries",
            "baseName": "assignedTimeSeries",
            "type": "Array<AssignedTimeSeries>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesGroup.attributeTypeMap;
    }

    public constructor() {
    }
}
