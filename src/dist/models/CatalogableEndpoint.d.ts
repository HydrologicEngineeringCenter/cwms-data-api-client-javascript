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
 * Set of data for which a larger catalog can be built.
 * @export
 */
export declare const CatalogableEndpoint: {
    readonly Timeseries: "TIMESERIES";
    readonly Locations: "LOCATIONS";
};
export type CatalogableEndpoint = typeof CatalogableEndpoint[keyof typeof CatalogableEndpoint];
export declare function CatalogableEndpointFromJSON(json: any): CatalogableEndpoint;
export declare function CatalogableEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogableEndpoint;
export declare function CatalogableEndpointToJSON(value?: CatalogableEndpoint | null): any;
