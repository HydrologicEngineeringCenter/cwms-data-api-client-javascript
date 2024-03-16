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
* A representation of a CWMS office
*/
export class Office {
    'name'?: string;
    'longName'?: string;
    'type'?: OfficeTypeEnum;
    /**
    * Reference to another office, like a division, that this office reports to.
    */
    'reportsTo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "type",
            "baseName": "type",
            "type": "OfficeTypeEnum",
            "format": ""
        },
        {
            "name": "reportsTo",
            "baseName": "reportsTo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Office.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum OfficeTypeEnum {
    Unknown = 'unknown',
    CorpsHeadquarters = 'corps headquarters',
    DivisionHeadquarters = 'division headquarters',
    DivisionRegional = 'division regional',
    District = 'district',
    FiledOperatingActivity = 'filed operating activity'
}

