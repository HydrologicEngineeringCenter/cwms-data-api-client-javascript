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


import ApiClient from "../ApiClient";
import CdaError from '../model/CdaError';
import Clob from '../model/Clob';
import Clobs from '../model/Clobs';

/**
* Clob service.
* @module api/ClobApi
* @version 3.0
*/
export default class ClobApi {

    /**
    * Constructs a new ClobApi. 
    * @alias module:api/ClobApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteCwmsDataClobsWithClobId operation.
     * @callback module:api/ClobApi~deleteCwmsDataClobsWithClobIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData clobs with clobId
     * Delete clob
     * @param {String} clobId Specifies the id of the clob to be deleted
     * @param {String} office Specifies the office of the clob.
     * @param {module:api/ClobApi~deleteCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCwmsDataClobsWithClobId(clobId, office, callback) {
      let postBody = null;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling deleteCwmsDataClobsWithClobId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataClobsWithClobId");
      }

      let pathParams = {
        'clob-id': clobId
      };
      let queryParams = {
        'office': office
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/clobs/{clob-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataClobs operation.
     * @callback module:api/ClobApi~getCwmsDataClobsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Clobs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData clobs
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 20.
     * @param {Boolean} [includeValues] Do you want the value associated with this particular clob (default: false)
     * @param {String} [like] Posix <a href=\"regexp.html\">regular expression</a> matching against the id
     * @param {module:api/ClobApi~getCwmsDataClobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Clobs}
     */
    getCwmsDataClobs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'page': opts['page'],
        'page-size': opts['pageSize'],
        'include-values': opts['includeValues'],
        'like': opts['like']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2', 'application/xml;version=2'];
      let returnType = Clobs;
      return this.apiClient.callApi(
        '/cwms-data/clobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataClobsWithClobId operation.
     * @callback module:api/ClobApi~getCwmsDataClobsWithClobIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Clob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData clobs with clobId
     * @param {String} clobId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office.
     * @param {module:api/ClobApi~getCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Clob}
     */
    getCwmsDataClobsWithClobId(clobId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling getCwmsDataClobsWithClobId");
      }

      let pathParams = {
        'clob-id': clobId
      };
      let queryParams = {
        'office': opts['office']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2'];
      let returnType = Clob;
      return this.apiClient.callApi(
        '/cwms-data/clobs/{clob-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCwmsDataClobsWithClobId operation.
     * @callback module:api/ClobApi~patchCwmsDataClobsWithClobIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData clobs with clobId
     * Update clob
     * @param {String} clobId Specifies the id of the clob to be updated
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [ignoreNulls] If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     * @param {module:api/ClobApi~patchCwmsDataClobsWithClobIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchCwmsDataClobsWithClobId(clobId, clob, opts, callback) {
      opts = opts || {};
      let postBody = clob;
      // verify the required parameter 'clobId' is set
      if (clobId === undefined || clobId === null) {
        throw new Error("Missing the required parameter 'clobId' when calling patchCwmsDataClobsWithClobId");
      }
      // verify the required parameter 'clob' is set
      if (clob === undefined || clob === null) {
        throw new Error("Missing the required parameter 'clob' when calling patchCwmsDataClobsWithClobId");
      }

      let pathParams = {
        'clob-id': clobId
      };
      let queryParams = {
        'ignore-nulls': opts['ignoreNulls']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/clobs/{clob-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCwmsDataClobs operation.
     * @callback module:api/ClobApi~postCwmsDataClobsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData clobs
     * Create new Clob
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/ClobApi~postCwmsDataClobsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postCwmsDataClobs(clob, opts, callback) {
      opts = opts || {};
      let postBody = clob;
      // verify the required parameter 'clob' is set
      if (clob === undefined || clob === null) {
        throw new Error("Missing the required parameter 'clob' when calling postCwmsDataClobs");
      }

      let pathParams = {
      };
      let queryParams = {
        'fail-if-exists': opts['failIfExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/json;version=2', 'application/xml;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/clobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}