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

/**
 * The StreamLocation model module.
 * @module model/StreamLocation
 * @version 3.0
 */
class StreamLocation {
    /**
     * Constructs a new <code>StreamLocation</code>.
     * @alias module:model/StreamLocation
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        StreamLocation.initialize(this, officeId);
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
     * Constructs a <code>StreamLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamLocation} obj Optional instance to populate.
     * @return {module:model/StreamLocation} The populated <code>StreamLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamLocation();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('location-name')) {
                obj['location-name'] = ApiClient.convertToType(data['location-name'], 'String');
            }
            if (data.hasOwnProperty('stream-name')) {
                obj['stream-name'] = ApiClient.convertToType(data['stream-name'], 'String');
            }
            if (data.hasOwnProperty('station')) {
                obj['station'] = ApiClient.convertToType(data['station'], 'Number');
            }
            if (data.hasOwnProperty('bank')) {
                obj['bank'] = ApiClient.convertToType(data['bank'], 'String');
            }
            if (data.hasOwnProperty('published-station')) {
                obj['published-station'] = ApiClient.convertToType(data['published-station'], 'Number');
            }
            if (data.hasOwnProperty('lowest-measurable-stage')) {
                obj['lowest-measurable-stage'] = ApiClient.convertToType(data['lowest-measurable-stage'], 'Number');
            }
            if (data.hasOwnProperty('total-drainage-area')) {
                obj['total-drainage-area'] = ApiClient.convertToType(data['total-drainage-area'], 'Number');
            }
            if (data.hasOwnProperty('ungaged-drainage-area')) {
                obj['ungaged-drainage-area'] = ApiClient.convertToType(data['ungaged-drainage-area'], 'Number');
            }
            if (data.hasOwnProperty('nagivation-station')) {
                obj['nagivation-station'] = ApiClient.convertToType(data['nagivation-station'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamLocation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StreamLocation.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['location-name'] && !(typeof data['location-name'] === 'string' || data['location-name'] instanceof String)) {
            throw new Error("Expected the field `location-name` to be a primitive type in the JSON string but got " + data['location-name']);
        }
        // ensure the json data is a string
        if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
            throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
        }
        // ensure the json data is a string
        if (data['bank'] && !(typeof data['bank'] === 'string' || data['bank'] instanceof String)) {
            throw new Error("Expected the field `bank` to be a primitive type in the JSON string but got " + data['bank']);
        }

        return true;
    }


}

StreamLocation.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
StreamLocation.prototype['office-id'] = undefined;

/**
 * @member {String} location-name
 */
StreamLocation.prototype['location-name'] = undefined;

/**
 * @member {String} stream-name
 */
StreamLocation.prototype['stream-name'] = undefined;

/**
 * @member {Number} station
 */
StreamLocation.prototype['station'] = undefined;

/**
 * @member {String} bank
 */
StreamLocation.prototype['bank'] = undefined;

/**
 * @member {Number} published-station
 */
StreamLocation.prototype['published-station'] = undefined;

/**
 * @member {Number} lowest-measurable-stage
 */
StreamLocation.prototype['lowest-measurable-stage'] = undefined;

/**
 * @member {Number} total-drainage-area
 */
StreamLocation.prototype['total-drainage-area'] = undefined;

/**
 * @member {Number} ungaged-drainage-area
 */
StreamLocation.prototype['ungaged-drainage-area'] = undefined;

/**
 * @member {Number} nagivation-station
 */
StreamLocation.prototype['nagivation-station'] = undefined;






export default StreamLocation;

