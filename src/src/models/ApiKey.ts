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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiKey
 */
export interface ApiKey {
    /**
     * 
     * @type {string}
     * @memberof ApiKey
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKey
     */
    keyName: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKey
     */
    apiKey?: string;
    /**
     * The instant this Key was created, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
     * @type {Date}
     * @memberof ApiKey
     */
    readonly created?: Date;
    /**
     * When this key expires, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
     * @type {Date}
     * @memberof ApiKey
     */
    expires?: Date;
}

/**
 * Check if a given object implements the ApiKey interface.
 */
export function instanceOfApiKey(value: object): boolean {
    if (!('userId' in value)) return false;
    if (!('keyName' in value)) return false;
    return true;
}

export function ApiKeyFromJSON(json: any): ApiKey {
    return ApiKeyFromJSONTyped(json, false);
}

export function ApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiKey {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['user-id'],
        'keyName': json['key-name'],
        'apiKey': json['api-key'] == null ? undefined : json['api-key'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'expires': json['expires'] == null ? undefined : (new Date(json['expires'])),
    };
}

export function ApiKeyToJSON(value?: ApiKey | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user-id': value['userId'],
        'key-name': value['keyName'],
        'api-key': value['apiKey'],
        'expires': value['expires'] == null ? undefined : ((value['expires']).toISOString()),
    };
}
