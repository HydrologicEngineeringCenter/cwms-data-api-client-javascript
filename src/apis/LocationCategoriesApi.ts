// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CdaError } from '../models/CdaError';
import { LocationCategory } from '../models/LocationCategory';

/**
 * no description
 */
export class LocationCategoriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes requested location category
     * Delete cwmsData location category with categoryId
     * @param categoryId The location category to be deleted
     * @param office Specifies the owning office of the location category to be deleted
     * @param cascadeDelete Specifies whether to delete any location groups in this location category. Default: false
     */
    public async deleteCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, cascadeDelete?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("LocationCategoriesApi", "deleteCwmsDataLocationCategoryWithCategoryId", "categoryId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("LocationCategoriesApi", "deleteCwmsDataLocationCategoryWithCategoryId", "office");
        }



        // Path Params
        const localVarPath = '/cwms-data/location/category/{category-id}'
            .replace('{' + 'category-id' + '}', encodeURIComponent(String(categoryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (cascadeDelete !== undefined) {
            requestContext.setQueryParam("cascade-delete", ObjectSerializer.serialize(cascadeDelete, "boolean", ""));
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
     * Returns CWMS Location Category Data
     * Get cwmsData location category
     * @param office Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
     */
    public async getCwmsDataLocationCategory(office?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/cwms-data/location/category';

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
     * Retrieves requested Location Category
     * Get cwmsData location category with categoryId
     * @param categoryId Specifies the Category whose data is to be included in the response.
     * @param office Specifies the owning office of the Location Category whose data is to be included in the response.
     */
    public async getCwmsDataLocationCategoryWithCategoryId(categoryId: string, office: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("LocationCategoriesApi", "getCwmsDataLocationCategoryWithCategoryId", "categoryId");
        }


        // verify required parameter 'office' is not null or undefined
        if (office === null || office === undefined) {
            throw new RequiredError("LocationCategoriesApi", "getCwmsDataLocationCategoryWithCategoryId", "office");
        }


        // Path Params
        const localVarPath = '/cwms-data/location/category/{category-id}'
            .replace('{' + 'category-id' + '}', encodeURIComponent(String(categoryId)));

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
     * Create new LocationCategory
     * Post cwmsData location category
     * @param locationCategory 
     */
    public async postCwmsDataLocationCategory(locationCategory: LocationCategory, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'locationCategory' is not null or undefined
        if (locationCategory === null || locationCategory === undefined) {
            throw new RequiredError("LocationCategoriesApi", "postCwmsDataLocationCategory", "locationCategory");
        }


        // Path Params
        const localVarPath = '/cwms-data/location/category';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(locationCategory, "LocationCategory", ""),
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

export class LocationCategoriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCwmsDataLocationCategoryWithCategoryId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to getCwmsDataLocationCategory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataLocationCategoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<LocationCategory> >> {
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
            const body: Array<LocationCategory> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LocationCategory>", ""
            ) as Array<LocationCategory>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LocationCategory> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LocationCategory>", ""
            ) as Array<LocationCategory>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataLocationCategoryWithCategoryId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataLocationCategoryWithCategoryIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LocationCategory >> {
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
            const body: LocationCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LocationCategory", ""
            ) as LocationCategory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LocationCategory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LocationCategory", ""
            ) as LocationCategory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCwmsDataLocationCategory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCwmsDataLocationCategoryWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
