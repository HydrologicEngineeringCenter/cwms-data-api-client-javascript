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
import StreamLocation from './StreamLocation';
import StreamReach from './StreamReach';

/**
 * The Stream model module.
 * @module model/Stream
 * @version 1.4.0
 */
class Stream {
    /**
     * Constructs a new <code>Stream</code>.
     * @alias module:model/Stream
     * @param officeId {String} Owning office of object.
     */
    constructor(officeId) { 
        
        Stream.initialize(this, officeId);
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
     * Constructs a <code>Stream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stream} obj Optional instance to populate.
     * @return {module:model/Stream} The populated <code>Stream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stream();

            if (data.hasOwnProperty('office-id')) {
                obj['office-id'] = ApiClient.convertToType(data['office-id'], 'String');
            }
            if (data.hasOwnProperty('stream-name')) {
                obj['stream-name'] = ApiClient.convertToType(data['stream-name'], 'String');
            }
            if (data.hasOwnProperty('tributaries')) {
                obj['tributaries'] = ApiClient.convertToType(data['tributaries'], [Stream]);
            }
            if (data.hasOwnProperty('stream-reaches')) {
                obj['stream-reaches'] = ApiClient.convertToType(data['stream-reaches'], [StreamReach]);
            }
            if (data.hasOwnProperty('diverting-stream-id')) {
                obj['diverting-stream-id'] = ApiClient.convertToType(data['diverting-stream-id'], 'String');
            }
            if (data.hasOwnProperty('receiving-stream-id')) {
                obj['receiving-stream-id'] = ApiClient.convertToType(data['receiving-stream-id'], 'String');
            }
            if (data.hasOwnProperty('confluence-bank')) {
                obj['confluence-bank'] = ApiClient.convertToType(data['confluence-bank'], 'String');
            }
            if (data.hasOwnProperty('diversion-bank')) {
                obj['diversion-bank'] = ApiClient.convertToType(data['diversion-bank'], 'String');
            }
            if (data.hasOwnProperty('stream-length')) {
                obj['stream-length'] = ApiClient.convertToType(data['stream-length'], 'Number');
            }
            if (data.hasOwnProperty('confluence-station')) {
                obj['confluence-station'] = ApiClient.convertToType(data['confluence-station'], 'Number');
            }
            if (data.hasOwnProperty('diversion-station')) {
                obj['diversion-station'] = ApiClient.convertToType(data['diversion-station'], 'Number');
            }
            if (data.hasOwnProperty('stream-locations')) {
                obj['stream-locations'] = ApiClient.convertToType(data['stream-locations'], [StreamLocation]);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('average-slope')) {
                obj['average-slope'] = ApiClient.convertToType(data['average-slope'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stream</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stream</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Stream.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['office-id'] && !(typeof data['office-id'] === 'string' || data['office-id'] instanceof String)) {
            throw new Error("Expected the field `office-id` to be a primitive type in the JSON string but got " + data['office-id']);
        }
        // ensure the json data is a string
        if (data['stream-name'] && !(typeof data['stream-name'] === 'string' || data['stream-name'] instanceof String)) {
            throw new Error("Expected the field `stream-name` to be a primitive type in the JSON string but got " + data['stream-name']);
        }
        if (data['tributaries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tributaries'])) {
                throw new Error("Expected the field `tributaries` to be an array in the JSON data but got " + data['tributaries']);
            }
            // validate the optional field `tributaries` (array)
            for (const item of data['tributaries']) {
                Stream.validateJSON(item);
            };
        }
        if (data['stream-reaches']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stream-reaches'])) {
                throw new Error("Expected the field `stream-reaches` to be an array in the JSON data but got " + data['stream-reaches']);
            }
            // validate the optional field `stream-reaches` (array)
            for (const item of data['stream-reaches']) {
                StreamReach.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['diverting-stream-id'] && !(typeof data['diverting-stream-id'] === 'string' || data['diverting-stream-id'] instanceof String)) {
            throw new Error("Expected the field `diverting-stream-id` to be a primitive type in the JSON string but got " + data['diverting-stream-id']);
        }
        // ensure the json data is a string
        if (data['receiving-stream-id'] && !(typeof data['receiving-stream-id'] === 'string' || data['receiving-stream-id'] instanceof String)) {
            throw new Error("Expected the field `receiving-stream-id` to be a primitive type in the JSON string but got " + data['receiving-stream-id']);
        }
        // ensure the json data is a string
        if (data['confluence-bank'] && !(typeof data['confluence-bank'] === 'string' || data['confluence-bank'] instanceof String)) {
            throw new Error("Expected the field `confluence-bank` to be a primitive type in the JSON string but got " + data['confluence-bank']);
        }
        // ensure the json data is a string
        if (data['diversion-bank'] && !(typeof data['diversion-bank'] === 'string' || data['diversion-bank'] instanceof String)) {
            throw new Error("Expected the field `diversion-bank` to be a primitive type in the JSON string but got " + data['diversion-bank']);
        }
        if (data['stream-locations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stream-locations'])) {
                throw new Error("Expected the field `stream-locations` to be an array in the JSON data but got " + data['stream-locations']);
            }
            // validate the optional field `stream-locations` (array)
            for (const item of data['stream-locations']) {
                StreamLocation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}

Stream.RequiredProperties = ["office-id"];

/**
 * Owning office of object.
 * @member {String} office-id
 */
Stream.prototype['office-id'] = undefined;

/**
 * @member {String} stream-name
 */
Stream.prototype['stream-name'] = undefined;

/**
 * @member {Array.<module:model/Stream>} tributaries
 */
Stream.prototype['tributaries'] = undefined;

/**
 * @member {Array.<module:model/StreamReach>} stream-reaches
 */
Stream.prototype['stream-reaches'] = undefined;

/**
 * @member {String} diverting-stream-id
 */
Stream.prototype['diverting-stream-id'] = undefined;

/**
 * @member {String} receiving-stream-id
 */
Stream.prototype['receiving-stream-id'] = undefined;

/**
 * @member {String} confluence-bank
 */
Stream.prototype['confluence-bank'] = undefined;

/**
 * @member {String} diversion-bank
 */
Stream.prototype['diversion-bank'] = undefined;

/**
 * @member {Number} stream-length
 */
Stream.prototype['stream-length'] = undefined;

/**
 * @member {Number} confluence-station
 */
Stream.prototype['confluence-station'] = undefined;

/**
 * @member {Number} diversion-station
 */
Stream.prototype['diversion-station'] = undefined;

/**
 * @member {Array.<module:model/StreamLocation>} stream-locations
 */
Stream.prototype['stream-locations'] = undefined;

/**
 * @member {String} comment
 */
Stream.prototype['comment'] = undefined;

/**
 * @member {Number} average-slope
 */
Stream.prototype['average-slope'] = undefined;






export default Stream;

