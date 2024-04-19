/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * A representation of a state
 * @export
 * @interface State
 */
export interface State {
    /**
     *
     * @type {string}
     * @memberof State
     */
    stateInitial?: string;
    /**
     *
     * @type {string}
     * @memberof State
     */
    name?: string;
}
/**
 * Check if a given object implements the State interface.
 */
export declare function instanceOfState(value: object): boolean;
export declare function StateFromJSON(json: any): State;
export declare function StateFromJSONTyped(json: any, ignoreDiscriminator: boolean): State;
export declare function StateToJSON(value?: State | null): any;
