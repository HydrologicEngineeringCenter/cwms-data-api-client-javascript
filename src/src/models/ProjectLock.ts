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
 * @interface ProjectLock
 */
export interface ProjectLock {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof ProjectLock
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    applicationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ProjectLock
     */
    acquireTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    sessionUser?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    osUser?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    sessionProgram?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLock
     */
    sessionMachine?: string;
}

/**
 * Check if a given object implements the ProjectLock interface.
 */
export function instanceOfProjectLock(value: object): boolean {
    if (!('officeId' in value)) return false;
    return true;
}

export function ProjectLockFromJSON(json: any): ProjectLock {
    return ProjectLockFromJSONTyped(json, false);
}

export function ProjectLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectLock {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'projectId': json['project-id'] == null ? undefined : json['project-id'],
        'applicationId': json['application-id'] == null ? undefined : json['application-id'],
        'acquireTime': json['acquire-time'] == null ? undefined : (new Date(json['acquire-time'])),
        'sessionUser': json['session-user'] == null ? undefined : json['session-user'],
        'osUser': json['os-user'] == null ? undefined : json['os-user'],
        'sessionProgram': json['session-program'] == null ? undefined : json['session-program'],
        'sessionMachine': json['session-machine'] == null ? undefined : json['session-machine'],
    };
}

export function ProjectLockToJSON(value?: ProjectLock | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'project-id': value['projectId'],
        'application-id': value['applicationId'],
        'acquire-time': value['acquireTime'] == null ? undefined : ((value['acquireTime']).toISOString()),
        'session-user': value['sessionUser'],
        'os-user': value['osUser'],
        'session-program': value['sessionProgram'],
        'session-machine': value['sessionMachine'],
    };
}
