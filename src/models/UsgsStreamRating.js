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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsgsStreamRating = void 0;
var TableRating_1 = require("../models/TableRating");
var UsgsStreamRating = /** @class */ (function (_super) {
    __extends(UsgsStreamRating, _super);
    function UsgsStreamRating() {
        return _super.call(this) || this;
    }
    UsgsStreamRating.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(UsgsStreamRating.attributeTypeMap);
    };
    UsgsStreamRating.discriminator = undefined;
    UsgsStreamRating.attributeTypeMap = [];
    return UsgsStreamRating;
}(TableRating_1.TableRating));
exports.UsgsStreamRating = UsgsStreamRating;
