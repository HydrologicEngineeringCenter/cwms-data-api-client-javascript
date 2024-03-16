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
* @version 1.4.0
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
     * Delete cwmsData clobs with clobId
     * Delete clob
     * @param {String} clobId Specifies the id of the clob to be deleted
     * @param {String} office Specifies the office of the clob.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData clobs with clobId
     * Delete clob
     * @param {String} clobId Specifies the id of the clob to be deleted
     * @param {String} office Specifies the office of the clob.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCwmsDataClobsWithClobId(clobId, office) {
      return this.deleteCwmsDataClobsWithClobIdWithHttpInfo(clobId, office)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData clobs
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 20.
     * @param {Boolean} [includeValues] Do you want the value associated with this particular clob (default: false)
     * @param {String} [like] Posix <a href=\"regexp.html\">regular expression</a> matching against the id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Clobs} and HTTP response
     */
    getCwmsDataClobsWithHttpInfo(opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData clobs
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param {String} opts.page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} opts.pageSize How many entries per page returned. Default 20.
     * @param {Boolean} opts.includeValues Do you want the value associated with this particular clob (default: false)
     * @param {String} opts.like Posix <a href=\"regexp.html\">regular expression</a> matching against the id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Clobs}
     */
    getCwmsDataClobs(opts) {
      return this.getCwmsDataClobsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData clobs with clobId
     * @param {String} clobId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office.
     * @param {String} [clobId2] If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id's that contain '/' or other special characters.  Because of abuse even properly escaped '/' in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains '/' you can't specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \"ignored\" is suggested.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Clob} and HTTP response
     */
    getCwmsDataClobsWithClobIdWithHttpInfo(clobId, opts) {
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
        'office': opts['office'],
        'clob-id': opts['clobId2']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2', 'text/plain'];
      let returnType = Clob;
      return this.apiClient.callApi(
        '/cwms-data/clobs/{clob-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData clobs with clobId
     * @param {String} clobId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office.
     * @param {String} opts.clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id's that contain '/' or other special characters.  Because of abuse even properly escaped '/' in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains '/' you can't specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \"ignored\" is suggested.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Clob}
     */
    getCwmsDataClobsWithClobId(clobId, opts) {
      return this.getCwmsDataClobsWithClobIdWithHttpInfo(clobId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch cwmsData clobs with clobId
     * Update clob
     * @param {String} clobId Specifies the id of the clob to be updated
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [ignoreNulls] If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Patch cwmsData clobs with clobId
     * Update clob
     * @param {String} clobId Specifies the id of the clob to be updated
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    patchCwmsDataClobsWithClobId(clobId, clob, opts) {
      return this.patchCwmsDataClobsWithClobIdWithHttpInfo(clobId, clob, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData clobs
     * Create new Clob
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postCwmsDataClobsWithHttpInfo(clob, opts) {
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData clobs
     * Create new Clob
     * @param {module:model/Clob} clob 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failIfExists Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCwmsDataClobs(clob, opts) {
      return this.postCwmsDataClobsWithHttpInfo(clob, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
