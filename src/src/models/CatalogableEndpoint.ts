/* tslint:disable */
/* eslint-disable */
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
export const CatalogableEndpoint = {
    Timeseries: 'TIMESERIES',
    Locations: 'LOCATIONS'
} as const;
export type CatalogableEndpoint = typeof CatalogableEndpoint[keyof typeof CatalogableEndpoint];


export function CatalogableEndpointFromJSON(json: any): CatalogableEndpoint {
    return CatalogableEndpointFromJSONTyped(json, false);
}

export function CatalogableEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogableEndpoint {
    return json as CatalogableEndpoint;
}

export function CatalogableEndpointToJSON(value?: CatalogableEndpoint | null): any {
    return value as any;
}

