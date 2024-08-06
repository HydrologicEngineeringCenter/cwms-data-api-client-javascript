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
/**
 * A representation of a location category
 * @export
 * @interface LocationCategory
 */
export interface LocationCategory {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof LocationCategory
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof LocationCategory
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof LocationCategory
     */
    description?: string;
}
/**
 * Check if a given object implements the LocationCategory interface.
 */
export declare function instanceOfLocationCategory(value: object): boolean;
export declare function LocationCategoryFromJSON(json: any): LocationCategory;
export declare function LocationCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationCategory;
export declare function LocationCategoryToJSON(value?: LocationCategory | null): any;
