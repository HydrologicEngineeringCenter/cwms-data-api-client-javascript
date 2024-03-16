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
import AbstractRatingMetadata from './AbstractRatingMetadata';
import VerticalDatumInfo from './VerticalDatumInfo';

/**
 * The ExpressionRating model module.
 * @module model/ExpressionRating
 * @version 1.4.0
 */
class ExpressionRating {
    /**
     * Constructs a new <code>ExpressionRating</code>.
     * @alias module:model/ExpressionRating
     * @extends module:model/AbstractRatingMetadata
     * @implements module:model/AbstractRatingMetadata
     */
    constructor() { 
        AbstractRatingMetadata.initialize(this);
        ExpressionRating.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpressionRating</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpressionRating} obj Optional instance to populate.
     * @return {module:model/ExpressionRating} The populated <code>ExpressionRating</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpressionRating();
            AbstractRatingMetadata.constructFromObject(data, obj);
            AbstractRatingMetadata.constructFromObject(data, obj);

            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpressionRating</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpressionRating</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['expression'] && !(typeof data['expression'] === 'string' || data['expression'] instanceof String)) {
            throw new Error("Expected the field `expression` to be a primitive type in the JSON string but got " + data['expression']);
        }

        return true;
    }


}



/**
 * @member {String} expression
 */
ExpressionRating.prototype['expression'] = undefined;


// Implement AbstractRatingMetadata interface:
/**
 * @member {String} office-id
 */
AbstractRatingMetadata.prototype['office-id'] = undefined;
/**
 * @member {String} rating-spec-id
 */
AbstractRatingMetadata.prototype['rating-spec-id'] = undefined;
/**
 * @member {String} units-id
 */
AbstractRatingMetadata.prototype['units-id'] = undefined;
/**
 * @member {Boolean} active
 */
AbstractRatingMetadata.prototype['active'] = undefined;
/**
 * @member {Date} effective-date
 */
AbstractRatingMetadata.prototype['effective-date'] = undefined;
/**
 * @member {Date} create-date
 */
AbstractRatingMetadata.prototype['create-date'] = undefined;
/**
 * @member {Date} transition-date
 */
AbstractRatingMetadata.prototype['transition-date'] = undefined;
/**
 * @member {String} description
 */
AbstractRatingMetadata.prototype['description'] = undefined;
/**
 * @member {module:model/VerticalDatumInfo} vertical-datum-info
 */
AbstractRatingMetadata.prototype['vertical-datum-info'] = undefined;
/**
 * @member {String} rating-type
 */
AbstractRatingMetadata.prototype['rating-type'] = undefined;
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




export default ExpressionRating;

