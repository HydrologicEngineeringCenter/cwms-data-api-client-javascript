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


import * as runtime from '../runtime';
import type {
  CdaError,
  Location,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    LocationFromJSON,
    LocationToJSON,
} from '../models/index';

export interface DeleteCwmsDataLocationsWithLocationIdRequest {
    locationId: string;
    office?: string;
}

export interface GetCwmsDataLocationsRequest {
    names?: string;
    office?: string;
    unit?: string;
    datum?: string;
    format?: string;
}

export interface GetCwmsDataLocationsWithLocationIdRequest {
    locationId: string;
    office: string;
    unit?: string;
}

export interface PatchCwmsDataLocationsWithLocationIdRequest {
    locationId: string;
    location: Location;
}

export interface PostCwmsDataLocationsRequest {
    location: Location;
}

/**
 * 
 */
export class LocationsApi extends runtime.BaseAPI {

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     */
    async deleteCwmsDataLocationsWithLocationIdRaw(requestParameters: DeleteCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['locationId'] == null) {
            throw new runtime.RequiredError(
                'locationId',
                'Required parameter "locationId" was null or undefined when calling deleteCwmsDataLocationsWithLocationId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete CWMS Location
     * Delete cwmsData locations with locationId
     */
    async deleteCwmsDataLocationsWithLocationId(requestParameters: DeleteCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns CWMS Location Data.  The Catalog end-point is also capable of retrieving lists of locations and can filter on additional fields.
     * Get cwmsData locations
     */
    async getCwmsDataLocationsRaw(requestParameters: GetCwmsDataLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Location>>> {
        const queryParameters: any = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocationFromJSON));
    }

    /**
     * Returns CWMS Location Data.  The Catalog end-point is also capable of retrieving lists of locations and can filter on additional fields.
     * Get cwmsData locations
     */
    async getCwmsDataLocations(requestParameters: GetCwmsDataLocationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Location>> {
        const response = await this.getCwmsDataLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     */
    async getCwmsDataLocationsWithLocationIdRaw(requestParameters: GetCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Location>> {
        if (requestParameters['locationId'] == null) {
            throw new runtime.RequiredError(
                'locationId',
                'Required parameter "locationId" was null or undefined when calling getCwmsDataLocationsWithLocationId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getCwmsDataLocationsWithLocationId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['unit'] != null) {
            queryParameters['unit'] = requestParameters['unit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     * Returns CWMS Location Data
     * Get cwmsData locations with locationId
     */
    async getCwmsDataLocationsWithLocationId(requestParameters: GetCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Location> {
        const response = await this.getCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     */
    async patchCwmsDataLocationsWithLocationIdRaw(requestParameters: PatchCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['locationId'] == null) {
            throw new runtime.RequiredError(
                'locationId',
                'Required parameter "locationId" was null or undefined when calling patchCwmsDataLocationsWithLocationId().'
            );
        }

        if (requestParameters['location'] == null) {
            throw new runtime.RequiredError(
                'location',
                'Required parameter "location" was null or undefined when calling patchCwmsDataLocationsWithLocationId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/xml';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/locations/{location-id}`.replace(`{${"location-id"}}`, encodeURIComponent(String(requestParameters['locationId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LocationToJSON(requestParameters['location']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update CWMS Location
     * Patch cwmsData locations with locationId
     */
    async patchCwmsDataLocationsWithLocationId(requestParameters: PatchCwmsDataLocationsWithLocationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataLocationsWithLocationIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     */
    async postCwmsDataLocationsRaw(requestParameters: PostCwmsDataLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['location'] == null) {
            throw new runtime.RequiredError(
                'location',
                'Required parameter "location" was null or undefined when calling postCwmsDataLocations().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/locations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationToJSON(requestParameters['location']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new CWMS Location
     * Post cwmsData locations
     */
    async postCwmsDataLocations(requestParameters: PostCwmsDataLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataLocationsRaw(requestParameters, initOverrides);
    }

}
