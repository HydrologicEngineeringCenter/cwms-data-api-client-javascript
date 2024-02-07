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
import SeasonalValueBean from './SeasonalValueBean';

/**
 * The LocationLevel model module.
 * @module model/LocationLevel
 * @version 3.0
 */
class LocationLevel {
    /**
     * Constructs a new <code>LocationLevel</code>.
     * @alias module:model/LocationLevel
     * @param officeId {String} Owning office of object.
     * @param locationLevelId {String} Name of the location level
     */
    constructor(officeId, locationLevelId) { 
        
        LocationLevel.initialize(this, officeId, locationLevelId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, officeId, locationLevelId) { 
        obj['office-id'] = officeId;
        obj['location-level-id'] = locationLevelId;
    }

    /**
     * Constructs a <code>LocationLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationLevel} obj Optional instance to populate.
     * @return {module:model/LocationLevel} The populated <code>LocationLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationLevel();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('location-level-id')) {
                obj['location-level-id'] = ApiClient.convertToType(data['location-level-id'], 'String');
            }
            if (data.hasOwnProperty('seasonal-time-series-id')) {
                obj['seasonal-time-series-id'] = ApiClient.convertToType(data['seasonal-time-series-id'], 'String');
            }
            if (data.hasOwnProperty('seasonal-values')) {
                obj['seasonal-values'] = ApiClient.convertToType(data['seasonal-values'], [SeasonalValueBean]);
            }
            if (data.hasOwnProperty('specified-level-id')) {
                obj['specified-level-id'] = ApiClient.convertToType(data['specified-level-id'], 'String');
            }
            if (data.hasOwnProperty('parameter-type-id')) {
                obj['parameter-type-id'] = ApiClient.convertToType(data['parameter-type-id'], 'String');
            }
            if (data.hasOwnProperty('parameter-id')) {
                obj['parameter-id'] = ApiClient.convertToType(data['parameter-id'], 'String');
            }
            if (data.hasOwnProperty('constant-value')) {
                obj['constant-value'] = ApiClient.convertToType(data['constant-value'], 'Number');
            }
            if (data.hasOwnProperty('level-units-id')) {
                obj['level-units-id'] = ApiClient.convertToType(data['level-units-id'], 'String');
            }
            if (data.hasOwnProperty('level-date')) {
                obj['level-date'] = ApiClient.convertToType(data['level-date'], 'Date');
            }
            if (data.hasOwnProperty('level-comment')) {
                obj['level-comment'] = ApiClient.convertToType(data['level-comment'], 'String');
            }
            if (data.hasOwnProperty('interval-origin')) {
                obj['interval-origin'] = ApiClient.convertToType(data['interval-origin'], 'Date');
            }
            if (data.hasOwnProperty('interval-months')) {
                obj['interval-months'] = ApiClient.convertToType(data['interval-months'], 'Number');
            }
            if (data.hasOwnProperty('interval-minutes')) {
                obj['interval-minutes'] = ApiClient.convertToType(data['interval-minutes'], 'Number');
            }
            if (data.hasOwnProperty('interpolate-string')) {
                obj['interpolate-string'] = ApiClient.convertToType(data['interpolate-string'], 'String');
            }
            if (data.hasOwnProperty('duration-id')) {
                obj['duration-id'] = ApiClient.convertToType(data['duration-id'], 'String');
            }
            if (data.hasOwnProperty('attribute-value')) {
                obj['attribute-value'] = ApiClient.convertToType(data['attribute-value'], 'Number');
            }
            if (data.hasOwnProperty('attribute-units-id')) {
                obj['attribute-units-id'] = ApiClient.convertToType(data['attribute-units-id'], 'String');
            }
            if (data.hasOwnProperty('attribute-parameter-type-id')) {
                obj['attribute-parameter-type-id'] = ApiClient.convertToType(data['attribute-parameter-type-id'], 'String');
            }
            if (data.hasOwnProperty('attribute-parameter-id')) {
                obj['attribute-parameter-id'] = ApiClient.convertToType(data['attribute-parameter-id'], 'String');
            }
            if (data.hasOwnProperty('attribute-duration-id')) {
                obj['attribute-duration-id'] = ApiClient.convertToType(data['attribute-duration-id'], 'String');
            }
            if (data.hasOwnProperty('attribute-comment')) {
                obj['attribute-comment'] = ApiClient.convertToType(data['attribute-comment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LocationLevel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LocationLevel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LocationLevel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['location-level-id'] && !(typeof data['location-level-id'] === 'string' || data['location-level-id'] instanceof String)) {
            throw new Error("Expected the field `location-level-id` to be a primitive type in the JSON string but got " + data['location-level-id']);
        }
        // ensure the json data is a string
        if (data['seasonal-time-series-id'] && !(typeof data['seasonal-time-series-id'] === 'string' || data['seasonal-time-series-id'] instanceof String)) {
            throw new Error("Expected the field `seasonal-time-series-id` to be a primitive type in the JSON string but got " + data['seasonal-time-series-id']);
        }
        if (data['seasonal-values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['seasonal-values'])) {
                throw new Error("Expected the field `seasonal-values` to be an array in the JSON data but got " + data['seasonal-values']);
            }
            // validate the optional field `seasonal-values` (array)
            for (const item of data['seasonal-values']) {
                SeasonalValueBean.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['specified-level-id'] && !(typeof data['specified-level-id'] === 'string' || data['specified-level-id'] instanceof String)) {
            throw new Error("Expected the field `specified-level-id` to be a primitive type in the JSON string but got " + data['specified-level-id']);
        }
        // ensure the json data is a string
        if (data['parameter-type-id'] && !(typeof data['parameter-type-id'] === 'string' || data['parameter-type-id'] instanceof String)) {
            throw new Error("Expected the field `parameter-type-id` to be a primitive type in the JSON string but got " + data['parameter-type-id']);
        }
        // ensure the json data is a string
        if (data['parameter-id'] && !(typeof data['parameter-id'] === 'string' || data['parameter-id'] instanceof String)) {
            throw new Error("Expected the field `parameter-id` to be a primitive type in the JSON string but got " + data['parameter-id']);
        }
        // ensure the json data is a string
        if (data['level-units-id'] && !(typeof data['level-units-id'] === 'string' || data['level-units-id'] instanceof String)) {
            throw new Error("Expected the field `level-units-id` to be a primitive type in the JSON string but got " + data['level-units-id']);
        }
        // ensure the json data is a string
        if (data['level-comment'] && !(typeof data['level-comment'] === 'string' || data['level-comment'] instanceof String)) {
            throw new Error("Expected the field `level-comment` to be a primitive type in the JSON string but got " + data['level-comment']);
        }
        // ensure the json data is a string
        if (data['interpolate-string'] && !(typeof data['interpolate-string'] === 'string' || data['interpolate-string'] instanceof String)) {
            throw new Error("Expected the field `interpolate-string` to be a primitive type in the JSON string but got " + data['interpolate-string']);
        }
        // ensure the json data is a string
        if (data['duration-id'] && !(typeof data['duration-id'] === 'string' || data['duration-id'] instanceof String)) {
            throw new Error("Expected the field `duration-id` to be a primitive type in the JSON string but got " + data['duration-id']);
        }
        // ensure the json data is a string
        if (data['attribute-units-id'] && !(typeof data['attribute-units-id'] === 'string' || data['attribute-units-id'] instanceof String)) {
            throw new Error("Expected the field `attribute-units-id` to be a primitive type in the JSON string but got " + data['attribute-units-id']);
        }
        // ensure the json data is a string
        if (data['attribute-parameter-type-id'] && !(typeof data['attribute-parameter-type-id'] === 'string' || data['attribute-parameter-type-id'] instanceof String)) {
            throw new Error("Expected the field `attribute-parameter-type-id` to be a primitive type in the JSON string but got " + data['attribute-parameter-type-id']);
        }
        // ensure the json data is a string
        if (data['attribute-parameter-id'] && !(typeof data['attribute-parameter-id'] === 'string' || data['attribute-parameter-id'] instanceof String)) {
            throw new Error("Expected the field `attribute-parameter-id` to be a primitive type in the JSON string but got " + data['attribute-parameter-id']);
        }
        // ensure the json data is a string
        if (data['attribute-duration-id'] && !(typeof data['attribute-duration-id'] === 'string' || data['attribute-duration-id'] instanceof String)) {
            throw new Error("Expected the field `attribute-duration-id` to be a primitive type in the JSON string but got " + data['attribute-duration-id']);
        }
        // ensure the json data is a string
        if (data['attribute-comment'] && !(typeof data['attribute-comment'] === 'string' || data['attribute-comment'] instanceof String)) {
            throw new Error("Expected the field `attribute-comment` to be a primitive type in the JSON string but got " + data['attribute-comment']);
        }

        return true;
    }


}

LocationLevel.RequiredProperties = ["office-id", "location-level-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
LocationLevel.prototype['office-id'] = undefined;

/**
 * Name of the location level
 * @member {String} location-level-id
 */
LocationLevel.prototype['location-level-id'] = undefined;

/**
 * Timeseries ID (e.g. from the times series catalog) to use as the location level. Mutually exclusive with seasonalValues and siParameterUnitsConstantValue
 * @member {String} seasonal-time-series-id
 */
LocationLevel.prototype['seasonal-time-series-id'] = undefined;

/**
 * List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue
 * @member {Array.<module:model/SeasonalValueBean>} seasonal-values
 */
LocationLevel.prototype['seasonal-values'] = undefined;

/**
 * Generic name of this location level. Common names are 'Top of Dam', 'Streambed', 'Bottom of Dam'.
 * @member {String} specified-level-id
 */
LocationLevel.prototype['specified-level-id'] = undefined;

/**
 * To indicate if single or aggregate value
 * @member {module:model/LocationLevel.ParameterTypeIdEnum} parameter-type-id
 */
LocationLevel.prototype['parameter-type-id'] = undefined;

/**
 * Data Type such as Stage, Elevation, or others.
 * @member {String} parameter-id
 */
LocationLevel.prototype['parameter-id'] = undefined;

/**
 * Single value for this location level. Mutually exclusive with seasonableTimeSeriesId and seasonValues.
 * @member {Number} constant-value
 */
LocationLevel.prototype['constant-value'] = undefined;

/**
 * Units the provided levels are in
 * @member {String} level-units-id
 */
LocationLevel.prototype['level-units-id'] = undefined;

/**
 * The date/time at which this location level configuration takes effect.
 * @member {Date} level-date
 */
LocationLevel.prototype['level-date'] = undefined;

/**
 * @member {String} level-comment
 */
LocationLevel.prototype['level-comment'] = undefined;

/**
 * The start point of provided seasonal values
 * @member {Date} interval-origin
 */
LocationLevel.prototype['interval-origin'] = undefined;

/**
 * @member {Number} interval-months
 */
LocationLevel.prototype['interval-months'] = undefined;

/**
 * @member {Number} interval-minutes
 */
LocationLevel.prototype['interval-minutes'] = undefined;

/**
 * Indicating whether or not to interpolate between seasonal values.
 * @member {module:model/LocationLevel.InterpolateStringEnum} interpolate-string
 */
LocationLevel.prototype['interpolate-string'] = undefined;

/**
 * 0 if parameterTypeId is Inst. Otherwise duration indicating the time window of the aggregate value.
 * @member {String} duration-id
 */
LocationLevel.prototype['duration-id'] = undefined;

/**
 * @member {Number} attribute-value
 */
LocationLevel.prototype['attribute-value'] = undefined;

/**
 * @member {String} attribute-units-id
 */
LocationLevel.prototype['attribute-units-id'] = undefined;

/**
 * @member {String} attribute-parameter-type-id
 */
LocationLevel.prototype['attribute-parameter-type-id'] = undefined;

/**
 * @member {String} attribute-parameter-id
 */
LocationLevel.prototype['attribute-parameter-id'] = undefined;

/**
 * @member {String} attribute-duration-id
 */
LocationLevel.prototype['attribute-duration-id'] = undefined;

/**
 * @member {String} attribute-comment
 */
LocationLevel.prototype['attribute-comment'] = undefined;





/**
 * Allowed values for the <code>parameter-type-id</code> property.
 * @enum {String}
 * @readonly
 */
LocationLevel['ParameterTypeIdEnum'] = {

    /**
     * value: "Inst"
     * @const
     */
    "Inst": "Inst",

    /**
     * value: "Ave"
     * @const
     */
    "Ave": "Ave",

    /**
     * value: "Min"
     * @const
     */
    "Min": "Min",

    /**
     * value: "Max"
     * @const
     */
    "Max": "Max",

    /**
     * value: "Total"
     * @const
     */
    "Total": "Total"
};


/**
 * Allowed values for the <code>interpolate-string</code> property.
 * @enum {String}
 * @readonly
 */
LocationLevel['InterpolateStringEnum'] = {

    /**
     * value: "T"
     * @const
     */
    "T": "T",

    /**
     * value: "F"
     * @const
     */
    "F": "F"
};



export default LocationLevel;

