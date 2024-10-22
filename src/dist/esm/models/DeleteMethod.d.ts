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
export declare const DeleteMethod: {
    readonly All: "DELETE_ALL";
    readonly Key: "DELETE_KEY";
    readonly Data: "DELETE_DATA";
};
export type DeleteMethod = typeof DeleteMethod[keyof typeof DeleteMethod];
export declare function DeleteMethodFromJSON(json: any): DeleteMethod;
export declare function DeleteMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteMethod;
export declare function DeleteMethodToJSON(value?: DeleteMethod | null): any;
