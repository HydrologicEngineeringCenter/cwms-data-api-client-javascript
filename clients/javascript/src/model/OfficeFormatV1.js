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
import OfficesFMT from './OfficesFMT';

/**
 * The OfficeFormatV1 model module.
 * @module model/OfficeFormatV1
 * @version 3.0
 */
class OfficeFormatV1 {
    /**
     * Constructs a new <code>OfficeFormatV1</code>.
     * @alias module:model/OfficeFormatV1
     */
    constructor() { 
        
        OfficeFormatV1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OfficeFormatV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfficeFormatV1} obj Optional instance to populate.
     * @return {module:model/OfficeFormatV1} The populated <code>OfficeFormatV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfficeFormatV1();

            if (data.hasOwnProperty('offices')) {
                obj['offices'] = OfficesFMT.constructFromObject(data['offices']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OfficeFormatV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OfficeFormatV1</code>.
     */
    static validateJSON(data) {
        // validate the optional field `offices`
        if (data['offices']) { // data not null
          OfficesFMT.validateJSON(data['offices']);
        }

        return true;
    }


}



/**
 * @member {module:model/OfficesFMT} offices
 */
OfficeFormatV1.prototype['offices'] = undefined;






export default OfficeFormatV1;

