/* tslint:disable */
/* eslint-disable */
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
 */
export const StoreRule = {
    ReplaceAll: 'REPLACE ALL',
    DoNotReplace: 'DO NOT REPLACE',
    ReplaceMissingValuesOnly: 'REPLACE MISSING VALUES ONLY',
    ReplaceWithNonMissing: 'REPLACE WITH NON MISSING',
    DeleteInsert: 'DELETE INSERT'
} as const;
export type StoreRule = typeof StoreRule[keyof typeof StoreRule];


export function StoreRuleFromJSON(json: any): StoreRule {
    return StoreRuleFromJSONTyped(json, false);
}

export function StoreRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreRule {
    return json as StoreRule;
}

export function StoreRuleToJSON(value?: StoreRule | null): any {
    return value as any;
}
