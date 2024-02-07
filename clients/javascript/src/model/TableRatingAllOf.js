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
 * The TableRatingAllOf model module.
 * @module model/TableRatingAllOf
 * @version 3.0
 */
class TableRatingAllOf {
    /**
     * Constructs a new <code>TableRatingAllOf</code>.
     * @alias module:model/TableRatingAllOf
     */
    constructor() { 
        
        TableRatingAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TableRatingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableRatingAllOf} obj Optional instance to populate.
     * @return {module:model/TableRatingAllOf} The populated <code>TableRatingAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableRatingAllOf();

            if (data.hasOwnProperty('in-range-method')) {
                obj['in-range-method'] = ApiClient.convertToType(data['in-range-method'], 'String');
            }
            if (data.hasOwnProperty('out-range-low-method')) {
                obj['out-range-low-method'] = ApiClient.convertToType(data['out-range-low-method'], 'String');
            }
            if (data.hasOwnProperty('out-range-high-method')) {
                obj['out-range-high-method'] = ApiClient.convertToType(data['out-range-high-method'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TableRatingAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TableRatingAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['in-range-method'] && !(typeof data['in-range-method'] === 'string' || data['in-range-method'] instanceof String)) {
            throw new Error("Expected the field `in-range-method` to be a primitive type in the JSON string but got " + data['in-range-method']);
        }
        // ensure the json data is a string
        if (data['out-range-low-method'] && !(typeof data['out-range-low-method'] === 'string' || data['out-range-low-method'] instanceof String)) {
            throw new Error("Expected the field `out-range-low-method` to be a primitive type in the JSON string but got " + data['out-range-low-method']);
        }
        // ensure the json data is a string
        if (data['out-range-high-method'] && !(typeof data['out-range-high-method'] === 'string' || data['out-range-high-method'] instanceof String)) {
            throw new Error("Expected the field `out-range-high-method` to be a primitive type in the JSON string but got " + data['out-range-high-method']);
        }

        return true;
    }


}



/**
 * @member {String} in-range-method
 */
TableRatingAllOf.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
TableRatingAllOf.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
TableRatingAllOf.prototype['out-range-high-method'] = undefined;






export default TableRatingAllOf;
