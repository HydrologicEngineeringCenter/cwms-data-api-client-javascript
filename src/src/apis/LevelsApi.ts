/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CdaError,
  LocationLevel,
  LocationLevels,
  SpecifiedLevel,
} from '../models/index';
import {
    CdaErrorFromJSON,
    CdaErrorToJSON,
    LocationLevelFromJSON,
    LocationLevelToJSON,
    LocationLevelsFromJSON,
    LocationLevelsToJSON,
    SpecifiedLevelFromJSON,
    SpecifiedLevelToJSON,
} from '../models/index';

export interface DeleteCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    cascadeDelete?: boolean;
    office?: string;
    effectiveDate?: string;
    timezone?: string;
}

export interface DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    specifiedLevelId: string;
    office: string;
}

export interface GetCwmsDataLevelsRequest {
    levelIdMask?: string;
    office?: string;
    unit?: string;
    datum?: string;
    begin?: string;
    end?: string;
    timezone?: string;
    format?: string;
    page?: string;
    pageSize?: number;
}

export interface GetCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    office: string;
    effectiveDate: string;
    timezone?: string;
    unit?: string;
}

export interface GetCwmsDataSpecifiedLevelsRequest {
    office?: string;
    templateIdMask?: string;
}

export interface PatchCwmsDataLevelsWithLevelIdRequest {
    levelId: string;
    locationLevel: LocationLevel;
    effectiveDate?: string;
}

export interface PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest {
    specifiedLevelId: string;
    specifiedLevelId2: string;
    office: string;
}

export interface PostCwmsDataLevelsRequest {
    locationLevel: LocationLevel;
}

export interface PostCwmsDataSpecifiedLevelsRequest {
    specifiedLevel: SpecifiedLevel;
    failIfExists?: boolean;
}

/**
 * 
 */
export class LevelsApi extends runtime.BaseAPI {

    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     */
    async deleteCwmsDataLevelsWithLevelIdRaw(requestParameters: DeleteCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['levelId'] == null) {
            throw new runtime.RequiredError(
                'levelId',
                'Required parameter "levelId" was null or undefined when calling deleteCwmsDataLevelsWithLevelId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['cascadeDelete'] != null) {
            queryParameters['cascade-delete'] = requestParameters['cascadeDelete'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['effectiveDate'] != null) {
            queryParameters['effective-date'] = requestParameters['effectiveDate'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/cwms-data/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete CWMS Location Level
     * Delete cwmsData levels with levelId
     */
    async deleteCwmsDataLevelsWithLevelId(requestParameters: DeleteCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     */
    async deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters: DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['specifiedLevelId'] == null) {
            throw new runtime.RequiredError(
                'specifiedLevelId',
                'Required parameter "specifiedLevelId" was null or undefined when calling deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId().'
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
            path: `/cwms-data/specified-levels/{specified-level-id}`.replace(`{${"specified-level-id"}}`, encodeURIComponent(String(requestParameters['specifiedLevelId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes requested specified level id
     * Delete cwmsData specifiedLevels with specifiedLevelId
     */
    async deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters: DeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides);
    }

    /**
     * Get cwmsData levels
     */
    async getCwmsDataLevelsRaw(requestParameters: GetCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters['levelIdMask'] != null) {
            queryParameters['level-id-mask'] = requestParameters['levelIdMask'];
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

        if (requestParameters['begin'] != null) {
            queryParameters['begin'] = requestParameters['begin'];
        }

        if (requestParameters['end'] != null) {
            queryParameters['end'] = requestParameters['end'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['page-size'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data/levels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get cwmsData levels
     */
    async getCwmsDataLevels(requestParameters: GetCwmsDataLevelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getCwmsDataLevelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     */
    async getCwmsDataLevelsWithLevelIdRaw(requestParameters: GetCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLevel>> {
        if (requestParameters['levelId'] == null) {
            throw new runtime.RequiredError(
                'levelId',
                'Required parameter "levelId" was null or undefined when calling getCwmsDataLevelsWithLevelId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling getCwmsDataLevelsWithLevelId().'
            );
        }

        if (requestParameters['effectiveDate'] == null) {
            throw new runtime.RequiredError(
                'effectiveDate',
                'Required parameter "effectiveDate" was null or undefined when calling getCwmsDataLevelsWithLevelId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['effectiveDate'] != null) {
            queryParameters['effective-date'] = requestParameters['effectiveDate'];
        }

        if (requestParameters['timezone'] != null) {
            queryParameters['timezone'] = requestParameters['timezone'];
        }

        if (requestParameters['unit'] != null) {
            queryParameters['unit'] = requestParameters['unit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationLevelFromJSON(jsonValue));
    }

    /**
     * Retrieves requested Location Level
     * Get cwmsData levels with levelId
     */
    async getCwmsDataLevelsWithLevelId(requestParameters: GetCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLevel> {
        const response = await this.getCwmsDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get cwmsData specifiedLevels
     */
    async getCwmsDataSpecifiedLevelsRaw(requestParameters: GetCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpecifiedLevel>> {
        const queryParameters: any = {};

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        if (requestParameters['templateIdMask'] != null) {
            queryParameters['template-id-mask'] = requestParameters['templateIdMask'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cwms-data/specified-levels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SpecifiedLevelFromJSON(jsonValue));
    }

    /**
     * Get cwmsData specifiedLevels
     */
    async getCwmsDataSpecifiedLevels(requestParameters: GetCwmsDataSpecifiedLevelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpecifiedLevel> {
        const response = await this.getCwmsDataSpecifiedLevelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     */
    async patchCwmsDataLevelsWithLevelIdRaw(requestParameters: PatchCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['levelId'] == null) {
            throw new runtime.RequiredError(
                'levelId',
                'Required parameter "levelId" was null or undefined when calling patchCwmsDataLevelsWithLevelId().'
            );
        }

        if (requestParameters['locationLevel'] == null) {
            throw new runtime.RequiredError(
                'locationLevel',
                'Required parameter "locationLevel" was null or undefined when calling patchCwmsDataLevelsWithLevelId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['effectiveDate'] != null) {
            queryParameters['effective-date'] = requestParameters['effectiveDate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/cwms-data/levels/{level-id}`.replace(`{${"level-id"}}`, encodeURIComponent(String(requestParameters['levelId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LocationLevelToJSON(requestParameters['locationLevel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update CWMS Location Level
     * Patch cwmsData levels with levelId
     */
    async patchCwmsDataLevelsWithLevelId(requestParameters: PatchCwmsDataLevelsWithLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataLevelsWithLevelIdRaw(requestParameters, initOverrides);
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     */
    async patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters: PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['specifiedLevelId'] == null) {
            throw new runtime.RequiredError(
                'specifiedLevelId',
                'Required parameter "specifiedLevelId" was null or undefined when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId().'
            );
        }

        if (requestParameters['specifiedLevelId2'] == null) {
            throw new runtime.RequiredError(
                'specifiedLevelId2',
                'Required parameter "specifiedLevelId2" was null or undefined when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId().'
            );
        }

        if (requestParameters['office'] == null) {
            throw new runtime.RequiredError(
                'office',
                'Required parameter "office" was null or undefined when calling patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['specifiedLevelId2'] != null) {
            queryParameters['specified-level-id'] = requestParameters['specifiedLevelId2'];
        }

        if (requestParameters['office'] != null) {
            queryParameters['office'] = requestParameters['office'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/cwms-data/specified-levels/{specified-level-id}`.replace(`{${"specified-level-id"}}`, encodeURIComponent(String(requestParameters['specifiedLevelId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Renames the requested specified level id
     * Patch cwmsData specifiedLevels with specifiedLevelId
     */
    async patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(requestParameters: PatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRaw(requestParameters, initOverrides);
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     */
    async postCwmsDataLevelsRaw(requestParameters: PostCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['locationLevel'] == null) {
            throw new runtime.RequiredError(
                'locationLevel',
                'Required parameter "locationLevel" was null or undefined when calling postCwmsDataLevels().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/cwms-data/levels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationLevelToJSON(requestParameters['locationLevel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new CWMS Location Level
     * Post cwmsData levels
     */
    async postCwmsDataLevels(requestParameters: PostCwmsDataLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataLevelsRaw(requestParameters, initOverrides);
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     */
    async postCwmsDataSpecifiedLevelsRaw(requestParameters: PostCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['specifiedLevel'] == null) {
            throw new runtime.RequiredError(
                'specifiedLevel',
                'Required parameter "specifiedLevel" was null or undefined when calling postCwmsDataSpecifiedLevels().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['failIfExists'] != null) {
            queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;version=2';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/cwms-data/specified-levels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SpecifiedLevelToJSON(requestParameters['specifiedLevel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new SpecifiedLevel
     * Post cwmsData specifiedLevels
     */
    async postCwmsDataSpecifiedLevels(requestParameters: PostCwmsDataSpecifiedLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCwmsDataSpecifiedLevelsRaw(requestParameters, initOverrides);
    }

}
