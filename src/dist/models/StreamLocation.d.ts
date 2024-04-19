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
 *
 * @export
 * @interface StreamLocation
 */
export interface StreamLocation {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof StreamLocation
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof StreamLocation
     */
    locationName?: string;
    /**
     *
     * @type {string}
     * @memberof StreamLocation
     */
    streamName?: string;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    station?: number;
    /**
     *
     * @type {string}
     * @memberof StreamLocation
     */
    bank?: string;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    publishedStation?: number;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    lowestMeasurableStage?: number;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    totalDrainageArea?: number;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    ungagedDrainageArea?: number;
    /**
     *
     * @type {number}
     * @memberof StreamLocation
     */
    nagivationStation?: number;
}
/**
 * Check if a given object implements the StreamLocation interface.
 */
export declare function instanceOfStreamLocation(value: object): boolean;
export declare function StreamLocationFromJSON(json: any): StreamLocation;
export declare function StreamLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamLocation;
export declare function StreamLocationToJSON(value?: StreamLocation | null): any;
