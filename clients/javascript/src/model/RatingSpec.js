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
import IndependentRoundingSpec from './IndependentRoundingSpec';

/**
 * The RatingSpec model module.
 * @module model/RatingSpec
 * @version 3.0
 */
class RatingSpec {
    /**
     * Constructs a new <code>RatingSpec</code>.
     * @alias module:model/RatingSpec
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        RatingSpec.initialize(this, officeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, officeId) { 
        obj['office-id'] = officeId;
    }

    /**
     * Constructs a <code>RatingSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatingSpec} obj Optional instance to populate.
     * @return {module:model/RatingSpec} The populated <code>RatingSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RatingSpec();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('rating-id')) {
                obj['rating-id'] = ApiClient.convertToType(data['rating-id'], 'String');
            }
            if (data.hasOwnProperty('template-id')) {
                obj['template-id'] = ApiClient.convertToType(data['template-id'], 'String');
            }
            if (data.hasOwnProperty('location-id')) {
                obj['location-id'] = ApiClient.convertToType(data['location-id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('source-agency')) {
                obj['source-agency'] = ApiClient.convertToType(data['source-agency'], 'String');
            }
            if (data.hasOwnProperty('in-range-method')) {
                obj['in-range-method'] = ApiClient.convertToType(data['in-range-method'], 'String');
            }
            if (data.hasOwnProperty('out-range-low-method')) {
                obj['out-range-low-method'] = ApiClient.convertToType(data['out-range-low-method'], 'String');
            }
            if (data.hasOwnProperty('out-range-high-method')) {
                obj['out-range-high-method'] = ApiClient.convertToType(data['out-range-high-method'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('auto-update')) {
                obj['auto-update'] = ApiClient.convertToType(data['auto-update'], 'Boolean');
            }
            if (data.hasOwnProperty('auto-activate')) {
                obj['auto-activate'] = ApiClient.convertToType(data['auto-activate'], 'Boolean');
            }
            if (data.hasOwnProperty('auto-migrate-extension')) {
                obj['auto-migrate-extension'] = ApiClient.convertToType(data['auto-migrate-extension'], 'Boolean');
            }
            if (data.hasOwnProperty('independent-rounding-specs')) {
                obj['independent-rounding-specs'] = ApiClient.convertToType(data['independent-rounding-specs'], [IndependentRoundingSpec]);
            }
            if (data.hasOwnProperty('dependent-rounding-spec')) {
                obj['dependent-rounding-spec'] = ApiClient.convertToType(data['dependent-rounding-spec'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('effective-dates')) {
                obj['effective-dates'] = ApiClient.convertToType(data['effective-dates'], ['Date']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatingSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatingSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RatingSpec.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['rating-id'] && !(typeof data['rating-id'] === 'string' || data['rating-id'] instanceof String)) {
            throw new Error("Expected the field `rating-id` to be a primitive type in the JSON string but got " + data['rating-id']);
        }
        // ensure the json data is a string
        if (data['template-id'] && !(typeof data['template-id'] === 'string' || data['template-id'] instanceof String)) {
            throw new Error("Expected the field `template-id` to be a primitive type in the JSON string but got " + data['template-id']);
        }
        // ensure the json data is a string
        if (data['location-id'] && !(typeof data['location-id'] === 'string' || data['location-id'] instanceof String)) {
            throw new Error("Expected the field `location-id` to be a primitive type in the JSON string but got " + data['location-id']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['source-agency'] && !(typeof data['source-agency'] === 'string' || data['source-agency'] instanceof String)) {
            throw new Error("Expected the field `source-agency` to be a primitive type in the JSON string but got " + data['source-agency']);
        }
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
        if (data['independent-rounding-specs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['independent-rounding-specs'])) {
                throw new Error("Expected the field `independent-rounding-specs` to be an array in the JSON data but got " + data['independent-rounding-specs']);
            }
            // validate the optional field `independent-rounding-specs` (array)
            for (const item of data['independent-rounding-specs']) {
                IndependentRoundingSpec.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['dependent-rounding-spec'] && !(typeof data['dependent-rounding-spec'] === 'string' || data['dependent-rounding-spec'] instanceof String)) {
            throw new Error("Expected the field `dependent-rounding-spec` to be a primitive type in the JSON string but got " + data['dependent-rounding-spec']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['effective-dates'])) {
            throw new Error("Expected the field `effective-dates` to be an array in the JSON data but got " + data['effective-dates']);
        }

        return true;
    }


}

RatingSpec.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
RatingSpec.prototype['office-id'] = undefined;

/**
 * @member {String} rating-id
 */
RatingSpec.prototype['rating-id'] = undefined;

/**
 * @member {String} template-id
 */
RatingSpec.prototype['template-id'] = undefined;

/**
 * @member {String} location-id
 */
RatingSpec.prototype['location-id'] = undefined;

/**
 * @member {String} version
 */
RatingSpec.prototype['version'] = undefined;

/**
 * @member {String} source-agency
 */
RatingSpec.prototype['source-agency'] = undefined;

/**
 * @member {String} in-range-method
 */
RatingSpec.prototype['in-range-method'] = undefined;

/**
 * @member {String} out-range-low-method
 */
RatingSpec.prototype['out-range-low-method'] = undefined;

/**
 * @member {String} out-range-high-method
 */
RatingSpec.prototype['out-range-high-method'] = undefined;

/**
 * @member {Boolean} active
 */
RatingSpec.prototype['active'] = undefined;

/**
 * @member {Boolean} auto-update
 */
RatingSpec.prototype['auto-update'] = undefined;

/**
 * @member {Boolean} auto-activate
 */
RatingSpec.prototype['auto-activate'] = undefined;

/**
 * @member {Boolean} auto-migrate-extension
 */
RatingSpec.prototype['auto-migrate-extension'] = undefined;

/**
 * @member {Array.<module:model/IndependentRoundingSpec>} independent-rounding-specs
 */
RatingSpec.prototype['independent-rounding-specs'] = undefined;

/**
 * @member {String} dependent-rounding-spec
 */
RatingSpec.prototype['dependent-rounding-spec'] = undefined;

/**
 * @member {String} description
 */
RatingSpec.prototype['description'] = undefined;

/**
 * @member {Array.<Date>} effective-dates
 */
RatingSpec.prototype['effective-dates'] = undefined;






export default RatingSpec;

