// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CdaError } from '../models/CdaError';
import { TimeSeriesGroup } from '../models/TimeSeriesGroup';

/**
 * no description
 */
export class TimeseriesGroupsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes requested time series group
     * Delete cwmsData timeseries group with groupId
     * @param groupId The time series group to be deleted
     * @param categoryId Specifies the time series category of the time series group to be deleted
     * @param office Specifies the owning office of the time series group to be deleted
     */
    public async deleteCwmsDataTimeseriesGroupWithGroupId(groupId: string, categoryId: string, office: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "deleteCwmsDataTimeseriesGroupWithGroupId", "groupId");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "deleteCwmsDataTimeseriesGroupWithGroupId", "categoryId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "deleteCwmsDataTimeseriesGroupWithGroupId", "office");
        }


        // Path Params
        const localVarPath = '/cwms-data/timeseries/group/{group-id}'
            .replace('{' + 'group-id' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category-id", ObjectSerializer.serialize(categoryId, "string", ""));
        }

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["CwmsAAACacAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns CWMS Timeseries Groups Data
     * Get cwmsData timeseries group
     * @param office Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
     * @param includeAssigned Include the assigned timeseries in the returned timeseries groups. (default: true)
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     */
    public async getCwmsDataTimeseriesGroup(office?: string, includeAssigned?: boolean, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/cwms-data/timeseries/group';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (includeAssigned !== undefined) {
            requestContext.setQueryParam("include-assigned", ObjectSerializer.serialize(includeAssigned, "boolean", ""));
        }

        // Query Params
        if (timeseriesCategoryLike !== undefined) {
            requestContext.setQueryParam("timeseries-category-like", ObjectSerializer.serialize(timeseriesCategoryLike, "string", ""));
        }

        // Query Params
        if (timeseriesGroupLike !== undefined) {
            requestContext.setQueryParam("timeseries-group-like", ObjectSerializer.serialize(timeseriesGroupLike, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves requested timeseries group
     * Get cwmsData timeseries group with groupId
     * @param groupId Specifies the timeseries group whose data is to be included in the response
     * @param office Specifies the owning office of the timeseries group whose data is to be included in the response.
     * @param categoryId Specifies the category containing the timeseries group whose data is to be included in the response.
     */
    public async getCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, categoryId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "getCwmsDataTimeseriesGroupWithGroupId", "groupId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "getCwmsDataTimeseriesGroupWithGroupId", "office");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "getCwmsDataTimeseriesGroupWithGroupId", "categoryId");
        }


        // Path Params
        const localVarPath = '/cwms-data/timeseries/group/{group-id}'
            .replace('{' + 'group-id' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (categoryId !== undefined) {
            requestContext.setQueryParam("category-id", ObjectSerializer.serialize(categoryId, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update existing TimeSeriesGroup
     * Patch cwmsData timeseries group with groupId
     * @param groupId 
     * @param office Specifies the owning office of the time series group to be updated
     * @param timeSeriesGroup 
     * @param replaceAssignedTs Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
     */
    public async patchCwmsDataTimeseriesGroupWithGroupId(groupId: string, office: string, timeSeriesGroup: TimeSeriesGroup, replaceAssignedTs?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "patchCwmsDataTimeseriesGroupWithGroupId", "groupId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "patchCwmsDataTimeseriesGroupWithGroupId", "office");
        }


        // verify required parameter 'timeSeriesGroup' is not null or undefined
        if (timeSeriesGroup === null || timeSeriesGroup === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "patchCwmsDataTimeseriesGroupWithGroupId", "timeSeriesGroup");
        }



        // Path Params
        const localVarPath = '/cwms-data/timeseries/group/{group-id}'
            .replace('{' + 'group-id' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (replaceAssignedTs !== undefined) {
            requestContext.setQueryParam("replace-assigned-ts", ObjectSerializer.serialize(replaceAssignedTs, "boolean", ""));
        }

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timeSeriesGroup, "TimeSeriesGroup", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["CwmsAAACacAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create new TimeSeriesGroup
     * Post cwmsData timeseries group
     * @param timeSeriesGroup 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public async postCwmsDataTimeseriesGroup(timeSeriesGroup: TimeSeriesGroup, failIfExists?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeSeriesGroup' is not null or undefined
        if (timeSeriesGroup === null || timeSeriesGroup === undefined) {
            throw new RequiredError("TimeseriesGroupsApi", "postCwmsDataTimeseriesGroup", "timeSeriesGroup");
        }



        // Path Params
        const localVarPath = '/cwms-data/timeseries/group';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (failIfExists !== undefined) {
            requestContext.setQueryParam("fail-if-exists", ObjectSerializer.serialize(failIfExists, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timeSeriesGroup, "TimeSeriesGroup", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["CwmsAAACacAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TimeseriesGroupsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataTimeseriesGroupWithGroupId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataTimeseriesGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataTimeseriesGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<TimeSeriesGroup> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Based on the combination of inputs provided the timeseries group(s) were not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TimeSeriesGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TimeSeriesGroup>", ""
            ) as Array<TimeSeriesGroup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TimeSeriesGroup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TimeSeriesGroup>", ""
            ) as Array<TimeSeriesGroup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataTimeseriesGroupWithGroupId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeriesGroup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeriesGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesGroup", ""
            ) as TimeSeriesGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeriesGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesGroup", ""
            ) as TimeSeriesGroup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchCwmsDataTimeseriesGroupWithGroupId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchCwmsDataTimeseriesGroupWithGroupIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCwmsDataTimeseriesGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCwmsDataTimeseriesGroupWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CdaError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdaError", ""
            ) as CdaError;
            throw new ApiException<CdaError>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
