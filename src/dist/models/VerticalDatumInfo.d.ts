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
import type { Offset } from './Offset';
/**
 *
 * @export
 * @interface VerticalDatumInfo
 */
export interface VerticalDatumInfo {
    /**
     *
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    office?: string;
    /**
     *
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    unit?: string;
    /**
     *
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    location?: string;
    /**
     *
     * @type {string}
     * @memberof VerticalDatumInfo
     */
    nativeDatum?: string;
    /**
     *
     * @type {number}
     * @memberof VerticalDatumInfo
     */
    elevation?: number;
    /**
     *
     * @type {Array<Offset>}
     * @memberof VerticalDatumInfo
     */
    offsets?: Array<Offset>;
}
/**
 * Check if a given object implements the VerticalDatumInfo interface.
 */
export declare function instanceOfVerticalDatumInfo(value: object): boolean;
export declare function VerticalDatumInfoFromJSON(json: any): VerticalDatumInfo;
export declare function VerticalDatumInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerticalDatumInfo;
export declare function VerticalDatumInfoToJSON(value?: VerticalDatumInfo | null): any;
