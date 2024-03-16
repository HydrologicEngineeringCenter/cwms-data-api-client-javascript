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
 * The StreamReach model module.
 * @module model/StreamReach
 * @version 1.4.0
 */
class StreamReach {
    /**
     * Constructs a new <code>StreamReach</code>.
     * @alias module:model/StreamReach
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        StreamReach.initialize(this, officeId);
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
     * Constructs a <code>StreamReach</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamReach} obj Optional instance to populate.
     * @return {module:model/StreamReach} The populated <code>StreamReach</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamReach();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('upstream-location-name')) {
                obj['upstream-location-name'] = ApiClient.convertToType(data['upstream-location-name'], 'String');
            }
            if (data.hasOwnProperty('downstream-location-name')) {
                obj['downstream-location-name'] = ApiClient.convertToType(data['downstream-location-name'], 'String');
            }
            if (data.hasOwnProperty('stream-name')) {
                obj['stream-name'] = ApiClient.convertToType(data['stream-name'], 'String');
            }
            if (data.hasOwnProperty('reach-name')) {
                obj['reach-name'] = ApiClient.convertToType(data['reach-name'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamReach</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamReach</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StreamReach.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['upstream-location-name'] && !(typeof data['upstream-location-name'] === 'string' || data['upstream-location-name'] instanceof String)) {
            throw new Error("Expected the field `upstream-location-name` to be a primitive type in the JSON string but got " + data['upstream-location-name']);
        }
        // ensure the json data is a string
        if (data['downstream-location-name'] && !(typeof data['downstream-location-name'] === 'string' || data['downstream-location-name'] instanceof String)) {
            throw new Error("Expected the field `downstream-location-name` to be a primitive type in the JSON string but got " + data['downstream-location-name']);
        }
        // ensure the json data is a string
        if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
            throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
        }
        // ensure the json data is a string
        if (data['reach-name'] && !(typeof data['reach-name'] === 'string' || data['reach-name'] instanceof String)) {
            throw new Error("Expected the field `reach-name` to be a primitive type in the JSON string but got " + data['reach-name']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['configuration'] && !(typeof data['configuration'] === 'string' || data['configuration'] instanceof String)) {
            throw new Error("Expected the field `configuration` to be a primitive type in the JSON string but got " + data['configuration']);
        }

        return true;
    }


}

StreamReach.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
StreamReach.prototype['office-id'] = undefined;

/**
 * @member {String} upstream-location-name
 */
StreamReach.prototype['upstream-location-name'] = undefined;

/**
 * @member {String} downstream-location-name
 */
StreamReach.prototype['downstream-location-name'] = undefined;

/**
 * @member {String} stream-name
 */
StreamReach.prototype['stream-name'] = undefined;

/**
 * @member {String} reach-name
 */
StreamReach.prototype['reach-name'] = undefined;

/**
 * @member {String} comment
 */
StreamReach.prototype['comment'] = undefined;

/**
 * @member {String} configuration
 */
StreamReach.prototype['configuration'] = undefined;






export default StreamReach;

