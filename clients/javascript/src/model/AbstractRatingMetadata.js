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
import ExpressionRating from './ExpressionRating';
import TableRating from './TableRating';
import TransitionalRating from './TransitionalRating';
import UsgsStreamRating from './UsgsStreamRating';
import VerticalDatumInfo from './VerticalDatumInfo';
import VirtualRating from './VirtualRating';

/**
 * The AbstractRatingMetadata model module.
 * @module model/AbstractRatingMetadata
 * @version 3.0
 */
class AbstractRatingMetadata {
    /**
     * Constructs a new <code>AbstractRatingMetadata</code>.
     * Rating Metadata
     * @alias module:model/AbstractRatingMetadata
     * @param {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} instance The actual instance to initialize AbstractRatingMetadata.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "TableRating") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TableRating.validateJSON(instance); // throw an exception if no match
                // create TableRating from JS object
                this.actualInstance = TableRating.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TableRating
            errorMessages.push("Failed to construct TableRating: " + err)
        }

        try {
            if (typeof instance === "TransitionalRating") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TransitionalRating.validateJSON(instance); // throw an exception if no match
                // create TransitionalRating from JS object
                this.actualInstance = TransitionalRating.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransitionalRating
            errorMessages.push("Failed to construct TransitionalRating: " + err)
        }

        try {
            if (typeof instance === "VirtualRating") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                VirtualRating.validateJSON(instance); // throw an exception if no match
                // create VirtualRating from JS object
                this.actualInstance = VirtualRating.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into VirtualRating
            errorMessages.push("Failed to construct VirtualRating: " + err)
        }

        try {
            if (typeof instance === "ExpressionRating") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                ExpressionRating.validateJSON(instance); // throw an exception if no match
                // create ExpressionRating from JS object
                this.actualInstance = ExpressionRating.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExpressionRating
            errorMessages.push("Failed to construct ExpressionRating: " + err)
        }

        try {
            if (typeof instance === "UsgsStreamRating") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UsgsStreamRating.validateJSON(instance); // throw an exception if no match
                // create UsgsStreamRating from JS object
                this.actualInstance = UsgsStreamRating.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UsgsStreamRating
            errorMessages.push("Failed to construct UsgsStreamRating: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `AbstractRatingMetadata` with oneOf schemas ExpressionRating, TableRating, TransitionalRating, UsgsStreamRating, VirtualRating. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `AbstractRatingMetadata` with oneOf schemas ExpressionRating, TableRating, TransitionalRating, UsgsStreamRating, VirtualRating. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>AbstractRatingMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractRatingMetadata} obj Optional instance to populate.
     * @return {module:model/AbstractRatingMetadata} The populated <code>AbstractRatingMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        return new AbstractRatingMetadata(data);
    }

    /**
     * Gets the actual instance, which can be <code>ExpressionRating</code>, <code>TableRating</code>, <code>TransitionalRating</code>, <code>UsgsStreamRating</code>, <code>VirtualRating</code>.
     * @return {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ExpressionRating</code>, <code>TableRating</code>, <code>TransitionalRating</code>, <code>UsgsStreamRating</code>, <code>VirtualRating</code>.
     * @param {(module:model/ExpressionRating|module:model/TableRating|module:model/TransitionalRating|module:model/UsgsStreamRating|module:model/VirtualRating)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = AbstractRatingMetadata.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of AbstractRatingMetadata from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/AbstractRatingMetadata} An instance of AbstractRatingMetadata.
     */
    static fromJSON = function(json_string){
        return AbstractRatingMetadata.constructFromObject(JSON.parse(json_string));
    }
}

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

/**
 * @member {Array.<Object>} source-ratings
 */
AbstractRatingMetadata.prototype['source-ratings'] = undefined;

/**
 * @member {String} connections
 */
AbstractRatingMetadata.prototype['connections'] = undefined;

/**
 * @member {String} expression
 */
AbstractRatingMetadata.prototype['expression'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
AbstractRatingMetadata.prototype['conditions'] = undefined;

/**
 * @member {Array.<String>} evaluations
 */
AbstractRatingMetadata.prototype['evaluations'] = undefined;


AbstractRatingMetadata.OneOf = ["ExpressionRating", "TableRating", "TransitionalRating", "UsgsStreamRating", "VirtualRating"];

export default AbstractRatingMetadata;
