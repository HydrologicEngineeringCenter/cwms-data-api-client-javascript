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

/**
* List of retrieved blobs
*/
export class Blob {
    'office': string;
    'id': string;
    'description'?: string;
    'mediaTypeId'?: string;
    'value'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "office",
            "baseName": "office",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "mediaTypeId",
            "baseName": "mediaTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return Blob.attributeTypeMap;
    }

    public constructor() {
    }
}
