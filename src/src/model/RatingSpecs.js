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
import RatingSpec from './RatingSpec';

/**
 * The RatingSpecs model module.
 * @module model/RatingSpecs
 * @version 1.4.0
 */
class RatingSpecs {
    /**
     * Constructs a new <code>RatingSpecs</code>.
     * @alias module:model/RatingSpecs
     */
    constructor() { 
        
        RatingSpecs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RatingSpecs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingSpecs} obj Optional instance to populate.
     * @return {module:model/RatingSpecs} The populated <code>RatingSpecs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RatingSpecs();

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('specs')) {
                obj['specs'] = ApiClient.convertToType(data['specs'], [RatingSpec]);
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
     * Validates the JSON data with respect to <code>RatingSpecs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingSpecs</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['page'] && !(typeof data['page'] === 'string' || data['page'] instanceof String)) {
            throw new Error("Expected the field `page` to be a primitive type in the JSON string but got " + data['page']);
        }
        if (data['specs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['specs'])) {
                throw new Error("Expected the field `specs` to be an array in the JSON data but got " + data['specs']);
            }
            // validate the optional field `specs` (array)
            for (const item of data['specs']) {
                RatingSpec.validateJSON(item);
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
RatingSpecs.prototype['page'] = undefined;

/**
 * The total number of records retrieved; null or not present if not supported or unknown
 * @member {Number} total
 */
RatingSpecs.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/RatingSpec>} specs
 */
RatingSpecs.prototype['specs'] = undefined;

/**
 * The cursor to the next page of data; null if there is no more data
 * @member {String} next-page
 */
RatingSpecs.prototype['next-page'] = undefined;

/**
 * The number of records fetched per-page; this may be larger than the number of records actually retrieved
 * @member {Number} page-size
 */
RatingSpecs.prototype['page-size'] = undefined;






export default RatingSpecs;
