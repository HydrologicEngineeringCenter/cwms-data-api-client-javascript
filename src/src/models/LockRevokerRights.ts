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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LockRevokerRights
 */
export interface LockRevokerRights {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof LockRevokerRights
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof LockRevokerRights
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof LockRevokerRights
     */
    applicationId?: string;
    /**
     * 
     * @type {string}
     * @memberof LockRevokerRights
     */
    userId?: string;
}

/**
 * Check if a given object implements the LockRevokerRights interface.
 */
export function instanceOfLockRevokerRights(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function LockRevokerRightsFromJSON(json: any): LockRevokerRights {
    return LockRevokerRightsFromJSONTyped(json, false);
}

export function LockRevokerRightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockRevokerRights {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'projectId': json['project-id'] == null ? undefined : json['project-id'],
        'applicationId': json['application-id'] == null ? undefined : json['application-id'],
        'userId': json['user-id'] == null ? undefined : json['user-id'],
    };
}

export function LockRevokerRightsToJSON(value?: LockRevokerRights | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'project-id': value['projectId'],
        'application-id': value['applicationId'],
        'user-id': value['userId'],
    };
}

