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
* Single Office or List of Offices in comma separated format
*/
export class CsvV1Office {
    'office'?: string;
    'longName'?: string;
    'officeType'?: string;
    'reportsToOffice'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "office",
            "baseName": "Office",
            "type": "string",
            "format": ""
        },
        {
            "name": "longName",
            "baseName": "longName",
            "type": "string",
            "format": ""
        },
        {
            "name": "officeType",
            "baseName": "officeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportsToOffice",
            "baseName": "reportsToOffice",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CsvV1Office.attributeTypeMap;
    }

    public constructor() {
    }
}
