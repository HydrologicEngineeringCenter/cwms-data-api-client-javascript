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
 * The TransitionalRatingAllOf model module.
 * @module model/TransitionalRatingAllOf
 * @version 3.0
 */
class TransitionalRatingAllOf {
    /**
     * Constructs a new <code>TransitionalRatingAllOf</code>.
     * @alias module:model/TransitionalRatingAllOf
     */
    constructor() { 
        
        TransitionalRatingAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransitionalRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitionalRatingAllOf} obj Optional instance to populate.
     * @return {module:model/TransitionalRatingAllOf} The populated <code>TransitionalRatingAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransitionalRatingAllOf();

            if (data.hasOwnProperty('source-ratings')) {
                obj['source-ratings'] = ApiClient.convertToType(data['source-ratings'], ['String']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], ['String']);
            }
            if (data.hasOwnProperty('evaluations')) {
                obj['evaluations'] = ApiClient.convertToType(data['evaluations'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransitionalRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransitionalRatingAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['source-ratings'])) {
            throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['conditions'])) {
            throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['evaluations'])) {
            throw new Error("Expected the field `evaluations` to be an array in the JSON data but got " + data['evaluations']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} source-ratings
 */
TransitionalRatingAllOf.prototype['source-ratings'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
TransitionalRatingAllOf.prototype['conditions'] = undefined;

/**
 * @member {Array.<String>} evaluations
 */
TransitionalRatingAllOf.prototype['evaluations'] = undefined;






export default TransitionalRatingAllOf;

