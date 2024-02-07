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
* Enum class DeleteMethod.
* @enum {}
* @readonly
*/
export default class DeleteMethod {
    
        /**
         * value: "DELETE_ALL"
         * @const
         */
        "ALL" = "DELETE_ALL";

    
        /**
         * value: "DELETE_KEY"
         * @const
         */
        "KEY" = "DELETE_KEY";

    
        /**
         * value: "DELETE_DATA"
         * @const
         */
        "DATA" = "DELETE_DATA";

    

    /**
    * Returns a <code>DeleteMethod</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeleteMethod} The enum <code>DeleteMethod</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

