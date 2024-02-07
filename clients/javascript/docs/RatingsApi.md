# CwmsDataApi.RatingsApi

All URIs are relative to *http://localhost*

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



## deleteCwmsDataRatingsSpecWithRatingId

> deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method)

Delete cwmsData ratings spec with ratingId

Deletes requested rating specification

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingId = "ratingId_example"; // String | The rating-spec-id of the ratings data to be deleted.
let office = "office_example"; // String | Specifies the owning office of the ratings to be deleted.
let method = new CwmsDataApi.DeleteMethod(); // DeleteMethod | Specifies the delete method used.
apiInstance.deleteCwmsDataRatingsSpecWithRatingId(ratingId, office, method, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **String**| The rating-spec-id of the ratings data to be deleted. | 
 **office** | **String**| Specifies the owning office of the ratings to be deleted. | 
 **method** | [**DeleteMethod**](.md)| Specifies the delete method used. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCwmsDataRatingsTemplateWithTemplateId

> deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method)

Delete cwmsData ratings template with templateId

Deletes requested rating specification

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let templateId = "templateId_example"; // String | The rating-template-id of the ratings data to be deleted.
let office = "office_example"; // String | Specifies the owning office of the ratings to be deleted.
let method = new CwmsDataApi.DeleteMethod(); // DeleteMethod | Specifies the delete method used.
apiInstance.deleteCwmsDataRatingsTemplateWithTemplateId(templateId, office, method, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| The rating-template-id of the ratings data to be deleted. | 
 **office** | **String**| Specifies the owning office of the ratings to be deleted. | 
 **method** | [**DeleteMethod**](.md)| Specifies the delete method used. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCwmsDataRatingsWithRatingId

> deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, opts)

Delete cwmsData ratings with ratingId

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingId = "ratingId_example"; // String | The rating-id of the effective dates to be deleted. 
let office = "office_example"; // String | Specifies the office of the ratings to be deleted.
let begin = "begin_example"; // String | The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
let end = "end_example"; // String | The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., 'YYYY-MM-dd'T'hh:mm:ss[Z'['VV']']', e.g., '2021-06-10T13:00:00-0700[PST8PDT]'.
let opts = {
  'timezone': "timezone_example" // String | This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC.
};
apiInstance.deleteCwmsDataRatingsWithRatingId(ratingId, office, begin, end, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **String**| The rating-id of the effective dates to be deleted.  | 
 **office** | **String**| Specifies the office of the ratings to be deleted. | 
 **begin** | **String**| The start of the time window to delete. The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | 
 **end** | **String**| The end of the time window to delete.The format for this field is ISO 8601 extended, with optional offset and timezone, i.e., &#39;YYYY-MM-dd&#39;T&#39;hh:mm:ss[Z&#39;[&#39;VV&#39;]&#39;]&#39;, e.g., &#39;2021-06-10T13:00:00-0700[PST8PDT]&#39;. | 
 **timezone** | **String**| This field specifies a default timezone to be used if the format of the begin, end, or version-date parameters do not include offset or time zone information. Defaults to UTC. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataRatings

> Object getCwmsDataRatings(opts)

Get cwmsData ratings

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let opts = {
  'name': "name_example", // String | Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names.
  'office': "office_example", // String | Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'unit': "unit_example", // String | Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
  'datum': "datum_example", // String | Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
  'at': "at_example", // String | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
  'end': "end_example", // String | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
  'format': "format_example" // String | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default)
};
apiInstance.getCwmsDataRatings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Specifies the name(s) of the rating whose data is to be included in the response. A case insensitive comparison is used to match names. | [optional] 
 **office** | **String**| Specifies the owning office of the Rating(s) whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:  1. EN.   Specifies English unit system.  Rating values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Rating values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] 
 **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation Ratings. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] 
 **at** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. | [optional] 
 **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time | [optional] 
 **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | [optional] 
 **format** | **String**| Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.    json (default) | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml, text/tab-separated-values, text/csv


## getCwmsDataRatingsMetadata

> RatingMetadataList getCwmsDataRatingsMetadata(opts)

Get cwmsData ratings metadata

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'ratingIdMask': "ratingIdMask_example", // String | RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
  'start': "start_example", // String | Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used.
  'end': "end_example", // String | Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used.
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 50.
};
apiInstance.getCwmsDataRatingsMetadata(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] 
 **ratingIdMask** | **String**| RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. | [optional] 
 **start** | **String**| Specifies the start of the time window of the effective dates to be included. If this field is not specified no start time will be used. | [optional] 
 **end** | **String**| Specifies the end of the time window for effective dates to be included. If this field is not specified no end time will be used. | [optional] 
 **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified). If this field is not specified, the default time zone of UTC shall be used. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 50. | [optional] 

### Return type

[**RatingMetadataList**](RatingMetadataList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataRatingsSpec

> RatingSpecs getCwmsDataRatingsSpec(opts)

Get cwmsData ratings spec

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'ratingIdMask': "ratingIdMask_example", // String | Posix <a href=\"regexp.html\">regular expression</a>  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 100.
};
apiInstance.getCwmsDataRatingsSpec(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] 
 **ratingIdMask** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt;  that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 100. | [optional] 

### Return type

[**RatingSpecs**](RatingSpecs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataRatingsSpecWithRatingId

> RatingSpec getCwmsDataRatingsSpecWithRatingId(ratingId, office)

Get cwmsData ratings spec with ratingId

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingId = "ratingId_example"; // String | Specifies the rating-id of the Rating Spec to be included in the response
let office = "office_example"; // String | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
apiInstance.getCwmsDataRatingsSpecWithRatingId(ratingId, office, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **String**| Specifies the rating-id of the Rating Spec to be included in the response | 
 **office** | **String**| Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | 

### Return type

[**RatingSpec**](RatingSpec.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataRatingsTemplate

> RatingTemplates getCwmsDataRatingsTemplate(opts)

Get cwmsData ratings template

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'templateIdMask': "templateIdMask_example", // String | RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 100.
};
apiInstance.getCwmsDataRatingsTemplate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] 
 **templateIdMask** | **String**| RegExp that specifies the rating template IDs to be included in the response. If this field is not specified, all rating templates shall be returned. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 100. | [optional] 

### Return type

[**RatingTemplates**](RatingTemplates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataRatingsTemplateWithTemplateId

> [RatingTemplate] getCwmsDataRatingsTemplateWithTemplateId(templateId, office)

Get cwmsData ratings template with templateId

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let templateId = "templateId_example"; // String | Specifies the template whose data is to be included in the response
let office = "office_example"; // String | Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
apiInstance.getCwmsDataRatingsTemplateWithTemplateId(templateId, office, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| Specifies the template whose data is to be included in the response | 
 **office** | **String**| Specifies the owning office of the Rating Templates whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | 

### Return type

[**[RatingTemplate]**](RatingTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataRatingsWithRatingId

> Object getCwmsDataRatingsWithRatingId(ratingId, office, opts)

Get cwmsData ratings with ratingId

Returns CWMS Rating Data

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingId = "ratingId_example"; // String | The rating-id of the effective dates to be retrieve. 
let office = "office_example"; // String | Specifies the owning office of the ratingset to be included in the response.
let opts = {
  'begin': "begin_example", // String | Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
  'end': "end_example", // String | Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
  'method': new CwmsDataApi.DatabaseLoadMethod() // DatabaseLoadMethod | Specifies the retrieval method used.  If no method is provided EAGER will be used.
};
apiInstance.getCwmsDataRatingsWithRatingId(ratingId, office, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **String**| The rating-id of the effective dates to be retrieve.  | 
 **office** | **String**| Specifies the owning office of the ratingset to be included in the response. | 
 **begin** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used. | [optional] 
 **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used. | [optional] 
 **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | [optional] 
 **method** | [**DatabaseLoadMethod**](.md)| Specifies the retrieval method used.  If no method is provided EAGER will be used. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml;version=2


## patchCwmsDataRatingsWithRatingId

> patchCwmsDataRatingsWithRatingId(ratingId, body, opts)

Patch cwmsData ratings with ratingId

Update a RatingSet

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingId = "ratingId_example"; // String | 
let body = {key: null}; // Object | 
let opts = {
  'storeTemplate': true // Boolean | Also store updates to the rating template. Default: true
};
apiInstance.patchCwmsDataRatingsWithRatingId(ratingId, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingId** | **String**|  | 
 **body** | **Object**|  | 
 **storeTemplate** | **Boolean**| Also store updates to the rating template. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/xml;version=2, application/json;version=2
- **Accept**: application/json


## postCwmsDataRatings

> postCwmsDataRatings(body, opts)

Post cwmsData ratings

Create new RatingSet

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let body = {key: null}; // Object | 
let opts = {
  'storeTemplate': true // Boolean | Also store updates to the rating template. Default: true
};
apiInstance.postCwmsDataRatings(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 
 **storeTemplate** | **Boolean**| Also store updates to the rating template. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/xml;version=2, application/json;version=2
- **Accept**: application/json


## postCwmsDataRatingsSpec

> postCwmsDataRatingsSpec(ratingSpec, opts)

Post cwmsData ratings spec

Create new Rating Specification

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingSpec = new CwmsDataApi.RatingSpec(); // RatingSpec | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataRatingsSpec(ratingSpec, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingSpec** | [**RatingSpec**](RatingSpec.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/xml;version=2
- **Accept**: application/json


## postCwmsDataRatingsTemplate

> postCwmsDataRatingsTemplate(ratingTemplate, opts)

Post cwmsData ratings template

Create new Rating Template

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.RatingsApi();
let ratingTemplate = new CwmsDataApi.RatingTemplate(); // RatingTemplate | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataRatingsTemplate(ratingTemplate, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingTemplate** | [**RatingTemplate**](RatingTemplate.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/xml;version=2
- **Accept**: application/json

