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
import type { IndependentRoundingSpec } from "./IndependentRoundingSpec";
import {
  IndependentRoundingSpecFromJSON,
  IndependentRoundingSpecFromJSONTyped,
  IndependentRoundingSpecToJSON,
} from "./IndependentRoundingSpec";

/**
 *
 * @export
 * @interface RatingSpec
 */
export interface RatingSpec {
  /**
   * Owning office of object.
   * @type {string}
   * @memberof RatingSpec
   */
  officeId: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  ratingId?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  templateId?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  locationId?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  sourceAgency?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  inRangeMethod?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  outRangeLowMethod?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  outRangeHighMethod?: string;
  /**
   *
   * @type {boolean}
   * @memberof RatingSpec
   */
  active?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RatingSpec
   */
  autoUpdate?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RatingSpec
   */
  autoActivate?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RatingSpec
   */
  autoMigrateExtension?: boolean;
  /**
   *
   * @type {Array<IndependentRoundingSpec>}
   * @memberof RatingSpec
   */
  independentRoundingSpecs?: Array<IndependentRoundingSpec>;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  dependentRoundingSpec?: string;
  /**
   *
   * @type {string}
   * @memberof RatingSpec
   */
  description?: string;
  /**
   *
   * @type {Array<Date>}
   * @memberof RatingSpec
   */
  effectiveDates?: Array<Date>;
}

/**
 * Check if a given object implements the RatingSpec interface.
 */
export function instanceOfRatingSpec(value: object): boolean {
  if (!("officeId" in value)) return false;
  return true;
}

export function RatingSpecFromJSON(json: any): RatingSpec {
  return RatingSpecFromJSONTyped(json, false);
}

export function RatingSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RatingSpec {
  if (json == null) {
    return json;
  }
  return {
    officeId: json["office-id"],
    ratingId: json["rating-id"] == null ? undefined : json["rating-id"],
    templateId: json["template-id"] == null ? undefined : json["template-id"],
    locationId: json["location-id"] == null ? undefined : json["location-id"],
    version: json["version"] == null ? undefined : json["version"],
    sourceAgency:
      json["source-agency"] == null ? undefined : json["source-agency"],
    inRangeMethod:
      json["in-range-method"] == null ? undefined : json["in-range-method"],
    outRangeLowMethod:
      json["out-range-low-method"] == null
        ? undefined
        : json["out-range-low-method"],
    outRangeHighMethod:
      json["out-range-high-method"] == null
        ? undefined
        : json["out-range-high-method"],
    active: json["active"] == null ? undefined : json["active"],
    autoUpdate: json["auto-update"] == null ? undefined : json["auto-update"],
    autoActivate:
      json["auto-activate"] == null ? undefined : json["auto-activate"],
    autoMigrateExtension:
      json["auto-migrate-extension"] == null
        ? undefined
        : json["auto-migrate-extension"],
    independentRoundingSpecs:
      json["independent-rounding-specs"] == null
        ? undefined
        : (json["independent-rounding-specs"] as Array<any>).map(
            IndependentRoundingSpecFromJSON
          ),
    dependentRoundingSpec:
      json["dependent-rounding-spec"] == null
        ? undefined
        : json["dependent-rounding-spec"],
    description: json["description"] == null ? undefined : json["description"],
    effectiveDates:
      json["effective-dates"] == null ? undefined : json["effective-dates"],
  };
}

export function RatingSpecToJSON(value?: RatingSpec | null): any {
  if (value == null) {
    return value;
  }
  return {
    "office-id": value["officeId"],
    "rating-id": value["ratingId"],
    "template-id": value["templateId"],
    "location-id": value["locationId"],
    version: value["version"],
    "source-agency": value["sourceAgency"],
    "in-range-method": value["inRangeMethod"],
    "out-range-low-method": value["outRangeLowMethod"],
    "out-range-high-method": value["outRangeHighMethod"],
    active: value["active"],
    "auto-update": value["autoUpdate"],
    "auto-activate": value["autoActivate"],
    "auto-migrate-extension": value["autoMigrateExtension"],
    "independent-rounding-specs":
      value["independentRoundingSpecs"] == null
        ? undefined
        : (value["independentRoundingSpecs"] as Array<any>).map(
            IndependentRoundingSpecToJSON
          ),
    "dependent-rounding-spec": value["dependentRoundingSpec"],
    description: value["description"],
    "effective-dates": value["effectiveDates"],
  };
}
