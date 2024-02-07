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
 * The County model module.
 * @module model/County
 * @version 3.0
 */
class County {
    /**
     * Constructs a new <code>County</code>.
     * A representation of a county
     * @alias module:model/County
     */
    constructor() { 
        
        County.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>County</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/County} obj Optional instance to populate.
     * @return {module:model/County} The populated <code>County</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new County();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('countyId')) {
                obj['countyId'] = ApiClient.convertToType(data['countyId'], 'String');
            }
            if (data.hasOwnProperty('stateInitial')) {
                obj['stateInitial'] = ApiClient.convertToType(data['stateInitial'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>County</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>County</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['countyId'] && !(typeof data['countyId'] === 'string' || data['countyId'] instanceof String)) {
            throw new Error("Expected the field `countyId` to be a primitive type in the JSON string but got " + data['countyId']);
        }
        // ensure the json data is a string
        if (data['stateInitial'] && !(typeof data['stateInitial'] === 'string' || data['stateInitial'] instanceof String)) {
            throw new Error("Expected the field `stateInitial` to be a primitive type in the JSON string but got " + data['stateInitial']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
County.prototype['name'] = undefined;

/**
 * @member {String} countyId
 */
County.prototype['countyId'] = undefined;

/**
 * @member {String} stateInitial
 */
County.prototype['stateInitial'] = undefined;






export default County;

