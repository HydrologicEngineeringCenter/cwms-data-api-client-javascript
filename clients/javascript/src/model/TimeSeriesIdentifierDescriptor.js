/**
 * CWMS_JS
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

/**
 * The TimeSeriesIdentifierDescriptor model module.
 * @module model/TimeSeriesIdentifierDescriptor
 * @version 3.0
 */
class TimeSeriesIdentifierDescriptor {
    /**
     * Constructs a new <code>TimeSeriesIdentifierDescriptor</code>.
     * @alias module:model/TimeSeriesIdentifierDescriptor
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        TimeSeriesIdentifierDescriptor.initialize(this, officeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, officeId) { 
        obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>TimeSeriesIdentifierDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIdentifierDescriptor} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIdentifierDescriptor} The populated <code>TimeSeriesIdentifierDescriptor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeSeriesIdentifierDescriptor();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('time-series-id')) {
                obj['time-series-id'] = ApiClient.convertToType(data['time-series-id'], 'String');
            }
            if (data.hasOwnProperty('timezone-name')) {
                obj['timezone-name'] = ApiClient.convertToType(data['timezone-name'], 'String');
            }
            if (data.hasOwnProperty('interval-offset-minutes')) {
                obj['interval-offset-minutes'] = ApiClient.convertToType(data['interval-offset-minutes'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIdentifierDescriptor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIdentifierDescriptor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimeSeriesIdentifierDescriptor.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['time-series-id'] && !(typeof data['time-series-id'] === 'string' || data['time-series-id'] instanceof String)) {
            throw new Error("Expected the field `time-series-id` to be a primitive type in the JSON string but got " + data['time-series-id']);
        }
        // ensure the json data is a string
        if (data['timezone-name'] && !(typeof data['timezone-name'] === 'string' || data['timezone-name'] instanceof String)) {
            throw new Error("Expected the field `timezone-name` to be a primitive type in the JSON string but got " + data['timezone-name']);
        }

        return true;
    }


}

TimeSeriesIdentifierDescriptor.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
TimeSeriesIdentifierDescriptor.prototype['office-id'] = undefined;

/**
 * @member {String} time-series-id
 */
TimeSeriesIdentifierDescriptor.prototype['time-series-id'] = undefined;

/**
 * @member {String} timezone-name
 */
TimeSeriesIdentifierDescriptor.prototype['timezone-name'] = undefined;

/**
 * @member {Number} interval-offset-minutes
 */
TimeSeriesIdentifierDescriptor.prototype['interval-offset-minutes'] = undefined;

/**
 * @member {Boolean} active
 */
TimeSeriesIdentifierDescriptor.prototype['active'] = undefined;






export default TimeSeriesIdentifierDescriptor;

