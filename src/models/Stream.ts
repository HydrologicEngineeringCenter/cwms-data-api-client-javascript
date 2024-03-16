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

import { StreamLocation } from '../models/StreamLocation';
import { StreamReach } from '../models/StreamReach';
import { HttpFile } from '../http/http';

export class Stream {
    /**
    * Owning office of object.
    */
    'officeId': string;
    'streamName'?: string;
    'tributaries'?: Array<Stream>;
    'streamReaches'?: Array<StreamReach>;
    'divertingStreamId'?: string;
    'receivingStreamId'?: string;
    'confluenceBank'?: string;
    'diversionBank'?: string;
    'streamLength'?: number;
    'confluenceStation'?: number;
    'diversionStation'?: number;
    'streamLocations'?: Array<StreamLocation>;
    'comment'?: string;
    'averageSlope'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "officeId",
            "baseName": "office-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamName",
            "baseName": "stream-name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tributaries",
            "baseName": "tributaries",
            "type": "Array<Stream>",
            "format": ""
        },
        {
            "name": "streamReaches",
            "baseName": "stream-reaches",
            "type": "Array<StreamReach>",
            "format": ""
        },
        {
            "name": "divertingStreamId",
            "baseName": "diverting-stream-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "receivingStreamId",
            "baseName": "receiving-stream-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "confluenceBank",
            "baseName": "confluence-bank",
            "type": "string",
            "format": ""
        },
        {
            "name": "diversionBank",
            "baseName": "diversion-bank",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamLength",
            "baseName": "stream-length",
            "type": "number",
            "format": "double"
        },
        {
            "name": "confluenceStation",
            "baseName": "confluence-station",
            "type": "number",
            "format": "double"
        },
        {
            "name": "diversionStation",
            "baseName": "diversion-station",
            "type": "number",
            "format": "double"
        },
        {
            "name": "streamLocations",
            "baseName": "stream-locations",
            "type": "Array<StreamLocation>",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "averageSlope",
            "baseName": "average-slope",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return Stream.attributeTypeMap;
    }

    public constructor() {
    }
}

