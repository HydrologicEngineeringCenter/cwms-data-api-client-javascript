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
* Enum class DatabaseLoadMethod.
* @enum {}
* @readonly
*/
export default class DatabaseLoadMethod {
    
        /**
         * value: "EAGER"
         * @const
         */
        "EAGER" = "EAGER";

    
        /**
         * value: "LAZY"
         * @const
         */
        "LAZY" = "LAZY";

    
        /**
         * value: "REFERENCE"
         * @const
         */
        "REFERENCE" = "REFERENCE";

    

    /**
    * Returns a <code>DatabaseLoadMethod</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DatabaseLoadMethod} The enum <code>DatabaseLoadMethod</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

