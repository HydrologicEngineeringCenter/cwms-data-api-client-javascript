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
 * The VirtualRatingAllOf model module.
 * @module model/VirtualRatingAllOf
 * @version 3.0
 */
class VirtualRatingAllOf {
    /**
     * Constructs a new <code>VirtualRatingAllOf</code>.
     * @alias module:model/VirtualRatingAllOf
     */
    constructor() { 
        
        VirtualRatingAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VirtualRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualRatingAllOf} obj Optional instance to populate.
     * @return {module:model/VirtualRatingAllOf} The populated <code>VirtualRatingAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualRatingAllOf();

            if (data.hasOwnProperty('source-ratings')) {
                obj['source-ratings'] = ApiClient.convertToType(data['source-ratings'], [Object]);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VirtualRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VirtualRatingAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['source-ratings'])) {
            throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
        }
        // ensure the json data is a string
        if (data['connections'] && !(typeof data['connections'] === 'string' || data['connections'] instanceof String)) {
            throw new Error("Expected the field `connections` to be a primitive type in the JSON string but got " + data['connections']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} source-ratings
 */
VirtualRatingAllOf.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
VirtualRatingAllOf.prototype['connections'] = undefined;






export default VirtualRatingAllOf;

