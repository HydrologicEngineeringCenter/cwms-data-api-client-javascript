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
import DatabaseLoadMethod from '../model/DatabaseLoadMethod';
import DeleteMethod from '../model/DeleteMethod';
import RatingMetadataList from '../model/RatingMetadataList';
import RatingSpec from '../model/RatingSpec';
import RatingSpecs from '../model/RatingSpecs';
import RatingTemplate from '../model/RatingTemplate';
import RatingTemplates from '../model/RatingTemplates';

/**
* Ratings service.
* @module api/RatingsApi
* @version 3.0
*/
export default class RatingsApi {

    /**
    * Constructs a new RatingsApi. 
    * @alias module:api/RatingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteCwmsDataRatingsSpecWithRatingId operation.
     * @callback module:api/RatingsApi~deleteCwmsDataRatingsSpecWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData ratings spec with ratingId
     * Deletes requested rating specification
     * @param {String} ratingId The rating-spec-id of the ratings data to be deleted.
     * @param {String} office Specifies the owning office of the ratings to be deleted.
     * @param {module:model/DeleteMethod} method Specifies the delete method used.
     * @param {module:api/RatingsApi~deleteCwmsDataRatingsSpecWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, callback) {
      let postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataRatingsSpecWithRatingId");
      }

      let pathParams = {
        'rating-id': ratingId
      };
      let queryParams = {
        'office': office,
        'method': method
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
        '/cwms-data/ratings/spec/{rating-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCwmsDataRatingsTemplateWithTemplateId operation.
     * @callback module:api/RatingsApi~deleteCwmsDataRatingsTemplateWithTemplateIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData ratings template with templateId
     * Deletes requested rating specification
     * @param {String} templateId The rating-template-id of the ratings data to be deleted.
     * @param {String} office Specifies the owning office of the ratings to be deleted.
     * @param {module:model/DeleteMethod} method Specifies the delete method used.
     * @param {module:api/RatingsApi~deleteCwmsDataRatingsTemplateWithTemplateIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataRatingsTemplateWithTemplateId");
      }

      let pathParams = {
        'template-id': templateId
      };
      let queryParams = {
        'office': office,
        'method': method
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
        '/cwms-data/ratings/template/{template-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~deleteCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete cwmsData ratings with ratingId
     * @param {String} ratingId The rating-id of the effective dates to be deleted. 
     * @param {String} office Specifies the office of the ratings to be deleted.
     * @param {String} begin The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {String} end The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
     * @param {Object} opts Optional parameters
     * @param {String} [timezone] This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
     * @param {module:api/RatingsApi~deleteCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'begin' is set
      if (begin === undefined || begin === null) {
        throw new Error("Missing the required parameter 'begin' when calling deleteCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'end' is set
      if (end === undefined || end === null) {
        throw new Error("Missing the required parameter 'end' when calling deleteCwmsDataRatingsWithRatingId");
      }

      let pathParams = {
        'rating-id': ratingId
      };
      let queryParams = {
        'office': office,
        'begin': begin,
        'end': end,
        'timezone': opts['timezone']
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
        '/cwms-data/ratings/{rating-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatings operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings
     * @param {Object} opts Optional parameters
     * @param {String} [name] Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names.
     * @param {String} [office] Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [at] Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param {String} [format] Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default)
     * @param {module:api/RatingsApi~getCwmsDataRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getCwmsDataRatings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'at': opts['at'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml', 'text/tab-separated-values', 'text/csv'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/cwms-data/ratings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsMetadata operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingMetadataList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings metadata
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [ratingIdMask] RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param {String} [start] Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used.
     * @param {String} [end] Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used.
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 50.
     * @param {module:api/RatingsApi~getCwmsDataRatingsMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingMetadataList}
     */
    getCwmsDataRatingsMetadata(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'rating-id-mask': opts['ratingIdMask'],
        'start': opts['start'],
        'end': opts['end'],
        'timezone': opts['timezone'],
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
      let returnType = RatingMetadataList;
      return this.apiClient.callApi(
        '/cwms-data/ratings/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsSpec operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsSpecCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingSpecs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings spec
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [ratingIdMask] Posix <a href=\"regexp.html\">regular expression</a>  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/RatingsApi~getCwmsDataRatingsSpecCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingSpecs}
     */
    getCwmsDataRatingsSpec(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'rating-id-mask': opts['ratingIdMask'],
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
      let returnType = RatingSpecs;
      return this.apiClient.callApi(
        '/cwms-data/ratings/spec', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsSpecWithRatingId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsSpecWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingSpec} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings spec with ratingId
     * @param {String} ratingId Specifies the rating-id of the Rating Spec to be included in the response
     * @param {String} office Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {module:api/RatingsApi~getCwmsDataRatingsSpecWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingSpec}
     */
    getCwmsDataRatingsSpecWithRatingId(ratingId, office, callback) {
      let postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling getCwmsDataRatingsSpecWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsSpecWithRatingId");
      }

      let pathParams = {
        'rating-id': ratingId
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
      let accepts = ['application/json', 'application/json;version=2'];
      let returnType = RatingSpec;
      return this.apiClient.callApi(
        '/cwms-data/ratings/spec/{rating-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsTemplate operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RatingTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings template
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {String} [templateIdMask] RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 100.
     * @param {module:api/RatingsApi~getCwmsDataRatingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RatingTemplates}
     */
    getCwmsDataRatingsTemplate(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'template-id-mask': opts['templateIdMask'],
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
      let returnType = RatingTemplates;
      return this.apiClient.callApi(
        '/cwms-data/ratings/template', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsTemplateWithTemplateId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsTemplateWithTemplateIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RatingTemplate>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings template with templateId
     * @param {String} templateId Specifies the template whose data is to be included in the response
     * @param {String} office Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
     * @param {module:api/RatingsApi~getCwmsDataRatingsTemplateWithTemplateIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RatingTemplate>}
     */
    getCwmsDataRatingsTemplateWithTemplateId(templateId, office, callback) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getCwmsDataRatingsTemplateWithTemplateId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsTemplateWithTemplateId");
      }

      let pathParams = {
        'template-id': templateId
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
      let accepts = ['application/json', 'application/json;version=2'];
      let returnType = [RatingTemplate];
      return this.apiClient.callApi(
        '/cwms-data/ratings/template/{template-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~getCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cwmsData ratings with ratingId
     * Returns CWMS Rating Data
     * @param {String} ratingId The rating-id of the effective dates to be retrieve. 
     * @param {String} office Specifies the owning office of the ratingset to be included in the response.
     * @param {Object} opts Optional parameters
     * @param {String} [begin] Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
     * @param {String} [end] Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
     * @param {String} [timezone] Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
     * @param {module:model/DatabaseLoadMethod} [method] Specifies the retrieval method used.  If no method is provided EAGER will be used.
     * @param {module:api/RatingsApi~getCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getCwmsDataRatingsWithRatingId(ratingId, office, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling getCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataRatingsWithRatingId");
      }

      let pathParams = {
        'rating-id': ratingId
      };
      let queryParams = {
        'office': office,
        'begin': opts['begin'],
        'end': opts['end'],
        'timezone': opts['timezone'],
        'method': opts['method']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2', 'application/xml;version=2'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/cwms-data/ratings/{rating-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchCwmsDataRatingsWithRatingId operation.
     * @callback module:api/RatingsApi~patchCwmsDataRatingsWithRatingIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch cwmsData ratings with ratingId
     * Update a RatingSet
     * @param {String} ratingId 
     * @param {Object.<String, Object>} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [storeTemplate] Also store updates to the rating template. Default: true
     * @param {module:api/RatingsApi~patchCwmsDataRatingsWithRatingIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchCwmsDataRatingsWithRatingId(ratingId, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'ratingId' is set
      if (ratingId === undefined || ratingId === null) {
        throw new Error("Missing the required parameter 'ratingId' when calling patchCwmsDataRatingsWithRatingId");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchCwmsDataRatingsWithRatingId");
      }

      let pathParams = {
        'rating-id': ratingId
      };
      let queryParams = {
        'store-template': opts['storeTemplate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/xml;version=2', 'application/json;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/ratings/{rating-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatings operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings
     * Create new RatingSet
     * @param {Object.<String, Object>} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [storeTemplate] Also store updates to the rating template. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postCwmsDataRatings(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCwmsDataRatings");
      }

      let pathParams = {
      };
      let queryParams = {
        'store-template': opts['storeTemplate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/xml;version=2', 'application/json;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/ratings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatingsSpec operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsSpecCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings spec
     * Create new Rating Specification
     * @param {module:model/RatingSpec} ratingSpec 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsSpecCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postCwmsDataRatingsSpec(ratingSpec, opts, callback) {
      opts = opts || {};
      let postBody = ratingSpec;
      // verify the required parameter 'ratingSpec' is set
      if (ratingSpec === undefined || ratingSpec === null) {
        throw new Error("Missing the required parameter 'ratingSpec' when calling postCwmsDataRatingsSpec");
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
      let contentTypes = ['application/xml;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/ratings/spec', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCwmsDataRatingsTemplate operation.
     * @callback module:api/RatingsApi~postCwmsDataRatingsTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post cwmsData ratings template
     * Create new Rating Template
     * @param {module:model/RatingTemplate} ratingTemplate 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @param {module:api/RatingsApi~postCwmsDataRatingsTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postCwmsDataRatingsTemplate(ratingTemplate, opts, callback) {
      opts = opts || {};
      let postBody = ratingTemplate;
      // verify the required parameter 'ratingTemplate' is set
      if (ratingTemplate === undefined || ratingTemplate === null) {
        throw new Error("Missing the required parameter 'ratingTemplate' when calling postCwmsDataRatingsTemplate");
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
      let contentTypes = ['application/xml;version=2'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/ratings/template', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}