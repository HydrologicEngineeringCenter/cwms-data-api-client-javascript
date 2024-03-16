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
import Location from '../model/Location';

/**
* Locations service.
* @module api/LocationsApi
* @version 1.4.0
*/
export default class LocationsApi {

    /**
    * Constructs a new LocationsApi. 
    * @alias module:api/LocationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete cwmsData locations with locationId
     * Delete CWMS Location
     * @param {String} locationId 
     * @param {Object} opts Optional parameters
     * @param {String} [office] Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling deleteCwmsDataLocationsWithLocationId");
      }

      let pathParams = {
        'location-id': locationId
      };
      let queryParams = {
        'office': opts['office']
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
        '/cwms-data/locations/{location-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete cwmsData locations with locationId
     * Delete CWMS Location
     * @param {String} locationId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCwmsDataLocationsWithLocationId(locationId, opts) {
      return this.deleteCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData locations
     * Returns CWMS Location Data
     * @param {Object} opts Optional parameters
     * @param {String} [names] Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param {String} [office] Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} [datum] Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} [format] Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getCwmsDataLocationsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'names': opts['names'],
        'office': opts['office'],
        'unit': opts['unit'],
        'datum': opts['datum'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/tab-separated-values', 'text/csv', 'application/xml', 'application/vnd.opengis.waterml+xml', 'application/geo+json', ''];
      let returnType = Object;
      return this.apiClient.callApi(
        '/cwms-data/locations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData locations
     * Returns CWMS Location Data
     * @param {Object} opts Optional parameters
     * @param {String} opts.names Specifies the name(s) of the location(s) whose data is to be included in the response
     * @param {String} opts.office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {String} opts.unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @param {String} opts.datum Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
     * @param {String} opts.format Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getCwmsDataLocations(opts) {
      return this.getCwmsDataLocationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get cwmsData locations with locationId
     * Returns CWMS Location Data
     * @param {String} locationId 
     * @param {String} office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {Object} opts Optional parameters
     * @param {String} [unit] Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Location} and HTTP response
     */
    getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling getCwmsDataLocationsWithLocationId");
      }
      // verify the required parameter 'office' is set
      if (office === undefined || office === null) {
        throw new Error("Missing the required parameter 'office' when calling getCwmsDataLocationsWithLocationId");
      }

      let pathParams = {
        'location-id': locationId
      };
      let queryParams = {
        'office': office,
        'unit': opts['unit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json;version=2', 'application/xml;version=2'];
      let returnType = Location;
      return this.apiClient.callApi(
        '/cwms-data/locations/{location-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get cwmsData locations with locationId
     * Returns CWMS Location Data
     * @param {String} locationId 
     * @param {String} office Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.unit Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Location}
     */
    getCwmsDataLocationsWithLocationId(locationId, office, opts) {
      return this.getCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, office, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch cwmsData locations with locationId
     * Update CWMS Location
     * @param {String} locationId 
     * @param {module:model/Location} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location) {
      let postBody = location;
      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw new Error("Missing the required parameter 'locationId' when calling patchCwmsDataLocationsWithLocationId");
      }
      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling patchCwmsDataLocationsWithLocationId");
      }

      let pathParams = {
        'location-id': locationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'CwmsAAACacAuth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/locations/{location-id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Patch cwmsData locations with locationId
     * Update CWMS Location
     * @param {String} locationId 
     * @param {module:model/Location} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    patchCwmsDataLocationsWithLocationId(locationId, location) {
      return this.patchCwmsDataLocationsWithLocationIdWithHttpInfo(locationId, location)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post cwmsData locations
     * Create new CWMS Location
     * @param {module:model/Location} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postCwmsDataLocationsWithHttpInfo(location) {
      let postBody = location;
      // verify the required parameter 'location' is set
      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling postCwmsDataLocations");
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
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/cwms-data/locations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post cwmsData locations
     * Create new CWMS Location
     * @param {module:model/Location} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCwmsDataLocations(location) {
      return this.postCwmsDataLocationsWithHttpInfo(location)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}