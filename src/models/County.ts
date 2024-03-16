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
* A representation of a county
*/
export class County {
    'name'?: string;
    'countyId'?: string;
    'stateInitial'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "countyId",
            "baseName": "countyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateInitial",
            "baseName": "stateInitial",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return County.attributeTypeMap;
    }

    public constructor() {
    }
}
