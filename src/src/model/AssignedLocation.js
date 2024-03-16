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
 * The AssignedLocation model module.
 * @module model/AssignedLocation
 * @version 1.4.0
 */
class AssignedLocation {
    /**
     * Constructs a new <code>AssignedLocation</code>.
     * @alias module:model/AssignedLocation
     */
    constructor() { 
        
        AssignedLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssignedLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignedLocation} obj Optional instance to populate.
     * @return {module:model/AssignedLocation} The populated <code>AssignedLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignedLocation();

            if (data.hasOwnProperty('locationId')) {
                obj['locationId'] = ApiClient.convertToType(data['locationId'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'String');
            }
            if (data.hasOwnProperty('aliasId')) {
                obj['aliasId'] = ApiClient.convertToType(data['aliasId'], 'String');
            }
            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], 'Number');
            }
            if (data.hasOwnProperty('refLocationId')) {
                obj['refLocationId'] = ApiClient.convertToType(data['refLocationId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignedLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignedLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['locationId'] && !(typeof data['locationId'] === 'string' || data['locationId'] instanceof String)) {
            throw new Error("Expected the field `locationId` to be a primitive type in the JSON string but got " + data['locationId']);
        }
        // ensure the json data is a string
        if (data['officeId'] && !(typeof data['officeId'] === 'string' || data['officeId'] instanceof String)) {
            throw new Error("Expected the field `officeId` to be a primitive type in the JSON string but got " + data['officeId']);
        }
        // ensure the json data is a string
        if (data['aliasId'] && !(typeof data['aliasId'] === 'string' || data['aliasId'] instanceof String)) {
            throw new Error("Expected the field `aliasId` to be a primitive type in the JSON string but got " + data['aliasId']);
        }
        // ensure the json data is a string
        if (data['refLocationId'] && !(typeof data['refLocationId'] === 'string' || data['refLocationId'] instanceof String)) {
            throw new Error("Expected the field `refLocationId` to be a primitive type in the JSON string but got " + data['refLocationId']);
        }

        return true;
    }


}



/**
 * @member {String} locationId
 */
AssignedLocation.prototype['locationId'] = undefined;

/**
 * @member {String} officeId
 */
AssignedLocation.prototype['officeId'] = undefined;

/**
 * @member {String} aliasId
 */
AssignedLocation.prototype['aliasId'] = undefined;

/**
 * @member {Number} attribute
 */
AssignedLocation.prototype['attribute'] = undefined;

/**
 * @member {String} refLocationId
 */
AssignedLocation.prototype['refLocationId'] = undefined;






export default AssignedLocation;
