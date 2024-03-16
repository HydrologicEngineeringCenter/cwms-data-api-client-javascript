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
 * The Office model module.
 * @module model/Office
 * @version 1.4.0
 */
class Office {
    /**
     * Constructs a new <code>Office</code>.
     * A representation of a CWMS office
     * @alias module:model/Office
     */
    constructor() { 
        
        Office.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Office} obj Optional instance to populate.
     * @return {module:model/Office} The populated <code>Office</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Office();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('longName')) {
                obj['longName'] = ApiClient.convertToType(data['longName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('reportsTo')) {
                obj['reportsTo'] = ApiClient.convertToType(data['reportsTo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Office</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Office</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
            throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['reportsTo'] && !(typeof data['reportsTo'] === 'string' || data['reportsTo'] instanceof String)) {
            throw new Error("Expected the field `reportsTo` to be a primitive type in the JSON string but got " + data['reportsTo']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
Office.prototype['name'] = undefined;

/**
 * @member {String} longName
 */
Office.prototype['longName'] = undefined;

/**
 * @member {module:model/Office.TypeEnum} type
 */
Office.prototype['type'] = undefined;

/**
 * Reference to another office, like a division, that this office reports to.
 * @member {String} reportsTo
 */
Office.prototype['reportsTo'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Office['TypeEnum'] = {

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",

    /**
     * value: "corps headquarters"
     * @const
     */
    "corps headquarters": "corps headquarters",

    /**
     * value: "division headquarters"
     * @const
     */
    "division headquarters": "division headquarters",

    /**
     * value: "division regional"
     * @const
     */
    "division regional": "division regional",

    /**
     * value: "district"
     * @const
     */
    "district": "district",

    /**
     * value: "filed operating activity"
     * @const
     */
    "filed operating activity": "filed operating activity"
};



export default Office;

