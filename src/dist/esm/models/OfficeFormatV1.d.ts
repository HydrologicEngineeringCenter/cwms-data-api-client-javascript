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
import type { OfficesFMT } from './OfficesFMT';
/**
 *
 * @export
 * @interface OfficeFormatV1
 */
export interface OfficeFormatV1 {
    /**
     *
     * @type {OfficesFMT}
     * @memberof OfficeFormatV1
     */
    offices?: OfficesFMT;
}
/**
 * Check if a given object implements the OfficeFormatV1 interface.
 */
export declare function instanceOfOfficeFormatV1(value: object): boolean;
export declare function OfficeFormatV1FromJSON(json: any): OfficeFormatV1;
export declare function OfficeFormatV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficeFormatV1;
export declare function OfficeFormatV1ToJSON(value?: OfficeFormatV1 | null): any;
