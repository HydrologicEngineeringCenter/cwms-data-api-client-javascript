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
import Pool from '../model/Pool';
import Pools from '../model/Pools';

/**
* Pools service.
* @module api/PoolsApi
* @version 3.0
*/
export default class PoolsApi {

    /**
    * Constructs a new PoolsApi. 
    * @alias module:api/PoolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCwmsDataPools operation.
     * @callback module:api/PoolsApi~getCwmsDataPoolsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pools} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData pools
     * Returns Pools Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
     * @param {String} [idMask] Project Id mask. Default value:*
     * @param {String} [nameMask] Name mask. Default value:*
     * @param {String} [bottomMask] Bottom level mask. Default value:*
     * @param {String} [topMask] Top level mask. Default value:*
     * @param {String} [includeExplicit] Specifies if the results should include explicit Pools. Default value:false
     * @param {String} [includeImplicit] Specifies if the results should include implicit Pools. Default value:true
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/PoolsApi~getCwmsDataPoolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pools}
     */
    getCwmsDataPools(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'id-mask': opts['idMask'],
        'name-mask': opts['nameMask'],
        'bottom-mask': opts['bottomMask'],
        'top-mask': opts['topMask'],
        'include-explicit': opts['includeExplicit'],
        'include-implicit': opts['includeImplicit'],
        'page': opts['page'],
        'page-size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2'];
      let returnType = Pools;
      return this.apiClient.callApi(
        '/cwms-data/pools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataPoolsWithPoolId operation.
     * @callback module:api/PoolsApi~getCwmsDataPoolsWithPoolIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData pools with poolId
     * Retrieves requested Pool
     * @param {String} poolId Specifies the pool whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the Pool whose data is to be included in the response.
     * @param {String} projectId Specifies the project-id of the Pool whose data is to be included in the response.
     * @param {Object} opts Optional parameters
     * @param {String} [bottomMask] Bottom level mask. Default value:*
     * @param {String} [topMask] Top level mask. Default value:*
     * @param {String} [includeExplicit] Specifies if the results should include explicit Pools. Default value:false
     * @param {String} [includeImplicit] Specifies if the results should include implicit Pools. Default value:true
     * @param {module:api/PoolsApi~getCwmsDataPoolsWithPoolIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pool}
     */
    getCwmsDataPoolsWithPoolId(poolId, office, projectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling getCwmsDataPoolsWithPoolId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataPoolsWithPoolId");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getCwmsDataPoolsWithPoolId");
      }

      let pathParams = {
        'pool-id': poolId
      };
      let queryParams = {
        'office': office,
        'project-id': projectId,
        'bottom-mask': opts['bottomMask'],
        'top-mask': opts['topMask'],
        'include-explicit': opts['includeExplicit'],
        'include-implicit': opts['includeImplicit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2'];
      let returnType = Pool;
      return this.apiClient.callApi(
        '/cwms-data/pools/{pool-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}