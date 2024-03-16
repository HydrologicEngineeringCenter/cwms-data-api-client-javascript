// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Blob } from '../models/Blob';
import { Blobs } from '../models/Blobs';
import { CdaError } from '../models/CdaError';

/**
 * no description
 */
export class BlobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get cwmsData blobs
     * @param office Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
     * @param page This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response.
     * @param pageSize How many entries per page returned. Default 20.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want
     */
    public async getCwmsDataBlobs(office?: string, page?: string, pageSize?: number, like?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/cwms-data/blobs';

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
     * Get cwmsData blobs with blobId
     * @param blobId 
     * @param office Specifies the owning office.
     */
    public async getCwmsDataBlobsWithBlobId(blobId: string, office?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blobId' is not null or undefined
        if (blobId === null || blobId === undefined) {
            throw new RequiredError("BlobApi", "getCwmsDataBlobsWithBlobId", "blobId");
        }



        // Path Params
        const localVarPath = '/cwms-data/blobs/{blob-id}'
            .replace('{' + 'blob-id' + '}', encodeURIComponent(String(blobId)));

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
     * Create new Blob
     * Post cwmsData blobs
     * @param blob 
     * @param failIfExists Create will fail if provided ID already exists. Default: true
     */
    public async postCwmsDataBlobs(blob: Blob, failIfExists?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blob' is not null or undefined
        if (blob === null || blob === undefined) {
            throw new RequiredError("BlobApi", "postCwmsDataBlobs", "blob");
        }



        // Path Params
        const localVarPath = '/cwms-data/blobs';

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
            ObjectSerializer.serialize(blob, "Blob", ""),
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

export class BlobApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataBlobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataBlobsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Blobs >> {
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
            const body: Blobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Blobs", ""
            ) as Blobs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Blobs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Blobs", ""
            ) as Blobs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataBlobsWithBlobId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataBlobsWithBlobIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to postCwmsDataBlobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCwmsDataBlobsWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
