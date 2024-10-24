/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ParameterSpec
 */
export interface ParameterSpec {
    /**
     *
     * @type {string}
     * @memberof ParameterSpec
     */
    parameter?: string;
    /**
     *
     * @type {string}
     * @memberof ParameterSpec
     */
    inRangeMethod?: string;
    /**
     *
     * @type {string}
     * @memberof ParameterSpec
     */
    outRangeLowMethod?: string;
    /**
     *
     * @type {string}
     * @memberof ParameterSpec
     */
    outRangeHighMethod?: string;
}
/**
 * Check if a given object implements the ParameterSpec interface.
 */
export declare function instanceOfParameterSpec(value: object): boolean;
export declare function ParameterSpecFromJSON(json: any): ParameterSpec;
export declare function ParameterSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterSpec;
export declare function ParameterSpecToJSON(value?: ParameterSpec | null): any;
