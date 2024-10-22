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
import type { StreamflowMeasurement } from './StreamflowMeasurement';
import {
    StreamflowMeasurementFromJSON,
    StreamflowMeasurementFromJSONTyped,
    StreamflowMeasurementToJSON,
} from './StreamflowMeasurement';
import type { SupplementalStreamflowMeasurement } from './SupplementalStreamflowMeasurement';
import {
    SupplementalStreamflowMeasurementFromJSON,
    SupplementalStreamflowMeasurementFromJSONTyped,
    SupplementalStreamflowMeasurementToJSON,
} from './SupplementalStreamflowMeasurement';
import type { UsgsMeasurement } from './UsgsMeasurement';
import {
    UsgsMeasurementFromJSON,
    UsgsMeasurementFromJSONTyped,
    UsgsMeasurementToJSON,
} from './UsgsMeasurement';

/**
 * 
 * @export
 * @interface Measurement
 */
export interface Measurement {
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    heightUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    flowUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    tempUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    velocityUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    areaUnit?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Measurement
     */
    used?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    agency?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    party?: string;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    wmComments?: string;
    /**
     * 
     * @type {Date}
     * @memberof Measurement
     */
    instant: Date;
    /**
     * 
     * @type {CwmsId}
     * @memberof Measurement
     */
    id: CwmsId;
    /**
     * 
     * @type {string}
     * @memberof Measurement
     */
    number: string;
    /**
     * 
     * @type {StreamflowMeasurement}
     * @memberof Measurement
     */
    streamflowMeasurement?: StreamflowMeasurement;
    /**
     * 
     * @type {SupplementalStreamflowMeasurement}
     * @memberof Measurement
     */
    supplementalStreamflowMeasurement?: SupplementalStreamflowMeasurement;
    /**
     * 
     * @type {UsgsMeasurement}
     * @memberof Measurement
     */
    usgsMeasurement?: UsgsMeasurement;
}

/**
 * Check if a given object implements the Measurement interface.
 */
export function instanceOfMeasurement(value: object): boolean {
    if (!('instant' in value)) return false;
    if (!('id' in value)) return false;
    if (!('number' in value)) return false;
    return true;
}

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if (json == null) {
        return json;
    }
    return {
        
        'heightUnit': json['height-unit'] == null ? undefined : json['height-unit'],
        'flowUnit': json['flow-unit'] == null ? undefined : json['flow-unit'],
        'tempUnit': json['temp-unit'] == null ? undefined : json['temp-unit'],
        'velocityUnit': json['velocity-unit'] == null ? undefined : json['velocity-unit'],
        'areaUnit': json['area-unit'] == null ? undefined : json['area-unit'],
        'used': json['used'] == null ? undefined : json['used'],
        'agency': json['agency'] == null ? undefined : json['agency'],
        'party': json['party'] == null ? undefined : json['party'],
        'wmComments': json['wm-comments'] == null ? undefined : json['wm-comments'],
        'instant': (new Date(json['instant'])),
        'id': CwmsIdFromJSON(json['id']),
        'number': json['number'],
        'streamflowMeasurement': json['streamflow-measurement'] == null ? undefined : StreamflowMeasurementFromJSON(json['streamflow-measurement']),
        'supplementalStreamflowMeasurement': json['supplemental-streamflow-measurement'] == null ? undefined : SupplementalStreamflowMeasurementFromJSON(json['supplemental-streamflow-measurement']),
        'usgsMeasurement': json['usgs-measurement'] == null ? undefined : UsgsMeasurementFromJSON(json['usgs-measurement']),
    };
}

export function MeasurementToJSON(value?: Measurement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'height-unit': value['heightUnit'],
        'flow-unit': value['flowUnit'],
        'temp-unit': value['tempUnit'],
        'velocity-unit': value['velocityUnit'],
        'area-unit': value['areaUnit'],
        'used': value['used'],
        'agency': value['agency'],
        'party': value['party'],
        'wm-comments': value['wmComments'],
        'instant': ((value['instant']).toISOString()),
        'id': CwmsIdToJSON(value['id']),
        'number': value['number'],
        'streamflow-measurement': StreamflowMeasurementToJSON(value['streamflowMeasurement']),
        'supplemental-streamflow-measurement': SupplementalStreamflowMeasurementToJSON(value['supplementalStreamflowMeasurement']),
        'usgs-measurement': UsgsMeasurementToJSON(value['usgsMeasurement']),
    };
}
