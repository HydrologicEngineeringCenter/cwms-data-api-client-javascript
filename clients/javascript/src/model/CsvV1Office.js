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

/**
 * The CsvV1Office model module.
 * @module model/CsvV1Office
 * @version 3.0
 */
class CsvV1Office {
    /**
     * Constructs a new <code>CsvV1Office</code>.
     * Single Office or List of Offices in comma separated format
     * @alias module:model/CsvV1Office
     */
    constructor() { 
        
        CsvV1Office.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CsvV1Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CsvV1Office} obj Optional instance to populate.
     * @return {module:model/CsvV1Office} The populated <code>CsvV1Office</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CsvV1Office();

            if (data.hasOwnProperty('Office')) {
                obj['Office'] = ApiClient.convertToType(data['Office'], 'String');
            }
            if (data.hasOwnProperty('longName')) {
                obj['longName'] = ApiClient.convertToType(data['longName'], 'String');
            }
            if (data.hasOwnProperty('officeType')) {
                obj['officeType'] = ApiClient.convertToType(data['officeType'], 'String');
            }
            if (data.hasOwnProperty('reportsToOffice')) {
                obj['reportsToOffice'] = ApiClient.convertToType(data['reportsToOffice'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CsvV1Office</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CsvV1Office</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Office'] && !(typeof data['Office'] === 'string' || data['Office'] instanceof String)) {
            throw new Error("Expected the field `Office` to be a primitive type in the JSON string but got " + data['Office']);
        }
        // ensure the json data is a string
        if (data['longName'] && !(typeof data['longName'] === 'string' || data['longName'] instanceof String)) {
            throw new Error("Expected the field `longName` to be a primitive type in the JSON string but got " + data['longName']);
        }
        // ensure the json data is a string
        if (data['officeType'] && !(typeof data['officeType'] === 'string' || data['officeType'] instanceof String)) {
            throw new Error("Expected the field `officeType` to be a primitive type in the JSON string but got " + data['officeType']);
        }
        // ensure the json data is a string
        if (data['reportsToOffice'] && !(typeof data['reportsToOffice'] === 'string' || data['reportsToOffice'] instanceof String)) {
            throw new Error("Expected the field `reportsToOffice` to be a primitive type in the JSON string but got " + data['reportsToOffice']);
        }

        return true;
    }


}



/**
 * @member {String} Office
 */
CsvV1Office.prototype['Office'] = undefined;

/**
 * @member {String} longName
 */
CsvV1Office.prototype['longName'] = undefined;

/**
 * @member {String} officeType
 */
CsvV1Office.prototype['officeType'] = undefined;

/**
 * @member {String} reportsToOffice
 */
CsvV1Office.prototype['reportsToOffice'] = undefined;






export default CsvV1Office;

