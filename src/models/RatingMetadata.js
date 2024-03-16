"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingMetadata = void 0;
var RatingMetadata = /** @class */ (function () {
    function RatingMetadata() {
    }
    RatingMetadata.getAttributeTypeMap = function () {
        return RatingMetadata.attributeTypeMap;
    };
    RatingMetadata.discriminator = undefined;
    RatingMetadata.attributeTypeMap = [
        {
            "name": "ratingSpec",
            "baseName": "rating-spec",
            "type": "RatingSpec",
            "format": ""
        },
        {
            "name": "ratings",
            "baseName": "ratings",
            "type": "Array<AbstractRatingMetadata>",
            "format": ""
        }
    ];
    return RatingMetadata;
}());
exports.RatingMetadata = RatingMetadata;
