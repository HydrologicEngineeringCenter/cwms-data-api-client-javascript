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


import ApiClient from "../ApiClient";
import CsvV1Office from '../model/CsvV1Office';
import Office from '../model/Office';
import OfficeFormatV1 from '../model/OfficeFormatV1';
import RadarError from '../model/RadarError';
import TabV1Office from '../model/TabV1Office';

/**
* Offices service.
* @module api/OfficesApi
* @version 2.5
*/
export default class OfficesApi {

    /**
    * Constructs a new OfficesApi. 
    * @alias module:api/OfficesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCwmsDataOffices operation.
     * @callback module:api/OfficesApi~getCwmsDataOfficesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OfficeFormatV1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData offices
     * @param {Object} opts Optional parameters
     * @param {String} [format] (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
     * @param {module:api/OfficesApi~getCwmsDataOfficesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OfficeFormatV1}
     */
    getCwmsDataOffices(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', '', 'application/json;version=2', 'text/tab-separated-values', 'text/csv', 'application/xml'];
      let returnType = OfficeFormatV1;
      return this.apiClient.callApi(
        '/cwms-data/offices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
