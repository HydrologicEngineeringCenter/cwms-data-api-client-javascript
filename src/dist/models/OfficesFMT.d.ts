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
import type { Office } from './Office';
/**
 *
 * @export
 * @interface OfficesFMT
 */
export interface OfficesFMT {
    /**
     *
     * @type {Array<Office>}
     * @memberof OfficesFMT
     */
    offices?: Array<Office>;
}
/**
 * Check if a given object implements the OfficesFMT interface.
 */
export declare function instanceOfOfficesFMT(value: object): boolean;
export declare function OfficesFMTFromJSON(json: any): OfficesFMT;
export declare function OfficesFMTFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficesFMT;
export declare function OfficesFMTToJSON(value?: OfficesFMT | null): any;
