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
import Stream from './Stream';

/**
 * The Basin model module.
 * @module model/Basin
 * @version 3.0
 */
class Basin {
    /**
     * Constructs a new <code>Basin</code>.
     * @alias module:model/Basin
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        Basin.initialize(this, officeId);
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
     * Constructs a <code>Basin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Basin} obj Optional instance to populate.
     * @return {module:model/Basin} The populated <code>Basin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Basin();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('basin-name')) {
                obj['basin-name'] = ApiClient.convertToType(data['basin-name'], 'String');
            }
            if (data.hasOwnProperty('primary-stream')) {
                obj['primary-stream'] = Stream.constructFromObject(data['primary-stream']);
            }
            if (data.hasOwnProperty('sort-order')) {
                obj['sort-order'] = ApiClient.convertToType(data['sort-order'], 'Number');
            }
            if (data.hasOwnProperty('basin-area')) {
                obj['basin-area'] = ApiClient.convertToType(data['basin-area'], 'Number');
            }
            if (data.hasOwnProperty('contributing-area')) {
                obj['contributing-area'] = ApiClient.convertToType(data['contributing-area'], 'Number');
            }
            if (data.hasOwnProperty('parent-basin-id')) {
                obj['parent-basin-id'] = ApiClient.convertToType(data['parent-basin-id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Basin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Basin</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Basin.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['basin-name'] && !(typeof data['basin-name'] === 'string' || data['basin-name'] instanceof String)) {
            throw new Error("Expected the field `basin-name` to be a primitive type in the JSON string but got " + data['basin-name']);
        }
        // validate the optional field `primary-stream`
        if (data['primary-stream']) { // data not null
          Stream.validateJSON(data['primary-stream']);
        }
        // ensure the json data is a string
        if (data['parent-basin-id'] && !(typeof data['parent-basin-id'] === 'string' || data['parent-basin-id'] instanceof String)) {
            throw new Error("Expected the field `parent-basin-id` to be a primitive type in the JSON string but got " + data['parent-basin-id']);
        }

        return true;
    }


}

Basin.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Basin.prototype['office-id'] = undefined;

/**
 * @member {String} basin-name
 */
Basin.prototype['basin-name'] = undefined;

/**
 * @member {module:model/Stream} primary-stream
 */
Basin.prototype['primary-stream'] = undefined;

/**
 * @member {Number} sort-order
 */
Basin.prototype['sort-order'] = undefined;

/**
 * @member {Number} basin-area
 */
Basin.prototype['basin-area'] = undefined;

/**
 * @member {Number} contributing-area
 */
Basin.prototype['contributing-area'] = undefined;

/**
 * @member {String} parent-basin-id
 */
Basin.prototype['parent-basin-id'] = undefined;






export default Basin;

