// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CdaError } from '../models/CdaError';
import { Clob } from '../models/Clob';
import { Clobs } from '../models/Clobs';

/**
 * no description
 */
export class ClobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete clob
     * Delete cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be deleted
     * @param office Specifies the office of the clob.
     */
    public async deleteCwmsDataClobsWithClobId(clobId: string, office: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clobId' is not null or undefined
        if (clobId === null || clobId === undefined) {
            throw new RequiredError("ClobApi", "deleteCwmsDataClobsWithClobId", "clobId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("ClobApi", "deleteCwmsDataClobsWithClobId", "office");
        }


        // Path Params
        const localVarPath = '/cwms-data/clobs/{clob-id}'
            .replace('{' + 'clob-id' + '}', encodeURIComponent(String(clobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     */
    public async getCwmsDataClobs(office?: string, page?: string, pageSize?: number, includeValues?: boolean, like?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/cwms-data/clobs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page-size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (includeValues !== undefined) {
            requestContext.setQueryParam("include-values", ObjectSerializer.serialize(includeValues, "boolean", ""));
        }

        // Query Params
        if (like !== undefined) {
            requestContext.setQueryParam("like", ObjectSerializer.serialize(like, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get cwmsData clobs with clobId
     * @param clobId 
     * @param office Specifies the owning office.
     * @param clobId2 If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested.
     */
    public async getCwmsDataClobsWithClobId(clobId: string, office?: string, clobId2?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clobId' is not null or undefined
        if (clobId === null || clobId === undefined) {
            throw new RequiredError("ClobApi", "getCwmsDataClobsWithClobId", "clobId");
        }




        // Path Params
        const localVarPath = '/cwms-data/clobs/{clob-id}'
            .replace('{' + 'clob-id' + '}', encodeURIComponent(String(clobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (clobId2 !== undefined) {
            requestContext.setQueryParam("clob-id", ObjectSerializer.serialize(clobId2, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update clob
     * Patch cwmsData clobs with clobId
     * @param clobId Specifies the id of the clob to be updated
     * @param clob 
     * @param ignoreNulls If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
     */
    public async patchCwmsDataClobsWithClobId(clobId: string, clob: Clob, ignoreNulls?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clobId' is not null or undefined
        if (clobId === null || clobId === undefined) {
            throw new RequiredError("ClobApi", "patchCwmsDataClobsWithClobId", "clobId");
        }


        // verify required parameter 'clob' is not null or undefined
        if (clob === null || clob === undefined) {
            throw new RequiredError("ClobApi", "patchCwmsDataClobsWithClobId", "clob");
        }



        // Path Params
        const localVarPath = '/cwms-data/clobs/{clob-id}'
            .replace('{' + 'clob-id' + '}', encodeURIComponent(String(clobId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ignoreNulls !== undefined) {
            requestContext.setQueryParam("ignore-nulls", ObjectSerializer.serialize(ignoreNulls, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json;version=2",
        
            "application/xml;version=2"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(clob, "Clob", ""),
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
     * Create new Clob
     * Post cwmsData clobs
     * @param clob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public async postCwmsDataClobs(clob: Clob, failIfExists?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clob' is not null or undefined
        if (clob === null || clob === undefined) {
            throw new RequiredError("ClobApi", "postCwmsDataClobs", "clob");
        }



        // Path Params
        const localVarPath = '/cwms-data/clobs';

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
            ObjectSerializer.serialize(clob, "Clob", ""),
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

export class ClobApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataClobsWithClobId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCwmsDataClobsWithClobIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getCwmsDataClobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataClobsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Clobs >> {
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
            const body: Clobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clobs", ""
            ) as Clobs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Clobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clobs", ""
            ) as Clobs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataClobsWithClobId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataClobsWithClobIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Clob >> {
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
            const body: Clob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clob", ""
            ) as Clob;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Clob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clob", ""
            ) as Clob;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchCwmsDataClobsWithClobId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchCwmsDataClobsWithClobIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to postCwmsDataClobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCwmsDataClobsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
