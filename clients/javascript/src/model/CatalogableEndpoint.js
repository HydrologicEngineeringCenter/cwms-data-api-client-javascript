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
* Enum class CatalogableEndpoint.
* @enum {}
* @readonly
*/
export default class CatalogableEndpoint {
    
        /**
         * value: "TIMESERIES"
         * @const
         */
        "TIMESERIES" = "TIMESERIES";

    
        /**
         * value: "LOCATIONS"
         * @const
         */
        "LOCATIONS" = "LOCATIONS";

    

    /**
    * Returns a <code>CatalogableEndpoint</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CatalogableEndpoint} The enum <code>CatalogableEndpoint</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

