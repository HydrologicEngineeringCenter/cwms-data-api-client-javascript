/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 1.12.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { RatingSpecFromJSON, RatingSpecToJSON, RatingSpecsFromJSON, RatingTemplateFromJSON, RatingTemplateToJSON, RatingTemplatesFromJSON, } from '../models/index';
/**
 *
 */
export class RatingsApi extends runtime.BaseAPI {
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     */
    deleteCwmsDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingId'] == null) {
                throw new runtime.RequiredError('ratingId', 'Required parameter "ratingId" was null or undefined when calling deleteCwmsDataRatingsSpecWithRatingId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataRatingsSpecWithRatingId().');
            }
            if (requestParameters['method'] == null) {
                throw new runtime.RequiredError('method', 'Required parameter "method" was null or undefined when calling deleteCwmsDataRatingsSpecWithRatingId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['method'] != null) {
                queryParameters['method'] = requestParameters['method'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/spec/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings spec with ratingId
     */
    deleteCwmsDataRatingsSpecWithRatingId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     */
    deleteCwmsDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['templateId'] == null) {
                throw new runtime.RequiredError('templateId', 'Required parameter "templateId" was null or undefined when calling deleteCwmsDataRatingsTemplateWithTemplateId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataRatingsTemplateWithTemplateId().');
            }
            if (requestParameters['method'] == null) {
                throw new runtime.RequiredError('method', 'Required parameter "method" was null or undefined when calling deleteCwmsDataRatingsTemplateWithTemplateId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['method'] != null) {
                queryParameters['method'] = requestParameters['method'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/template/{template-id}`.replace(`{${"template-id"}}`, encodeURIComponent(String(requestParameters['templateId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes requested rating specification
     * Delete cwmsData ratings template with templateId
     */
    deleteCwmsDataRatingsTemplateWithTemplateId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete cwmsData ratings with ratingId
     */
    deleteCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingId'] == null) {
                throw new runtime.RequiredError('ratingId', 'Required parameter "ratingId" was null or undefined when calling deleteCwmsDataRatingsWithRatingId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling deleteCwmsDataRatingsWithRatingId().');
            }
            if (requestParameters['begin'] == null) {
                throw new runtime.RequiredError('begin', 'Required parameter "begin" was null or undefined when calling deleteCwmsDataRatingsWithRatingId().');
            }
            if (requestParameters['end'] == null) {
                throw new runtime.RequiredError('end', 'Required parameter "end" was null or undefined when calling deleteCwmsDataRatingsWithRatingId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
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
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete cwmsData ratings with ratingId
     */
    deleteCwmsDataRatingsWithRatingId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get cwmsData ratings
     */
    getCwmsDataRatingsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['name'] != null) {
                queryParameters['name'] = requestParameters['name'];
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
            if (requestParameters['at'] != null) {
                queryParameters['at'] = requestParameters['at'];
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
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get cwmsData ratings
     */
    getCwmsDataRatings(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get cwmsData ratings metadata
     */
    getCwmsDataRatingsMetadataRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['ratingIdMask'] != null) {
                queryParameters['rating-id-mask'] = requestParameters['ratingIdMask'];
            }
            if (requestParameters['start'] != null) {
                queryParameters['start'] = requestParameters['start'];
            }
            if (requestParameters['end'] != null) {
                queryParameters['end'] = requestParameters['end'];
            }
            if (requestParameters['timezone'] != null) {
                queryParameters['timezone'] = requestParameters['timezone'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/metadata`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Get cwmsData ratings metadata
     */
    getCwmsDataRatingsMetadata(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCwmsDataRatingsMetadataRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get cwmsData ratings spec
     */
    getCwmsDataRatingsSpecRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['ratingIdMask'] != null) {
                queryParameters['rating-id-mask'] = requestParameters['ratingIdMask'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/spec`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RatingSpecsFromJSON(jsonValue));
        });
    }
    /**
     * Get cwmsData ratings spec
     */
    getCwmsDataRatingsSpec(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsSpecRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get cwmsData ratings spec with ratingId
     */
    getCwmsDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingId'] == null) {
                throw new runtime.RequiredError('ratingId', 'Required parameter "ratingId" was null or undefined when calling getCwmsDataRatingsSpecWithRatingId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataRatingsSpecWithRatingId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/spec/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RatingSpecFromJSON(jsonValue));
        });
    }
    /**
     * Get cwmsData ratings spec with ratingId
     */
    getCwmsDataRatingsSpecWithRatingId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsSpecWithRatingIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get cwmsData ratings template
     */
    getCwmsDataRatingsTemplateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            if (requestParameters['templateIdMask'] != null) {
                queryParameters['template-id-mask'] = requestParameters['templateIdMask'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['pageSize'] != null) {
                queryParameters['page-size'] = requestParameters['pageSize'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/template`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => RatingTemplatesFromJSON(jsonValue));
        });
    }
    /**
     * Get cwmsData ratings template
     */
    getCwmsDataRatingsTemplate(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsTemplateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get cwmsData ratings template with templateId
     */
    getCwmsDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['templateId'] == null) {
                throw new runtime.RequiredError('templateId', 'Required parameter "templateId" was null or undefined when calling getCwmsDataRatingsTemplateWithTemplateId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataRatingsTemplateWithTemplateId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/template/{template-id}`.replace(`{${"template-id"}}`, encodeURIComponent(String(requestParameters['templateId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RatingTemplateFromJSON));
        });
    }
    /**
     * Get cwmsData ratings template with templateId
     */
    getCwmsDataRatingsTemplateWithTemplateId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsTemplateWithTemplateIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns CWMS Rating Data
     * Get cwmsData ratings with ratingId
     */
    getCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingId'] == null) {
                throw new runtime.RequiredError('ratingId', 'Required parameter "ratingId" was null or undefined when calling getCwmsDataRatingsWithRatingId().');
            }
            if (requestParameters['office'] == null) {
                throw new runtime.RequiredError('office', 'Required parameter "office" was null or undefined when calling getCwmsDataRatingsWithRatingId().');
            }
            const queryParameters = {};
            if (requestParameters['office'] != null) {
                queryParameters['office'] = requestParameters['office'];
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
            if (requestParameters['method'] != null) {
                queryParameters['method'] = requestParameters['method'];
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Returns CWMS Rating Data
     * Get cwmsData ratings with ratingId
     */
    getCwmsDataRatingsWithRatingId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     */
    patchCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingId'] == null) {
                throw new runtime.RequiredError('ratingId', 'Required parameter "ratingId" was null or undefined when calling patchCwmsDataRatingsWithRatingId().');
            }
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling patchCwmsDataRatingsWithRatingId().');
            }
            const queryParameters = {};
            if (requestParameters['storeTemplate'] != null) {
                queryParameters['store-template'] = requestParameters['storeTemplate'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/xml;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/{rating-id}`.replace(`{${"rating-id"}}`, encodeURIComponent(String(requestParameters['ratingId']))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['body'],
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update a RatingSet
     * Patch cwmsData ratings with ratingId
     */
    patchCwmsDataRatingsWithRatingId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.patchCwmsDataRatingsWithRatingIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     */
    postCwmsDataRatingsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling postCwmsDataRatings().');
            }
            const queryParameters = {};
            if (requestParameters['storeTemplate'] != null) {
                queryParameters['store-template'] = requestParameters['storeTemplate'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/xml;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters['body'],
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new RatingSet
     * Post cwmsData ratings
     */
    postCwmsDataRatings(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataRatingsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     */
    postCwmsDataRatingsSpecRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingSpec'] == null) {
                throw new runtime.RequiredError('ratingSpec', 'Required parameter "ratingSpec" was null or undefined when calling postCwmsDataRatingsSpec().');
            }
            const queryParameters = {};
            if (requestParameters['failIfExists'] != null) {
                queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/xml;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/spec`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: RatingSpecToJSON(requestParameters['ratingSpec']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new Rating Specification
     * Post cwmsData ratings spec
     */
    postCwmsDataRatingsSpec(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataRatingsSpecRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     */
    postCwmsDataRatingsTemplateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['ratingTemplate'] == null) {
                throw new runtime.RequiredError('ratingTemplate', 'Required parameter "ratingTemplate" was null or undefined when calling postCwmsDataRatingsTemplate().');
            }
            const queryParameters = {};
            if (requestParameters['failIfExists'] != null) {
                queryParameters['fail-if-exists'] = requestParameters['failIfExists'];
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/xml;version=2';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // ApiKey authentication
            }
            const response = yield this.request({
                path: `/ratings/template`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: RatingTemplateToJSON(requestParameters['ratingTemplate']),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Create new Rating Template
     * Post cwmsData ratings template
     */
    postCwmsDataRatingsTemplate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postCwmsDataRatingsTemplateRaw(requestParameters, initOverrides);
        });
    }
}
