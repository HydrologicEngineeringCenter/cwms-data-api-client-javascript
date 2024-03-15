/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ExpressionRating } from "./ExpressionRating";
import {
  instanceOfExpressionRating,
  ExpressionRatingFromJSON,
  ExpressionRatingFromJSONTyped,
  ExpressionRatingToJSON,
} from "./ExpressionRating";
import type { TableRating } from "./TableRating";
import {
  instanceOfTableRating,
  TableRatingFromJSON,
  TableRatingFromJSONTyped,
  TableRatingToJSON,
} from "./TableRating";
import type { TransitionalRating } from "./TransitionalRating";
import {
  instanceOfTransitionalRating,
  TransitionalRatingFromJSON,
  TransitionalRatingFromJSONTyped,
  TransitionalRatingToJSON,
} from "./TransitionalRating";
import type { UsgsStreamRating } from "./UsgsStreamRating";
import {
  instanceOfUsgsStreamRating,
  UsgsStreamRatingFromJSON,
  UsgsStreamRatingFromJSONTyped,
  UsgsStreamRatingToJSON,
} from "./UsgsStreamRating";
import type { VirtualRating } from "./VirtualRating";
import {
  instanceOfVirtualRating,
  VirtualRatingFromJSON,
  VirtualRatingFromJSONTyped,
  VirtualRatingToJSON,
} from "./VirtualRating";

/**
 * @type AbstractRatingMetadata
 * Rating Metadata
 * @export
 */
export type AbstractRatingMetadata =
  | ({ ratingType: "expression-rating" } & ExpressionRating)
  | ({ ratingType: "table" } & TableRating)
  | ({ ratingType: "transitional" } & TransitionalRating)
  | ({ ratingType: "usgs" } & UsgsStreamRating)
  | ({ ratingType: "virtual" } & VirtualRating);

export function AbstractRatingMetadataFromJSON(
  json: any
): AbstractRatingMetadata {
  return AbstractRatingMetadataFromJSONTyped(json, false);
}

export function AbstractRatingMetadataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AbstractRatingMetadata {
  if (json == null) {
    return json;
  }
  switch (json["rating-type"]) {
    case "expression-rating":
      return {
        ...ExpressionRatingFromJSONTyped(json, true),
        ratingType: "expression-rating",
      };
    case "table":
      return { ...TableRatingFromJSONTyped(json, true), ratingType: "table" };
    case "transitional":
      return {
        ...TransitionalRatingFromJSONTyped(json, true),
        ratingType: "transitional",
      };
    case "usgs":
      return {
        ...UsgsStreamRatingFromJSONTyped(json, true),
        ratingType: "usgs",
      };
    case "virtual":
      return {
        ...VirtualRatingFromJSONTyped(json, true),
        ratingType: "virtual",
      };
    default:
      throw new Error(
        `No variant of AbstractRatingMetadata exists with 'ratingType=${json["ratingType"]}'`
      );
  }
}

export function AbstractRatingMetadataToJSON(
  value?: AbstractRatingMetadata | null
): any {
  if (value == null) {
    return value;
  }
  switch (value["ratingType"]) {
    case "expression-rating":
      return ExpressionRatingToJSON(value);
    case "table":
      return TableRatingToJSON(value);
    case "transitional":
      return TransitionalRatingToJSON(value);
    case "usgs":
      return UsgsStreamRatingToJSON(value);
    case "virtual":
      return VirtualRatingToJSON(value);
    default:
      throw new Error(
        `No variant of AbstractRatingMetadata exists with 'ratingType=${value["ratingType"]}'`
      );
  }
}
