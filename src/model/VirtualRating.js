/**
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AbstractRatingMetadata from './AbstractRatingMetadata';
import VirtualRatingAllOf from './VirtualRatingAllOf';

/**
 * The VirtualRating model module.
 * @module model/VirtualRating
 * @version 2.5
 */
class VirtualRating {
    /**
     * Constructs a new <code>VirtualRating</code>.
     * @alias module:model/VirtualRating
     * @extends module:model/AbstractRatingMetadata
     * @implements module:model/AbstractRatingMetadata
     * @implements module:model/VirtualRatingAllOf
     */
    constructor() { 
        AbstractRatingMetadata.initialize(this);VirtualRatingAllOf.initialize(this);
        VirtualRating.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VirtualRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VirtualRating} obj Optional instance to populate.
     * @return {module:model/VirtualRating} The populated <code>VirtualRating</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VirtualRating();
            AbstractRatingMetadata.constructFromObject(data, obj);
            AbstractRatingMetadata.constructFromObject(data, obj);
            VirtualRatingAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('source-ratings')) {
                obj['source-ratings'] = ApiClient.convertToType(data['source-ratings'], [Object]);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VirtualRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VirtualRating</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['source-ratings'])) {
            throw new Error("Expected the field `source-ratings` to be an array in the JSON data but got " + data['source-ratings']);
        }
        // ensure the json data is a string
        if (data['connections'] && !(typeof data['connections'] === 'string' || data['connections'] instanceof String)) {
            throw new Error("Expected the field `connections` to be a primitive type in the JSON string but got " + data['connections']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} source-ratings
 */
VirtualRating.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
VirtualRating.prototype['connections'] = undefined;


// Implement AbstractRatingMetadata interface:
/**
 * @member {Array.<Object>} source-ratings
 */
AbstractRatingMetadata.prototype['source-ratings'] = undefined;
/**
 * @member {Array.<String>} conditions
 */
AbstractRatingMetadata.prototype['conditions'] = undefined;
/**
 * @member {Array.<String>} evaluations
 */
AbstractRatingMetadata.prototype['evaluations'] = undefined;
/**
 * @member {String} connections
 */
AbstractRatingMetadata.prototype['connections'] = undefined;
/**
 * @member {String} expression
 */
AbstractRatingMetadata.prototype['expression'] = undefined;
/**
 * @member {String} in-range-method
 */
AbstractRatingMetadata.prototype['in-range-method'] = undefined;
/**
 * @member {String} out-range-low-method
 */
AbstractRatingMetadata.prototype['out-range-low-method'] = undefined;
/**
 * @member {String} out-range-high-method
 */
AbstractRatingMetadata.prototype['out-range-high-method'] = undefined;
// Implement VirtualRatingAllOf interface:
/**
 * @member {Array.<Object>} source-ratings
 */
VirtualRatingAllOf.prototype['source-ratings'] = undefined;
/**
 * @member {String} connections
 */
VirtualRatingAllOf.prototype['connections'] = undefined;




export default VirtualRating;

