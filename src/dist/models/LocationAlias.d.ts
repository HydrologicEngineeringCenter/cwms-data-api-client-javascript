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
 *
 * @export
 * @interface LocationAlias
 */
export interface LocationAlias {
    /**
     *
     * @type {string}
     * @memberof LocationAlias
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof LocationAlias
     */
    value?: string;
}
/**
 * Check if a given object implements the LocationAlias interface.
 */
export declare function instanceOfLocationAlias(value: object): boolean;
export declare function LocationAliasFromJSON(json: any): LocationAlias;
export declare function LocationAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationAlias;
export declare function LocationAliasToJSON(value?: LocationAlias | null): any;
