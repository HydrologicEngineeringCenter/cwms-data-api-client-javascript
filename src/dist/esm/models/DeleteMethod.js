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
 *
 * @export
 */
export const DeleteMethod = {
    All: 'DELETE_ALL',
    Key: 'DELETE_KEY',
    Data: 'DELETE_DATA'
};
export function DeleteMethodFromJSON(json) {
    return DeleteMethodFromJSONTyped(json, false);
}
export function DeleteMethodFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function DeleteMethodToJSON(value) {
    return value;
}
