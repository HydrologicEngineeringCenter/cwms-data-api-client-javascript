// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Catalog } from '../models/Catalog';
import { CatalogableEndpoint } from '../models/CatalogableEndpoint';
import { CdaError } from '../models/CdaError';
import { UnitSystem } from '../models/UnitSystem';

/**
 * no description
 */
export class CatalogApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get cwmsData catalog with dataset
     * @param dataset A list of what data? E.g. Timeseries, Locations, Ratings, etc
     * @param page This end point can return a lot of data, this identifies where in the request you are.
     * @param pageSize How many entires per page returned. Default 500.
     * @param unitSystem Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
     * @param office 3-4 letter office name representing the district you want to isolate data to.
     * @param like Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id
     * @param timeseriesCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id
     * @param timeseriesGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id
     * @param locationCategoryLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id
     * @param locationGroupLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id
     * @param boundingOfficeLike Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
     */
    public async getCwmsDataCatalogWithDataset(dataset: CatalogableEndpoint, page?: string, pageSize?: number, unitSystem?: UnitSystem, office?: string, like?: string, timeseriesCategoryLike?: string, timeseriesGroupLike?: string, locationCategoryLike?: string, locationGroupLike?: string, boundingOfficeLike?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dataset' is not null or undefined
        if (dataset === null || dataset === undefined) {
            throw new RequiredError("CatalogApi", "getCwmsDataCatalogWithDataset", "dataset");
        }












        // Path Params
        const localVarPath = '/cwms-data/catalog/{dataset}'
            .replace('{' + 'dataset' + '}', encodeURIComponent(String(dataset)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page-size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (unitSystem !== undefined) {
            requestContext.setQueryParam("unit-system", ObjectSerializer.serialize(unitSystem, "UnitSystem", ""));
        }

        // Query Params
        if (office !== undefined) {
            requestContext.setQueryParam("office", ObjectSerializer.serialize(office, "string", ""));
        }

        // Query Params
        if (like !== undefined) {
            requestContext.setQueryParam("like", ObjectSerializer.serialize(like, "string", ""));
        }

        // Query Params
        if (timeseriesCategoryLike !== undefined) {
            requestContext.setQueryParam("timeseries-category-like", ObjectSerializer.serialize(timeseriesCategoryLike, "string", ""));
        }

        // Query Params
        if (timeseriesGroupLike !== undefined) {
            requestContext.setQueryParam("timeseries-group-like", ObjectSerializer.serialize(timeseriesGroupLike, "string", ""));
        }

        // Query Params
        if (locationCategoryLike !== undefined) {
            requestContext.setQueryParam("location-category-like", ObjectSerializer.serialize(locationCategoryLike, "string", ""));
        }

        // Query Params
        if (locationGroupLike !== undefined) {
            requestContext.setQueryParam("location-group-like", ObjectSerializer.serialize(locationGroupLike, "string", ""));
        }

        // Query Params
        if (boundingOfficeLike !== undefined) {
            requestContext.setQueryParam("bounding-office-like", ObjectSerializer.serialize(boundingOfficeLike, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CatalogApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCwmsDataCatalogWithDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCwmsDataCatalogWithDatasetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Catalog >> {
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
            const body: Catalog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Catalog", ""
            ) as Catalog;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Catalog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Catalog", ""
            ) as Catalog;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
