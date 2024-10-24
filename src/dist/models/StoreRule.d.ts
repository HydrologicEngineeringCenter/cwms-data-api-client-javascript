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
export declare const StoreRule: {
    readonly ReplaceAll: "REPLACE ALL";
    readonly DoNotReplace: "DO NOT REPLACE";
    readonly ReplaceMissingValuesOnly: "REPLACE MISSING VALUES ONLY";
    readonly ReplaceWithNonMissing: "REPLACE WITH NON MISSING";
    readonly DeleteInsert: "DELETE INSERT";
};
export type StoreRule = typeof StoreRule[keyof typeof StoreRule];
export declare function StoreRuleFromJSON(json: any): StoreRule;
export declare function StoreRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreRule;
export declare function StoreRuleToJSON(value?: StoreRule | null): any;
