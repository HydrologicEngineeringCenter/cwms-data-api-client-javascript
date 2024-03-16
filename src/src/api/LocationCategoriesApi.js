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
import LocationCategory from '../model/LocationCategory';

/**
* LocationCategories service.
* @module api/LocationCategoriesApi
* @version 1.4.0
*/
export default class LocationCategoriesApi {

    /**
    * Constructs a new LocationCategoriesApi. 
    * @alias module:api/LocationCategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete cwmsData location category with categoryId
     * Deletes requested location category
     * @param {String} categoryId The location category to be deleted
     * @param {String} office Specifies the owning office of the location category to be deleted
     * @param {Object} opts Optional parameters
     * @param {Boolean} [cascadeDelete] Specifies whether to delete any location groups in this location category. Default: false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCwmsDataLocationCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataLocationCategoryWithCategoryId");
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
        '/cwms-data/location/category/{category-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData location category with categoryId
     * Deletes requested location category
     * @param {String} categoryId The location category to be deleted
     * @param {String} office Specifies the owning office of the location category to be deleted
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, opts) {
      return this.deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData location category
     * Returns CWMS Location Category Data
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LocationCategory>} and HTTP response
     */
    getCwmsDataLocationCategoryWithHttpInfo(opts) {
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
      let returnType = [LocationCategory];
      return this.apiClient.callApi(
        '/cwms-data/location/category', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData location category
     * Returns CWMS Location Category Data
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LocationCategory>}
     */
    getCwmsDataLocationCategory(opts) {
      return this.getCwmsDataLocationCategoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData location category with categoryId
     * Retrieves requested Location Category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the Location Category whose data is to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LocationCategory} and HTTP response
     */
    getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office) {
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getCwmsDataLocationCategoryWithCategoryId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLocationCategoryWithCategoryId");
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
      let returnType = LocationCategory;
      return this.apiClient.callApi(
        '/cwms-data/location/category/{category-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData location category with categoryId
     * Retrieves requested Location Category
     * @param {String} categoryId Specifies the Category whose data is to be included in the response.
     * @param {String} office Specifies the owning office of the Location Category whose data is to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LocationCategory}
     */
    getCwmsDataLocationCategoryWithCategoryId(categoryId, office) {
      return this.getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(categoryId, office)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData location category
     * Create new LocationCategory
     * @param {module:model/LocationCategory} locationCategory 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postCwmsDataLocationCategoryWithHttpInfo(locationCategory) {
      let postBody = locationCategory;
      // verify the required parameter 'locationCategory' is set
      if (locationCategory === undefined || locationCategory === null) {
        throw new Error("Missing the required parameter 'locationCategory' when calling postCwmsDataLocationCategory");
      }

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
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/location/category', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData location category
     * Create new LocationCategory
     * @param {module:model/LocationCategory} locationCategory 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCwmsDataLocationCategory(locationCategory) {
      return this.postCwmsDataLocationCategoryWithHttpInfo(locationCategory)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
