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

import { AbstractRatingMetadata } from '../models/AbstractRatingMetadata';
import { VerticalDatumInfo } from '../models/VerticalDatumInfo';
import { HttpFile } from '../http/http';

export class ExpressionRating extends AbstractRatingMetadata {
    'expression'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExpressionRating.attributeTypeMap);
    }

    public constructor() {
        super();
    }
}
