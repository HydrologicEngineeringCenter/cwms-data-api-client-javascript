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
 * The PoolNameType model module.
 * @module model/PoolNameType
 * @version 1.4.0
 */
class PoolNameType {
    /**
     * Constructs a new <code>PoolNameType</code>.
     * @alias module:model/PoolNameType
     */
    constructor() { 
        
        PoolNameType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolNameType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolNameType} obj Optional instance to populate.
     * @return {module:model/PoolNameType} The populated <code>PoolNameType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolNameType();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'String');
            }
            if (data.hasOwnProperty('poolName')) {
                obj['poolName'] = ApiClient.convertToType(data['poolName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolNameType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolNameType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['officeId'] && !(typeof data['officeId'] === 'string' || data['officeId'] instanceof String)) {
            throw new Error("Expected the field `officeId` to be a primitive type in the JSON string but got " + data['officeId']);
        }
        // ensure the json data is a string
        if (data['poolName'] && !(typeof data['poolName'] === 'string' || data['poolName'] instanceof String)) {
            throw new Error("Expected the field `poolName` to be a primitive type in the JSON string but got " + data['poolName']);
        }

        return true;
    }


}



/**
 * @member {String} officeId
 */
PoolNameType.prototype['officeId'] = undefined;

/**
 * @member {String} poolName
 */
PoolNameType.prototype['poolName'] = undefined;






export default PoolNameType;

