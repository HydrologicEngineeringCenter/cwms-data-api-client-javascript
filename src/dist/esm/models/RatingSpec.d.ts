/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.15.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { IndependentRoundingSpec } from './IndependentRoundingSpec';
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
export declare function instanceOfRatingSpec(value: object): boolean;
export declare function RatingSpecFromJSON(json: any): RatingSpec;
export declare function RatingSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingSpec;
export declare function RatingSpecToJSON(value?: RatingSpec | null): any;
