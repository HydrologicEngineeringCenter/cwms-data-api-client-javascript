# cwmsjs.RatingsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataRatingsSpecWithRatingId**](RatingsApi.md#deleteCwmsDataRatingsSpecWithRatingId) | **DELETE** /cwms-data/ratings/spec/{rating-id} | Delete cwmsData ratings spec with ratingId
[**deleteCwmsDataRatingsTemplateWithTemplateId**](RatingsApi.md#deleteCwmsDataRatingsTemplateWithTemplateId) | **DELETE** /cwms-data/ratings/template/{template-id} | Delete cwmsData ratings template with templateId
[**deleteCwmsDataRatingsWithRatingId**](RatingsApi.md#deleteCwmsDataRatingsWithRatingId) | **DELETE** /cwms-data/ratings/{rating-id} | Delete cwmsData ratings with ratingId
[**getCwmsDataRatings**](RatingsApi.md#getCwmsDataRatings) | **GET** /cwms-data/ratings | Get cwmsData ratings
[**getCwmsDataRatingsMetadata**](RatingsApi.md#getCwmsDataRatingsMetadata) | **GET** /cwms-data/ratings/metadata | Get cwmsData ratings metadata
[**getCwmsDataRatingsSpec**](RatingsApi.md#getCwmsDataRatingsSpec) | **GET** /cwms-data/ratings/spec | Get cwmsData ratings spec
[**getCwmsDataRatingsSpecWithRatingId**](RatingsApi.md#getCwmsDataRatingsSpecWithRatingId) | **GET** /cwms-data/ratings/spec/{rating-id} | Get cwmsData ratings spec with ratingId
[**getCwmsDataRatingsTemplate**](RatingsApi.md#getCwmsDataRatingsTemplate) | **GET** /cwms-data/ratings/template | Get cwmsData ratings template
[**getCwmsDataRatingsTemplateWithTemplateId**](RatingsApi.md#getCwmsDataRatingsTemplateWithTemplateId) | **GET** /cwms-data/ratings/template/{template-id} | Get cwmsData ratings template with templateId
[**getCwmsDataRatingsWithRatingId**](RatingsApi.md#getCwmsDataRatingsWithRatingId) | **GET** /cwms-data/ratings/{rating-id} | Get cwmsData ratings with ratingId
[**patchCwmsDataRatingsWithRatingId**](RatingsApi.md#patchCwmsDataRatingsWithRatingId) | **PATCH** /cwms-data/ratings/{rating-id} | Patch cwmsData ratings with ratingId
[**postCwmsDataRatings**](RatingsApi.md#postCwmsDataRatings) | **POST** /cwms-data/ratings | Post cwmsData ratings
[**postCwmsDataRatingsSpec**](RatingsApi.md#postCwmsDataRatingsSpec) | **POST** /cwms-data/ratings/spec | Post cwmsData ratings spec
[**postCwmsDataRatingsTemplate**](RatingsApi.md#postCwmsDataRatingsTemplate) | **POST** /cwms-data/ratings/template | Post cwmsData ratings template


# **deleteCwmsDataRatingsSpecWithRatingId**
> deleteCwmsDataRatingsSpecWithRatingId()

Deletes requested rating specification

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiDeleteCwmsDataRatingsSpecWithRatingIdRequest = {
  // string | The rating-spec-id of the ratings data to be deleted.
  ratingId: "rating-id_example",
  // string | Specifies the owning office of the ratings to be deleted.
  office: "office_example",
  // DeleteMethod | Specifies the delete method used.
  method: "DELETE_ALL",
};

apiInstance.deleteCwmsDataRatingsSpecWithRatingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | [**string**] | The rating-spec-id of the ratings data to be deleted. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the ratings to be deleted. | defaults to undefined
 **method** | **DeleteMethod** | Specifies the delete method used. | defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCwmsDataRatingsTemplateWithTemplateId**
> deleteCwmsDataRatingsTemplateWithTemplateId()

Deletes requested rating specification

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiDeleteCwmsDataRatingsTemplateWithTemplateIdRequest = {
  // string | The rating-template-id of the ratings data to be deleted.
  templateId: "template-id_example",
  // string | Specifies the owning office of the ratings to be deleted.
  office: "office_example",
  // DeleteMethod | Specifies the delete method used.
  method: "DELETE_ALL",
};

apiInstance.deleteCwmsDataRatingsTemplateWithTemplateId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The rating-template-id of the ratings data to be deleted. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the ratings to be deleted. | defaults to undefined
 **method** | **DeleteMethod** | Specifies the delete method used. | defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCwmsDataRatingsWithRatingId**
> deleteCwmsDataRatingsWithRatingId()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiDeleteCwmsDataRatingsWithRatingIdRequest = {
  // string | The rating-id of the effective dates to be deleted. 
  ratingId: "rating-id_example",
  // string | Specifies the office of the ratings to be deleted.
  office: "office_example",
  // string | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'.
  begin: "begin_example",
  // string | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \'YYYY-MM-dd\'T\'hh:mm:ss[Z\'[\'VV\']\']\', e.g., \'2021-06-10T13:00:00-0700[PST8PDT]\'.
  end: "end_example",
  // string | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. (optional)
  timezone: "timezone_example",
};

apiInstance.deleteCwmsDataRatingsWithRatingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | [**string**] | The rating-id of the effective dates to be deleted.  | defaults to undefined
 **office** | [**string**] | Specifies the office of the ratings to be deleted. | defaults to undefined
 **begin** | [**string**] | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | defaults to undefined
 **end** | [**string**] | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., \&#39;YYYY-MM-dd\&#39;T\&#39;hh:mm:ss[Z\&#39;[\&#39;VV\&#39;]\&#39;]\&#39;, e.g., \&#39;2021-06-10T13:00:00-0700[PST8PDT]\&#39;. | defaults to undefined
 **timezone** | [**string**] | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatings**
> any getCwmsDataRatings()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsRequest = {
  // string | Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names. (optional)
  name: "name_example",
  // string | Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
  // string | Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. (optional)
  datum: "datum_example",
  // string | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. (optional)
  at: "at_example",
  // string | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
  // string | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default) (optional)
  format: "format_example",
};

apiInstance.getCwmsDataRatings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names. | (optional) defaults to undefined
 **office** | [**string**] | Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | (optional) defaults to undefined
 **datum** | [**string**] | Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | (optional) defaults to undefined
 **at** | [**string**] | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined
 **format** | [**string**] | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default) | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/tab-separated-values, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | The provided combination of parameters did not find a rating table. |  -  |
**200** | OK |  -  |
**501** | Requested format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsMetadata**
> RatingMetadataList getCwmsDataRatingsMetadata()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsMetadataRequest = {
  // string | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. (optional)
  office: "office_example",
  // string | RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. (optional)
  ratingIdMask: "rating-id-mask_example",
  // string | Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used. (optional)
  start: "start_example",
  // string | Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used. (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 50. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataRatingsMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | (optional) defaults to undefined
 **ratingIdMask** | [**string**] | RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. | (optional) defaults to undefined
 **start** | [**string**] | Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 50. | (optional) defaults to undefined


### Return type

**RatingMetadataList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsSpec**
> RatingSpecs getCwmsDataRatingsSpec()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsSpecRequest = {
  // string | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a>  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. (optional)
  ratingIdMask: "rating-id-mask_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 100. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataRatingsSpec(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | (optional) defaults to undefined
 **ratingIdMask** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 100. | (optional) defaults to undefined


### Return type

**RatingSpecs**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsSpecWithRatingId**
> RatingSpec getCwmsDataRatingsSpecWithRatingId()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsSpecWithRatingIdRequest = {
  // string | Specifies the rating-id of the Rating Spec to be included in the response
  ratingId: "rating-id_example",
  // string | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  office: "office_example",
};

apiInstance.getCwmsDataRatingsSpecWithRatingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | [**string**] | Specifies the rating-id of the Rating Spec to be included in the response | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | defaults to undefined


### Return type

**RatingSpec**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsTemplate**
> RatingTemplates getCwmsDataRatingsTemplate()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsTemplateRequest = {
  // string | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. (optional)
  office: "office_example",
  // string | RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned. (optional)
  templateIdMask: "template-id-mask_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 100. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataRatingsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | (optional) defaults to undefined
 **templateIdMask** | [**string**] | RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 100. | (optional) defaults to undefined


### Return type

**RatingTemplates**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsTemplateWithTemplateId**
> Array<RatingTemplate> getCwmsDataRatingsTemplateWithTemplateId()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsTemplateWithTemplateIdRequest = {
  // string | Specifies the template whose data is to be included in the response
  templateId: "template-id_example",
  // string | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  office: "office_example",
};

apiInstance.getCwmsDataRatingsTemplateWithTemplateId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | Specifies the template whose data is to be included in the response | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | defaults to undefined


### Return type

**Array<RatingTemplate>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataRatingsWithRatingId**
> any getCwmsDataRatingsWithRatingId()

Returns CWMS Rating Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiGetCwmsDataRatingsWithRatingIdRequest = {
  // string | The rating-id of the effective dates to be retrieve. 
  ratingId: "rating-id_example",
  // string | Specifies the owning office of the ratingset to be included in the response.
  office: "office_example",
  // string | Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used. (optional)
  begin: "begin_example",
  // string | Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used. (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
  // DatabaseLoadMethod | Specifies the retrieval method used.  If no method is provided EAGER will be used. (optional)
  method: "EAGER",
};

apiInstance.getCwmsDataRatingsWithRatingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | [**string**] | The rating-id of the effective dates to be retrieve.  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the ratingset to be included in the response. | defaults to undefined
 **begin** | [**string**] | Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined
 **method** | **DatabaseLoadMethod** | Specifies the retrieval method used.  If no method is provided EAGER will be used. | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataRatingsWithRatingId**
> patchCwmsDataRatingsWithRatingId(body)

Update a RatingSet

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiPatchCwmsDataRatingsWithRatingIdRequest = {
  // string
  ratingId: "rating-id_example",
  // any
  body: {},
  // boolean | Also store updates to the rating template. Default: true (optional)
  storeTemplate: true,
};

apiInstance.patchCwmsDataRatingsWithRatingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **ratingId** | [**string**] |  | defaults to undefined
 **storeTemplate** | [**boolean**] | Also store updates to the rating template. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/xml;version=2, application/json;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataRatings**
> postCwmsDataRatings(body)

Create new RatingSet

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiPostCwmsDataRatingsRequest = {
  // any
  body: {},
  // boolean | Also store updates to the rating template. Default: true (optional)
  storeTemplate: true,
};

apiInstance.postCwmsDataRatings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **storeTemplate** | [**boolean**] | Also store updates to the rating template. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/xml;version=2, application/json;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataRatingsSpec**
> postCwmsDataRatingsSpec(ratingSpec)

Create new Rating Specification

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiPostCwmsDataRatingsSpecRequest = {
  // RatingSpec
  ratingSpec: {
    officeId: "officeId_example",
    ratingId: "ratingId_example",
    templateId: "templateId_example",
    locationId: "locationId_example",
    version: "version_example",
    sourceAgency: "sourceAgency_example",
    inRangeMethod: "inRangeMethod_example",
    outRangeLowMethod: "outRangeLowMethod_example",
    outRangeHighMethod: "outRangeHighMethod_example",
    active: true,
    autoUpdate: true,
    autoActivate: true,
    autoMigrateExtension: true,
    independentRoundingSpecs: [
      {
        position: 1,
        value: "value_example",
      },
    ],
    dependentRoundingSpec: "dependentRoundingSpec_example",
    description: "description_example",
    effectiveDates: [
      new Date('1970-01-01T00:00:00.00Z'),
    ],
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataRatingsSpec(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingSpec** | **RatingSpec**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/xml;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataRatingsTemplate**
> postCwmsDataRatingsTemplate(ratingTemplate)

Create new Rating Template

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.RatingsApi(configuration);

let body:cwmsjs.RatingsApiPostCwmsDataRatingsTemplateRequest = {
  // RatingTemplate
  ratingTemplate: {
    officeId: "officeId_example",
    id: "id_example",
    version: "version_example",
    description: "description_example",
    dependentParameter: "dependentParameter_example",
    independentParameterSpecs: [
      {
        parameter: "parameter_example",
        inRangeMethod: "inRangeMethod_example",
        outRangeLowMethod: "outRangeLowMethod_example",
        outRangeHighMethod: "outRangeHighMethod_example",
      },
    ],
    ratingIds: [
      "ratingIds_example",
    ],
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataRatingsTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingTemplate** | **RatingTemplate**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/xml;version=2
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


