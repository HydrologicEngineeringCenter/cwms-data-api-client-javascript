"use strict";
/* tslint:disable */
/* eslint-disable */
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
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class LocationsApi extends runtime.BaseAPI {
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     */
    deleteCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['locationId'] == null) {
                throw new runtime.RequiredError('locationId', 'Required parameter "locationId" was null or undefined when calling deleteCwmsDataLocationsWithLocationId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     */
    deleteCwmsDataLocationsWithLocationId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns CWMS Location Data.  The Catalog end-point is also capable of retrieving lists of locations and can filter on additional fields.
     * Get cwmsData locations
     */
    getCwmsDataLocationsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['names'] != null) {
                queryParameters['names'] = requestParameters['names'];
            }
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            if (requestParameters['datum'] != null) {
                queryParameters['datum'] = requestParameters['datum'];
            }
            if (requestParameters['format'] != null) {
                queryParameters['format'] = requestParameters['format'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/locations`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.LocationFromJSON));
        });
    }
    /**
     * Returns CWMS Location Data.  The Catalog end-point is also capable of retrieving lists of locations and can filter on additional fields.
     * Get cwmsData locations
     */
    getCwmsDataLocations(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataLocationsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     */
    getCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['locationId'] == null) {
                throw new runtime.RequiredError('locationId', 'Required parameter "locationId" was null or undefined when calling getCwmsDataLocationsWithLocationId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataLocationsWithLocationId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['unit'] != null) {
                queryParameters['unit'] = requestParameters['unit'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.LocationFromJSON)(jsonValue));
        });
    }
    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     */
    getCwmsDataLocationsWithLocationId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     */
    patchCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['locationId'] == null) {
                throw new runtime.RequiredError('locationId', 'Required parameter "locationId" was null or undefined when calling patchCwmsDataLocationsWithLocationId().');
            }
            if (requestParameters['location'] == null) {
                throw new runtime.RequiredError('location', 'Required parameter "location" was null or undefined when calling patchCwmsDataLocationsWithLocationId().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/xml';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.LocationToJSON)(requestParameters['location']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     */
    patchCwmsDataLocationsWithLocationId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     */
    postCwmsDataLocationsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['location'] == null) {
                throw new runtime.RequiredError('location', 'Required parameter "location" was null or undefined when calling postCwmsDataLocations().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/locations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.LocationToJSON)(requestParameters['location']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new CWMS Location
     * Post cwmsData locations
     */
    postCwmsDataLocations(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataLocationsRaw(requestParameters, initOverrides);
        });
    }
}
exports.LocationsApi = LocationsApi;
