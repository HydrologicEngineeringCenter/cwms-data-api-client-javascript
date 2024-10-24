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
export const PumpType = {
    In: 'IN',
    Out: 'OUT',
    Below: 'BELOW'
} as const;
export type PumpType = typeof PumpType[keyof typeof PumpType];


export function PumpTypeFromJSON(json: any): PumpType {
    return PumpTypeFromJSONTyped(json, false);
}

export function PumpTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PumpType {
    return json as PumpType;
}

export function PumpTypeToJSON(value?: PumpType | null): any {
    return value as any;
}

