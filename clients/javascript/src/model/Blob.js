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
 * The Blob model module.
 * @module model/Blob
 * @version 3.0
 */
class Blob {
    /**
     * Constructs a new <code>Blob</code>.
     * List of retrieved blobs
     * @alias module:model/Blob
     * @param officeId {String} Owning office of object.
     * @param id {String} 
     */
    constructor(officeId, id) { 
        
        Blob.initialize(this, officeId, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, officeId, id) { 
        obj['office-id'] = officeId;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Blob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blob} obj Optional instance to populate.
     * @return {module:model/Blob} The populated <code>Blob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Blob();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('media-type-id')) {
                obj['media-type-id'] = ApiClient.convertToType(data['media-type-id'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['Blob']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Blob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Blob</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Blob.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['media-type-id'] && !(typeof data['media-type-id'] === 'string' || data['media-type-id'] instanceof String)) {
            throw new Error("Expected the field `media-type-id` to be a primitive type in the JSON string but got " + data['media-type-id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['value'])) {
            throw new Error("Expected the field `value` to be an array in the JSON data but got " + data['value']);
        }

        return true;
    }


}

Blob.RequiredProperties = ["office-id", "id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Blob.prototype['office-id'] = undefined;

/**
 * @member {String} id
 */
Blob.prototype['id'] = undefined;

/**
 * @member {String} description
 */
Blob.prototype['description'] = undefined;

/**
 * @member {String} media-type-id
 */
Blob.prototype['media-type-id'] = undefined;

/**
 * @member {Array.<Blob>} value
 */
Blob.prototype['value'] = undefined;






export default Blob;

