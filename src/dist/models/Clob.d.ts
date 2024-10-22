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
 * @interface Clob
 */
export interface Clob {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Clob
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof Clob
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof Clob
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Clob
     */
    value?: string;
}
/**
 * Check if a given object implements the Clob interface.
 */
export declare function instanceOfClob(value: object): boolean;
export declare function ClobFromJSON(json: any): Clob;
export declare function ClobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Clob;
export declare function ClobToJSON(value?: Clob | null): any;
