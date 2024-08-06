/* tslint:disable */
/* eslint-disable */
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
 * Set of data for which a larger catalog can be built.
 * @export
 */
export const CatalogableEndpoint = {
    Timeseries: 'TIMESERIES',
    Locations: 'LOCATIONS'
};
export function CatalogableEndpointFromJSON(json) {
    return CatalogableEndpointFromJSONTyped(json, false);
}
export function CatalogableEndpointFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function CatalogableEndpointToJSON(value) {
    return value;
}
