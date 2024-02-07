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
import LocationLevel from './LocationLevel';

/**
 * The LocationLevels model module.
 * @module model/LocationLevels
 * @version 3.0
 */
class LocationLevels {
    /**
     * Constructs a new <code>LocationLevels</code>.
     * @alias module:model/LocationLevels
     */
    constructor() { 
        
        LocationLevels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationLevels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationLevels} obj Optional instance to populate.
     * @return {module:model/LocationLevels} The populated <code>LocationLevels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationLevels();

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], [LocationLevel]);
            }
            if (data.hasOwnProperty('next-page')) {
                obj['next-page'] = ApiClient.convertToType(data['next-page'], 'String');
            }
            if (data.hasOwnProperty('page-size')) {
                obj['page-size'] = ApiClient.convertToType(data['page-size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationLevels</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationLevels</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
            throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
        }
        if (data['levels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['levels'])) {
                throw new Error("Expected the field `levels` to be an array in the JSON data but got " + data['levels']);
            }
            // validate the optional field `levels` (array)
            for (const item of data['levels']) {
                LocationLevel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next-page'] && !(typeof data['next-page'] === 'string' || data['next-page'] instanceof String)) {
            throw new Error("Expected the field `next-page` to be a primitive type in the JSON string but got " + data['next-page']);
        }

        return true;
    }


}



/**
 * The cursor to the current page of data
 * @member {String} page
 */
LocationLevels.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
LocationLevels.prototype['total'] = undefined;

/**
 * List of retrieved location levels
 * @member {Array.<module:model/LocationLevel>} levels
 */
LocationLevels.prototype['levels'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
LocationLevels.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
LocationLevels.prototype['page-size'] = undefined;






export default LocationLevels;
