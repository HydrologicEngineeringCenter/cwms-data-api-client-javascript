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
 * The SeasonalValueBean model module.
 * @module model/SeasonalValueBean
 * @version 3.0
 */
class SeasonalValueBean {
    /**
     * Constructs a new <code>SeasonalValueBean</code>.
     * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
     * @alias module:model/SeasonalValueBean
     */
    constructor() { 
        
        SeasonalValueBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SeasonalValueBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SeasonalValueBean} obj Optional instance to populate.
     * @return {module:model/SeasonalValueBean} The populated <code>SeasonalValueBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SeasonalValueBean();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('offset-months')) {
                obj['offset-months'] = ApiClient.convertToType(data['offset-months'], 'Number');
            }
            if (data.hasOwnProperty('offset-minutes')) {
                obj['offset-minutes'] = ApiClient.convertToType(data['offset-minutes'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SeasonalValueBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SeasonalValueBean</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} value
 */
SeasonalValueBean.prototype['value'] = undefined;

/**
 * @member {Number} offset-months
 */
SeasonalValueBean.prototype['offset-months'] = undefined;

/**
 * @member {Number} offset-minutes
 */
SeasonalValueBean.prototype['offset-minutes'] = undefined;






export default SeasonalValueBean;

