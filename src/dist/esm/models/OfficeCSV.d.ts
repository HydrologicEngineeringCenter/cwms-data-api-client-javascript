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
 * Single Office or List of Offices in comma separated format
 * @export
 * @interface OfficeCSV
 */
export interface OfficeCSV {
    /**
     *
     * @type {string}
     * @memberof OfficeCSV
     */
    office?: string;
    /**
     *
     * @type {string}
     * @memberof OfficeCSV
     */
    longName?: string;
    /**
     *
     * @type {string}
     * @memberof OfficeCSV
     */
    officeType?: string;
    /**
     *
     * @type {string}
     * @memberof OfficeCSV
     */
    reportsToOffice?: string;
}
/**
 * Check if a given object implements the OfficeCSV interface.
 */
export declare function instanceOfOfficeCSV(value: object): boolean;
export declare function OfficeCSVFromJSON(json: any): OfficeCSV;
export declare function OfficeCSVFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfficeCSV;
export declare function OfficeCSVToJSON(value?: OfficeCSV | null): any;
