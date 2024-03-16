// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CdaError } from '../models/CdaError';
import { DeleteMethod } from '../models/DeleteMethod';
import { TimeSeriesIdentifierDescriptor } from '../models/TimeSeriesIdentifierDescriptor';
import { TimeSeriesIdentifierDescriptors } from '../models/TimeSeriesIdentifierDescriptors';

/**
 * no description
 */
export class TimeSeriesIdentifierApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes requested timeseries identifier
     * Delete cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId The timeseries-id of the timeseries to be deleted. 
     * @param office Specifies the owning office of the timeseries to be deleted.
     * @param method Specifies the delete method used.
     */
    public async deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, method: DeleteMethod, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeseriesId' is not null or undefined
        if (timeseriesId === null || timeseriesId === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "timeseriesId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "office");
        }


        // verify required parameter 'method' is not null or undefined
        if (method === null || method === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "method");
        }


        // Path Params
        const localVarPath = '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}'
            .replace('{' + 'timeseries-id' + '}', encodeURIComponent(String(timeseriesId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (method !== undefined) {
            requestContext.setQueryParam("method", ObjectSerializer.serialize(method, "DeleteMethod", ""));
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
     * Returns CWMS timeseries identifier descriptorData
     * Get cwmsData timeseries identifierDescriptor
     * @param office Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
     * @param timeseriesIdRegex A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 500.
     */
    public async getCwmsDataTimeseriesIdentifierDescriptor(office?: string, timeseriesIdRegex?: string, page?: string, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/cwms-data/timeseries/identifier-descriptor';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (timeseriesIdRegex !== undefined) {
            requestContext.setQueryParam("timeseries-id-regex", ObjectSerializer.serialize(timeseriesIdRegex, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page-size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves requested timeseries identifier descriptor
     * Get cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId Specifies the identifier of the timeseries to be included in the response.
     * @param office Specifies the owning office of the timeseries identifier to be included in the response.
     */
    public async getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, office: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeseriesId' is not null or undefined
        if (timeseriesId === null || timeseriesId === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "timeseriesId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "office");
        }


        // Path Params
        const localVarPath = '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}'
            .replace('{' + 'timeseries-id' + '}', encodeURIComponent(String(timeseriesId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Patch cwmsData timeseries identifierDescriptor with timeseriesId
     * @param timeseriesId 
     * @param timeseriesId2 A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
     * @param office Specifies the owning office of the timeseries identifier to be updated
     * @param intervalOffset The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
     * @param snapForward The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
     * @param snapBackward The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
     * @param active \&#39;True\&#39; or \&#39;true\&#39; if the time series is active
     */
    public async patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId: string, timeseriesId2: string, office: string, intervalOffset?: number, snapForward?: number, snapBackward?: number, active?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeseriesId' is not null or undefined
        if (timeseriesId === null || timeseriesId === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "timeseriesId");
        }


        // verify required parameter 'timeseriesId2' is not null or undefined
        if (timeseriesId2 === null || timeseriesId2 === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "timeseriesId2");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId", "office");
        }






        // Path Params
        const localVarPath = '/cwms-data/timeseries/identifier-descriptor/{timeseries-id}'
            .replace('{' + 'timeseries-id' + '}', encodeURIComponent(String(timeseriesId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timeseriesId2 !== undefined) {
            requestContext.setQueryParam("timeseries-id", ObjectSerializer.serialize(timeseriesId2, "string", ""));
        }

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (intervalOffset !== undefined) {
            requestContext.setQueryParam("interval-offset", ObjectSerializer.serialize(intervalOffset, "number", "int64"));
        }

        // Query Params
        if (snapForward !== undefined) {
            requestContext.setQueryParam("snap-forward", ObjectSerializer.serialize(snapForward, "number", "int64"));
        }

        // Query Params
        if (snapBackward !== undefined) {
            requestContext.setQueryParam("snap-backward", ObjectSerializer.serialize(snapBackward, "number", "int64"));
        }

        // Query Params
        if (active !== undefined) {
            requestContext.setQueryParam("active", ObjectSerializer.serialize(active, "boolean", ""));
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
     * Create new TimeSeriesIdentifierDescriptor
     * Post cwmsData timeseries identifierDescriptor
     * @param timeSeriesIdentifierDescriptor 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public async postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor: TimeSeriesIdentifierDescriptor, failIfExists?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timeSeriesIdentifierDescriptor' is not null or undefined
        if (timeSeriesIdentifierDescriptor === null || timeSeriesIdentifierDescriptor === undefined) {
            throw new RequiredError("TimeSeriesIdentifierApi", "postCwmsDataTimeseriesIdentifierDescriptor", "timeSeriesIdentifierDescriptor");
        }



        // Path Params
        const localVarPath = '/cwms-data/timeseries/identifier-descriptor';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (failIfExists !== undefined) {
            requestContext.setQueryParam("fail-if-exists", ObjectSerializer.serialize(failIfExists, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;version=2",
        
            "application/xml;version=2"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timeSeriesIdentifierDescriptor, "TimeSeriesIdentifierDescriptor", ""),
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

export class TimeSeriesIdentifierApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getCwmsDataTimeseriesIdentifierDescriptor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeriesIdentifierDescriptors >> {
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
            throw new ApiException<CdaError>(response.httpStatusCode, "Based on the combination of inputs provided the time series identifier descriptors were not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeriesIdentifierDescriptors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesIdentifierDescriptors", ""
            ) as TimeSeriesIdentifierDescriptors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeriesIdentifierDescriptors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesIdentifierDescriptors", ""
            ) as TimeSeriesIdentifierDescriptors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimeSeriesIdentifierDescriptor >> {
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
            throw new ApiException<CdaError>(response.httpStatusCode, "Based on the combination of inputs provided the timeseries identifier descriptor was not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimeSeriesIdentifierDescriptor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesIdentifierDescriptor", ""
            ) as TimeSeriesIdentifierDescriptor;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TimeSeriesIdentifierDescriptor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimeSeriesIdentifierDescriptor", ""
            ) as TimeSeriesIdentifierDescriptor;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to postCwmsDataTimeseriesIdentifierDescriptor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCwmsDataTimeseriesIdentifierDescriptorWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
