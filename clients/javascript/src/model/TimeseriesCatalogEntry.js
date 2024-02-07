/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TimeSeriesExtents from './TimeSeriesExtents';

/**
 * The TimeseriesCatalogEntry model module.
 * @module model/TimeseriesCatalogEntry
 * @version 3.0
 */
class TimeseriesCatalogEntry {
    /**
     * Constructs a new <code>TimeseriesCatalogEntry</code>.
     * @alias module:model/TimeseriesCatalogEntry
     */
    constructor() { 
        
        TimeseriesCatalogEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeseriesCatalogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeseriesCatalogEntry} obj Optional instance to populate.
     * @return {module:model/TimeseriesCatalogEntry} The populated <code>TimeseriesCatalogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeseriesCatalogEntry();

            if (data.hasOwnProperty('office')) {
                obj['office'] = ApiClient.convertToType(data['office'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'String');
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
            }
            if (data.hasOwnProperty('intervalOffset')) {
                obj['intervalOffset'] = ApiClient.convertToType(data['intervalOffset'], 'Number');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
            if (data.hasOwnProperty('extents')) {
                obj['extents'] = ApiClient.convertToType(data['extents'], [TimeSeriesExtents]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeseriesCatalogEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeseriesCatalogEntry</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['office'] && !(typeof data['office'] === 'string' || data['office'] instanceof String)) {
            throw new Error("Expected the field `office` to be a primitive type in the JSON string but got " + data['office']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['units'] && !(typeof data['units'] === 'string' || data['units'] instanceof String)) {
            throw new Error("Expected the field `units` to be a primitive type in the JSON string but got " + data['units']);
        }
        // ensure the json data is a string
        if (data['interval'] && !(typeof data['interval'] === 'string' || data['interval'] instanceof String)) {
            throw new Error("Expected the field `interval` to be a primitive type in the JSON string but got " + data['interval']);
        }
        // ensure the json data is a string
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }
        if (data['extents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['extents'])) {
                throw new Error("Expected the field `extents` to be an array in the JSON data but got " + data['extents']);
            }
            // validate the optional field `extents` (array)
            for (const item of data['extents']) {
                TimeSeriesExtents.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} office
 */
TimeseriesCatalogEntry.prototype['office'] = undefined;

/**
 * @member {String} name
 */
TimeseriesCatalogEntry.prototype['name'] = undefined;

/**
 * @member {String} units
 */
TimeseriesCatalogEntry.prototype['units'] = undefined;

/**
 * @member {String} interval
 */
TimeseriesCatalogEntry.prototype['interval'] = undefined;

/**
 * Offset from top of interval
 * @member {Number} intervalOffset
 */
TimeseriesCatalogEntry.prototype['intervalOffset'] = undefined;

/**
 * Only on 21.1.1 Database. The timezone the Interval Offset is from.
 * @member {String} timeZone
 */
TimeseriesCatalogEntry.prototype['timeZone'] = undefined;

/**
 * @member {Array.<module:model/TimeSeriesExtents>} extents
 */
TimeseriesCatalogEntry.prototype['extents'] = undefined;






export default TimeseriesCatalogEntry;
