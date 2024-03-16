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
import DeleteMethod from '../model/DeleteMethod';
import TimeSeriesIdentifierDescriptor from '../model/TimeSeriesIdentifierDescriptor';
import TimeSeriesIdentifierDescriptors from '../model/TimeSeriesIdentifierDescriptors';

/**
* TimeSeriesIdentifier service.
* @module api/TimeSeriesIdentifierApi
* @version 1.4.0
*/
export default class TimeSeriesIdentifierApi {

    /**
    * Constructs a new TimeSeriesIdentifierApi. 
    * @alias module:api/TimeSeriesIdentifierApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * Deletes requested timeseries identifier
     * @param {String} timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param {String} office Specifies the owning office of the timeseries to be deleted.
     * @param {module:model/DeleteMethod} method Specifies the delete method used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method) {
      let postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'method' is set
      if (method === undefined || method === null) {
        throw new Error("Missing the required parameter 'method' when calling deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }

      let pathParams = {
        'timeseries-id': timeseriesId
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
        '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * Deletes requested timeseries identifier
     * @param {String} timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param {String} office Specifies the owning office of the timeseries to be deleted.
     * @param {module:model/DeleteMethod} method Specifies the delete method used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method) {
      return this.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office, method)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData timeseries identifierDescriptor
     * Returns CWMS timeseries identifier descriptorData
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param {String} [timeseriesIdRegex] A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param {String} [page] This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} [pageSize] How many entries per page returned. Default 500.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TimeSeriesIdentifierDescriptors} and HTTP response
     */
    getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'office': opts['office'],
        'timeseries-id-regex': opts['timeseriesIdRegex'],
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
      let returnType = TimeSeriesIdentifierDescriptors;
      return this.apiClient.callApi(
        '/cwms-data/timeseries/identifier-descriptor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData timeseries identifierDescriptor
     * Returns CWMS timeseries identifier descriptorData
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param {String} opts.timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param {String} opts.page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
     * @param {Number} opts.pageSize How many entries per page returned. Default 500.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeSeriesIdentifierDescriptors}
     */
    getCwmsDataTimeseriesIdentifierDescriptor(opts) {
      return this.getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * Retrieves requested timeseries identifier descriptor
     * @param {String} timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries identifier to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TimeSeriesIdentifierDescriptor} and HTTP response
     */
    getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office) {
      let postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }

      let pathParams = {
        'timeseries-id': timeseriesId
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
      let returnType = TimeSeriesIdentifierDescriptor;
      return this.apiClient.callApi(
        '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * Retrieves requested timeseries identifier descriptor
     * @param {String} timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param {String} office Specifies the owning office of the timeseries identifier to be included in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeSeriesIdentifierDescriptor}
     */
    getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office) {
      return this.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, office)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param {String} timeseriesId 
     * @param {String} timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param {String} office Specifies the owning office of the timeseries identifier to be updated
     * @param {Object} opts Optional parameters
     * @param {Number} [intervalOffset] The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param {Number} [snapForward] The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param {Number} [snapBackward] The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param {Boolean} [active] 'True' or 'true' if the time series is active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'timeseriesId' is set
      if (timeseriesId === undefined || timeseriesId === null) {
        throw new Error("Missing the required parameter 'timeseriesId' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'timeseriesId2' is set
      if (timeseriesId2 === undefined || timeseriesId2 === null) {
        throw new Error("Missing the required parameter 'timeseriesId2' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId");
      }

      let pathParams = {
        'timeseries-id': timeseriesId
      };
      let queryParams = {
        'timeseries-id': timeseriesId2,
        'office': office,
        'interval-offset': opts['intervalOffset'],
        'snap-forward': opts['snapForward'],
        'snap-backward': opts['snapBackward'],
        'active': opts['active']
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
        '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param {String} timeseriesId 
     * @param {String} timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param {String} office Specifies the owning office of the timeseries identifier to be updated
     * @param {Object} opts Optional parameters
     * @param {Number} opts.intervalOffset The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param {Number} opts.snapForward The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param {Number} opts.snapBackward The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param {Boolean} opts.active 'True' or 'true' if the time series is active
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, opts) {
      return this.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(timeseriesId, timeseriesId2, office, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData timeseries identifierDescriptor
     * Create new TimeSeriesIdentifierDescriptor
     * @param {module:model/TimeSeriesIdentifierDescriptor} timeSeriesIdentifierDescriptor 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [failIfExists] Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, opts) {
      opts = opts || {};
      let postBody = timeSeriesIdentifierDescriptor;
      // verify the required parameter 'timeSeriesIdentifierDescriptor' is set
      if (timeSeriesIdentifierDescriptor === undefined || timeSeriesIdentifierDescriptor === null) {
        throw new Error("Missing the required parameter 'timeSeriesIdentifierDescriptor' when calling postCwmsDataTimeseriesIdentifierDescriptor");
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
        '/cwms-data/timeseries/identifier-descriptor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData timeseries identifierDescriptor
     * Create new TimeSeriesIdentifierDescriptor
     * @param {module:model/TimeSeriesIdentifierDescriptor} timeSeriesIdentifierDescriptor 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failIfExists Create will fail if provided ID already exists. Default: true
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, opts) {
      return this.postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(timeSeriesIdentifierDescriptor, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
