// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Clob } from '../models/Clob';
import { Clobs } from '../models/Clobs';
import { RadarError } from '../models/RadarError';

/**
 * no description
 */
export class ClobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get cwmsData clobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response.
     * @param cursor Deprecated. Use &#39;page&#39; instead.
     * @param pageSize How many entries per page returned. Default 20.
     * @param pageSize2 Deprecated, use &#39;page-size&#39; instead.
     * @param includeValues Do you want the value associated with this particular clob (default: false)
     * @param includeValues2 Deprecated, use &#39;include-values&#39; instead.
     * @param like Posix regular expression matching against the id
     */
    public async getCwmsDataClobs(office?: string, page?: string, cursor?: string, pageSize?: number, pageSize2?: number, includeValues?: boolean, includeValues2?: boolean, like?: string, _options?: Configuration): Promise<RequestContext> {
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
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page-size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (pageSize2 !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize2, "number", "int32"));
        }

        // Query Params
        if (includeValues !== undefined) {
            requestContext.setQueryParam("include-values", ObjectSerializer.serialize(includeValues, "boolean", ""));
        }

        // Query Params
        if (includeValues2 !== undefined) {
            requestContext.setQueryParam("includeValues", ObjectSerializer.serialize(includeValues2, "boolean", ""));
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
     */
    public async getCwmsDataClobsWithClobId(clobId: string, office?: string, _options?: Configuration): Promise<RequestContext> {
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
     * @params response Response returned by the server for a request to getCwmsDataClobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataClobs(response: ResponseContext): Promise<Clobs > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Clobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clobs", ""
            ) as Clobs;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Clobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clobs", ""
            ) as Clobs;
            return body;
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
     public async getCwmsDataClobsWithClobId(response: ResponseContext): Promise<Clob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Server Error", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: RadarError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RadarError", ""
            ) as RadarError;
            throw new ApiException<RadarError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Clob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clob", ""
            ) as Clob;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Clob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Clob", ""
            ) as Clob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
