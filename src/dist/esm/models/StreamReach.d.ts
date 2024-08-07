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
 * @interface StreamReach
 */
export interface StreamReach {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof StreamReach
     */
    officeId: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    upstreamLocationName?: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    downstreamLocationName?: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    streamName?: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    reachName?: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof StreamReach
     */
    _configuration?: string;
}
/**
 * Check if a given object implements the StreamReach interface.
 */
export declare function instanceOfStreamReach(value: object): boolean;
export declare function StreamReachFromJSON(json: any): StreamReach;
export declare function StreamReachFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamReach;
export declare function StreamReachToJSON(value?: StreamReach | null): any;
