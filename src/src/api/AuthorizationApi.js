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
import ApiKey from '../model/ApiKey';
import CdaError from '../model/CdaError';

/**
* Authorization service.
* @module api/AuthorizationApi
* @version 1.4.0
*/
export default class AuthorizationApi {

    /**
    * Constructs a new AuthorizationApi. 
    * @alias module:api/AuthorizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete cwmsData auth keys with keyName
     * Delete API key for a user
     * @param {String} keyName 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiKey} [apiKey] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiKey} and HTTP response
     */
    deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, opts) {
      opts = opts || {};
      let postBody = opts['apiKey'];
      // verify the required parameter 'keyName' is set
      if (keyName === undefined || keyName === null) {
        throw new Error("Missing the required parameter 'keyName' when calling deleteCwmsDataAuthKeysWithKeyName");
      }

      let pathParams = {
        'key-name': keyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiKey;
      return this.apiClient.callApi(
        '/cwms-data/auth/keys/{key-name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData auth keys with keyName
     * Delete API key for a user
     * @param {String} keyName 
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiKey} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiKey}
     */
    deleteCwmsDataAuthKeysWithKeyName(keyName, opts) {
      return this.deleteCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData auth keys
     * View all keys for the current user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ApiKey>} and HTTP response
     */
    getCwmsDataAuthKeysWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ApiKey];
      return this.apiClient.callApi(
        '/cwms-data/auth/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData auth keys
     * View all keys for the current user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ApiKey>}
     */
    getCwmsDataAuthKeys() {
      return this.getCwmsDataAuthKeysWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData auth keys with keyName
     * View specific key
     * @param {String} keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiKey} and HTTP response
     */
    getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName) {
      let postBody = null;
      // verify the required parameter 'keyName' is set
      if (keyName === undefined || keyName === null) {
        throw new Error("Missing the required parameter 'keyName' when calling getCwmsDataAuthKeysWithKeyName");
      }

      let pathParams = {
        'key-name': keyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiKey;
      return this.apiClient.callApi(
        '/cwms-data/auth/keys/{key-name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData auth keys with keyName
     * View specific key
     * @param {String} keyName Name of the specific key to get more information for. NOTE: Case-sensitive.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiKey}
     */
    getCwmsDataAuthKeysWithKeyName(keyName) {
      return this.getCwmsDataAuthKeysWithKeyNameWithHttpInfo(keyName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData auth keys
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiKey} [apiKey] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiKey} and HTTP response
     */
    postCwmsDataAuthKeysWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['apiKey'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiKey;
      return this.apiClient.callApi(
        '/cwms-data/auth/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData auth keys
     * Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiKey} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiKey}
     */
    postCwmsDataAuthKeys(opts) {
      return this.postCwmsDataAuthKeysWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
