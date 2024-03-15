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

import { mapValues } from "../runtime";
import type { AbstractRatingMetadata } from "./AbstractRatingMetadata";
import {
  AbstractRatingMetadataFromJSON,
  AbstractRatingMetadataFromJSONTyped,
  AbstractRatingMetadataToJSON,
} from "./AbstractRatingMetadata";
import type { VerticalDatumInfo } from "./VerticalDatumInfo";
import {
  VerticalDatumInfoFromJSON,
  VerticalDatumInfoFromJSONTyped,
  VerticalDatumInfoToJSON,
} from "./VerticalDatumInfo";

/**
 *
 * @export
 * @interface ExpressionRating
 */
export interface ExpressionRating extends AbstractRatingMetadata {
  /**
   *
   * @type {string}
   * @memberof ExpressionRating
   */
  expression?: string;
}

/**
 * Check if a given object implements the ExpressionRating interface.
 */
export function instanceOfExpressionRating(value: object): boolean {
  return true;
}

export function ExpressionRatingFromJSON(json: any): ExpressionRating {
  return ExpressionRatingFromJSONTyped(json, false);
}

export function ExpressionRatingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExpressionRating {
  if (json == null) {
    return json;
  }
  return {
    ...AbstractRatingMetadataFromJSONTyped(json, ignoreDiscriminator),
    expression: json["expression"] == null ? undefined : json["expression"],
  };
}

export function ExpressionRatingToJSON(value?: ExpressionRating | null): any {
  if (value == null) {
    return value;
  }
  return {
    ...AbstractRatingMetadataToJSON(value),
    expression: value["expression"],
  };
}
