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
import type { CwmsId } from './CwmsId';
import {
    CwmsIdFromJSON,
    CwmsIdFromJSONTyped,
    CwmsIdToJSON,
} from './CwmsId';
import type { LookupType } from './LookupType';
import {
    LookupTypeFromJSON,
    LookupTypeFromJSONTyped,
    LookupTypeToJSON,
} from './LookupType';
import type { TurbineSetting } from './TurbineSetting';
import {
    TurbineSettingFromJSON,
    TurbineSettingFromJSONTyped,
    TurbineSettingToJSON,
} from './TurbineSetting';

/**
 * 
 * @export
 * @interface TurbineChange
 */
export interface TurbineChange {
    /**
     * 
     * @type {CwmsId}
     * @memberof TurbineChange
     */
    projectId: CwmsId;
    /**
     * 
     * @type {Date}
     * @memberof TurbineChange
     */
    changeDate: Date;
    /**
     * 
     * @type {boolean}
     * @memberof TurbineChange
     */
    _protected?: boolean;
    /**
     * 
     * @type {LookupType}
     * @memberof TurbineChange
     */
    dischargeComputationType: LookupType;
    /**
     * 
     * @type {LookupType}
     * @memberof TurbineChange
     */
    reasonType: LookupType;
    /**
     * 
     * @type {string}
     * @memberof TurbineChange
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof TurbineChange
     */
    newTotalDischargeOverride?: number;
    /**
     * 
     * @type {number}
     * @memberof TurbineChange
     */
    oldTotalDischargeOverride?: number;
    /**
     * 
     * @type {string}
     * @memberof TurbineChange
     */
    dischargeUnits?: string;
    /**
     * 
     * @type {number}
     * @memberof TurbineChange
     */
    tailwaterElevation?: number;
    /**
     * 
     * @type {string}
     * @memberof TurbineChange
     */
    elevationUnits?: string;
    /**
     * 
     * @type {Array<TurbineSetting>}
     * @memberof TurbineChange
     */
    settings?: Array<TurbineSetting>;
    /**
     * 
     * @type {number}
     * @memberof TurbineChange
     */
    poolElevation?: number;
}

/**
 * Check if a given object implements the TurbineChange interface.
 */
export function instanceOfTurbineChange(value: object): boolean {
    if (!('projectId' in value)) return false;
    if (!('changeDate' in value)) return false;
    if (!('dischargeComputationType' in value)) return false;
    if (!('reasonType' in value)) return false;
    return true;
}

export function TurbineChangeFromJSON(json: any): TurbineChange {
    return TurbineChangeFromJSONTyped(json, false);
}

export function TurbineChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurbineChange {
    if (json == null) {
        return json;
    }
    return {
        
        'projectId': CwmsIdFromJSON(json['project-id']),
        'changeDate': (new Date(json['change-date'])),
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'dischargeComputationType': LookupTypeFromJSON(json['discharge-computation-type']),
        'reasonType': LookupTypeFromJSON(json['reason-type']),
        'notes': json['notes'] == null ? undefined : json['notes'],
        'newTotalDischargeOverride': json['new-total-discharge-override'] == null ? undefined : json['new-total-discharge-override'],
        'oldTotalDischargeOverride': json['old-total-discharge-override'] == null ? undefined : json['old-total-discharge-override'],
        'dischargeUnits': json['discharge-units'] == null ? undefined : json['discharge-units'],
        'tailwaterElevation': json['tailwater-elevation'] == null ? undefined : json['tailwater-elevation'],
        'elevationUnits': json['elevation-units'] == null ? undefined : json['elevation-units'],
        'settings': json['settings'] == null ? undefined : ((json['settings'] as Array<any>).map(TurbineSettingFromJSON)),
        'poolElevation': json['pool-elevation'] == null ? undefined : json['pool-elevation'],
    };
}

export function TurbineChangeToJSON(value?: TurbineChange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'project-id': CwmsIdToJSON(value['projectId']),
        'change-date': ((value['changeDate']).toISOString()),
        'protected': value['_protected'],
        'discharge-computation-type': LookupTypeToJSON(value['dischargeComputationType']),
        'reason-type': LookupTypeToJSON(value['reasonType']),
        'notes': value['notes'],
        'new-total-discharge-override': value['newTotalDischargeOverride'],
        'old-total-discharge-override': value['oldTotalDischargeOverride'],
        'discharge-units': value['dischargeUnits'],
        'tailwater-elevation': value['tailwaterElevation'],
        'elevation-units': value['elevationUnits'],
        'settings': value['settings'] == null ? undefined : ((value['settings'] as Array<any>).map(TurbineSettingToJSON)),
        'pool-elevation': value['poolElevation'],
    };
}

