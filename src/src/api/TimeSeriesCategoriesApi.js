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
import TimeSeriesCategory from '../model/TimeSeriesCategory';

/**
* TimeSeriesCategories service.
* @module api/TimeSeriesCategoriesApi
* @version 1.4.0
*/
export default class TimeSeriesCategoriesApi {

    /**
    * Constructs a new TimeSeriesCategoriesApi. 
    * @alias module:api/TimeSeriesCategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete cwmsData timeseries category with categoryId
     * Deletes requested time series category
     * @param {String} categoryId The time series category to be deleted
     * @param {String} office Specifies the owning office of the time series category to be deleted
     * @param {Object} opts Optional parameters
     * @param {Boolean} [cascadeDelete] Specifies whether to delete any time series groups in this time series category. Default: false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataTimeseriesCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesCategoryWithCategoryId");
      }

      let pathParams = {
        'category-id': categoryId
      };
      let queryParams = {
        'office': office,
        'cascade-delete': opts['cascadeDelete']
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
        '/cwms-data/timeseries/category/{category-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData timeseries category with categoryId
     * Deletes requested time series category
     * @param {String} categoryId The time series category to be deleted
     * @param {String} office Specifies the owning office of the time series category to be deleted
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascadeDelete Specifies whether to delete any time series groups in this time series category. Default: false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, opts) {
      return this.deleteCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData timeseries category
     * Returns CWMS timeseries category Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TimeSeriesCategory>} and HTTP response
     */
    getCwmsDataTimeseriesCategoryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let accepts = ['application/json'];
      let returnType = [TimeSeriesCategory];
      return this.apiClient.callApi(
        '/cwms-data/timeseries/category', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData timeseries category
     * Returns CWMS timeseries category Data
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TimeSeriesCategory>}
     */
    getCwmsDataTimeseriesCategory(opts) {
      return this.getCwmsDataTimeseriesCategoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData timeseries category with categoryId
     * Retrieves requested timeseries category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries category whose data is to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TimeSeriesCategory} and HTTP response
     */
    getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataTimeseriesCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataTimeseriesCategoryWithCategoryId");
      }

      let pathParams = {
        'category-id': categoryId
      };
      let queryParams = {
        'office': office
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TimeSeriesCategory;
      return this.apiClient.callApi(
        '/cwms-data/timeseries/category/{category-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData timeseries category with categoryId
     * Retrieves requested timeseries category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries category whose data is to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeSeriesCategory}
     */
    getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office) {
      return this.getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData timeseries category
     * Create new TimeSeriesCategory
     * @param {module:model/TimeSeriesCategory} timeSeriesCategory 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, opts) {
      opts = opts || {};
      let postBody = timeSeriesCategory;
      // verify the required parameter 'timeSeriesCategory' is set
      if (timeSeriesCategory === undefined || timeSeriesCategory === null) {
        throw new Error("Missing the required parameter 'timeSeriesCategory' when calling postCwmsDataTimeseriesCategory");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/timeseries/category', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData timeseries category
     * Create new TimeSeriesCategory
     * @param {module:model/TimeSeriesCategory} timeSeriesCategory 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failIfExists Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCwmsDataTimeseriesCategory(timeSeriesCategory, opts) {
      return this.postCwmsDataTimeseriesCategoryWithHttpInfo(timeSeriesCategory, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
