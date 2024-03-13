// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Pool } from '../models/Pool';
import { Pools } from '../models/Pools';
import { RadarError } from '../models/RadarError';

/**
 * no description
 */
export class PoolsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns Pools Data
     * Get cwmsData pools
     * @param office Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
     * @param idMask Project Id mask. Default value:*
     * @param nameMask Name mask. Default value:*
     * @param bottomMask Bottom level mask. Default value:*
     * @param topMask Top level mask. Default value:*
     * @param includeExplicit Specifies if the results should include explicit Pools. Default value:false
     * @param includeImplicit Specifies if the results should include implicit Pools. Default value:true
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response.
     * @param cursor Deprecated. Use &#39;page&#39; instead.
     * @param pageSize How many entries per page returned. Default 100.
     * @param pageSize2 Deprecated. Use &#39;page-size&#39; instead.
     */
    public async getCwmsDataPools(office?: string, idMask?: string, nameMask?: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, page?: string, cursor?: string, pageSize?: number, pageSize2?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/cwms-data/pools';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (idMask !== undefined) {
            requestContext.setQueryParam("id-mask", ObjectSerializer.serialize(idMask, "string", ""));
        }

        // Query Params
        if (nameMask !== undefined) {
            requestContext.setQueryParam("name-mask", ObjectSerializer.serialize(nameMask, "string", ""));
        }

        // Query Params
        if (bottomMask !== undefined) {
            requestContext.setQueryParam("bottom-mask", ObjectSerializer.serialize(bottomMask, "string", ""));
        }

        // Query Params
        if (topMask !== undefined) {
            requestContext.setQueryParam("top-mask", ObjectSerializer.serialize(topMask, "string", ""));
        }

        // Query Params
        if (includeExplicit !== undefined) {
            requestContext.setQueryParam("include-explicit", ObjectSerializer.serialize(includeExplicit, "string", ""));
        }

        // Query Params
        if (includeImplicit !== undefined) {
            requestContext.setQueryParam("include-implicit", ObjectSerializer.serialize(includeImplicit, "string", ""));
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves requested Pool
     * Get cwmsData pools with poolId
     * @param poolId Specifies the pool whose data is to be included in the response.
     * @param office Specifies the owning office of the Pool whose data is to be included in the response.
     * @param projectId Specifies the project-id of the Pool whose data is to be included in the response.
     * @param bottomMask Bottom level mask. Default value:*
     * @param topMask Top level mask. Default value:*
     * @param includeExplicit Specifies if the results should include explicit Pools. Default value:false
     * @param includeImplicit Specifies if the results should include implicit Pools. Default value:true
     */
    public async getCwmsDataPoolsWithPoolId(poolId: string, office: string, projectId: string, bottomMask?: string, topMask?: string, includeExplicit?: string, includeImplicit?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "poolId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "office");
        }


        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("PoolsApi", "getCwmsDataPoolsWithPoolId", "projectId");
        }






        // Path Params
        const localVarPath = '/cwms-data/pools/{pool-id}'
            .replace('{' + 'pool-id' + '}', encodeURIComponent(String(poolId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (projectId !== undefined) {
            requestContext.setQueryParam("project-id", ObjectSerializer.serialize(projectId, "string", ""));
        }

        // Query Params
        if (bottomMask !== undefined) {
            requestContext.setQueryParam("bottom-mask", ObjectSerializer.serialize(bottomMask, "string", ""));
        }

        // Query Params
        if (topMask !== undefined) {
            requestContext.setQueryParam("top-mask", ObjectSerializer.serialize(topMask, "string", ""));
        }

        // Query Params
        if (includeExplicit !== undefined) {
            requestContext.setQueryParam("include-explicit", ObjectSerializer.serialize(includeExplicit, "string", ""));
        }

        // Query Params
        if (includeImplicit !== undefined) {
            requestContext.setQueryParam("include-implicit", ObjectSerializer.serialize(includeImplicit, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PoolsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataPools
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataPools(response: ResponseContext): Promise<Pools > {
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
            throw new ApiException<RadarError>(response.httpStatusCode, "Based on the combination of inputs provided the pools were not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Pools = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pools", ""
            ) as Pools;
            return body;
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Pools = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pools", ""
            ) as Pools;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataPoolsWithPoolId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataPoolsWithPoolId(response: ResponseContext): Promise<Pool > {
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
            throw new ApiException<RadarError>(response.httpStatusCode, "Based on the combination of inputs provided the Location Category was not found.", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Pool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pool", ""
            ) as Pool;
            return body;
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "request format is not implemented", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Pool = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Pool", ""
            ) as Pool;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
