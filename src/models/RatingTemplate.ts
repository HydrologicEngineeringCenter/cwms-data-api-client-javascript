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

import { ParameterSpec } from '../models/ParameterSpec';
import { HttpFile } from '../http/http';

export class RatingTemplate {
    /**
    * Owning office of object.
    */
    'officeId': string;
    'id'?: string;
    'version'?: string;
    'description'?: string;
    'dependentParameter'?: string;
    'independentParameterSpecs'?: Array<ParameterSpec>;
    'ratingIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "officeId",
            "baseName": "office-id",
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
            "name": "version",
            "baseName": "version",
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
            "name": "dependentParameter",
            "baseName": "dependent-parameter",
            "type": "string",
            "format": ""
        },
        {
            "name": "independentParameterSpecs",
            "baseName": "independent-parameter-specs",
            "type": "Array<ParameterSpec>",
            "format": ""
        },
        {
            "name": "ratingIds",
            "baseName": "rating-ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RatingTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}
