# CwmsRadar.RatingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataRatingsWithRating**](RatingsApi.md#deleteCwmsDataRatingsWithRating) | **DELETE** /cwms-data/ratings/{rating} | Delete cwmsData ratings with rating
[**getCwmsDataRatings**](RatingsApi.md#getCwmsDataRatings) | **GET** /cwms-data/ratings | Get cwmsData ratings
[**getCwmsDataRatingsMetadata**](RatingsApi.md#getCwmsDataRatingsMetadata) | **GET** /cwms-data/ratings/metadata | Get cwmsData ratings metadata
[**getCwmsDataRatingsSpec**](RatingsApi.md#getCwmsDataRatingsSpec) | **GET** /cwms-data/ratings/spec | Get cwmsData ratings spec
[**getCwmsDataRatingsSpecWithRatingId**](RatingsApi.md#getCwmsDataRatingsSpecWithRatingId) | **GET** /cwms-data/ratings/spec/{rating-id} | Get cwmsData ratings spec with ratingId
[**getCwmsDataRatingsTemplate**](RatingsApi.md#getCwmsDataRatingsTemplate) | **GET** /cwms-data/ratings/template | Get cwmsData ratings template
[**getCwmsDataRatingsTemplateWithTemplateId**](RatingsApi.md#getCwmsDataRatingsTemplateWithTemplateId) | **GET** /cwms-data/ratings/template/{template-id} | Get cwmsData ratings template with templateId
[**getCwmsDataRatingsWithRating**](RatingsApi.md#getCwmsDataRatingsWithRating) | **GET** /cwms-data/ratings/{rating} | Get cwmsData ratings with rating
[**patchCwmsDataRatingsWithRating**](RatingsApi.md#patchCwmsDataRatingsWithRating) | **PATCH** /cwms-data/ratings/{rating} | Patch cwmsData ratings with rating
[**postCwmsDataRatings**](RatingsApi.md#postCwmsDataRatings) | **POST** /cwms-data/ratings | Post cwmsData ratings



## deleteCwmsDataRatingsWithRating

> deleteCwmsDataRatingsWithRating(rating, office)

Delete cwmsData ratings with rating

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
let rating = "rating_example"; // String | 
let office = "office_example"; // String | Specifies the owning office of the rating to be deleted.
apiInstance.deleteCwmsDataRatingsWithRating(rating, office, (error, data, response) => {
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
 **rating** | **String**|  | 
 **office** | **String**| Specifies the owning office of the rating to be deleted. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataRatings

> Object getCwmsDataRatings(opts)

Get cwmsData ratings

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Rating Specs whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'ratingIdMask': "ratingIdMask_example", // String | RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned.
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
 **ratingIdMask** | **String**| RegExp that specifies the rating IDs to be included in the response. If this field is not specified, all Rating Specs shall be returned. | [optional] 
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
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


## getCwmsDataRatingsWithRating

> Object getCwmsDataRatingsWithRating(rating, office, opts)

Get cwmsData ratings with rating

Returns CWMS Rating Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
let rating = "rating_example"; // String | 
let office = "office_example"; // String | Specifies the owning office of the ratingset to be included in the response.
let opts = {
  'begin': "begin_example", // String | Specifies the start of the time window for data to be included in the response. If this field is not specified no start time will be used.
  'end': "end_example", // String | Specifies the end of the time window for data to be included in the response. If this field is not specified no end time will be used.
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
  'method': new CwmsRadar.DatabaseLoadMethod() // DatabaseLoadMethod | Specifies the retrieval method used.  If no method is provided EAGER will be used.
};
apiInstance.getCwmsDataRatingsWithRating(rating, office, opts, (error, data, response) => {
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
 **rating** | **String**|  | 
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


## patchCwmsDataRatingsWithRating

> patchCwmsDataRatingsWithRating(rating, body)

Patch cwmsData ratings with rating

Update a RatingSet

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
let rating = "rating_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.patchCwmsDataRatingsWithRating(rating, body, (error, data, response) => {
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
 **rating** | **String**|  | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/xml;version=2, application/json;version=2
- **Accept**: application/json


## postCwmsDataRatings

> postCwmsDataRatings(body)

Post cwmsData ratings

Create new RatingSet

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.RatingsApi();
let body = {key: null}; // Object | 
apiInstance.postCwmsDataRatings(body, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/xml;version=2, application/json;version=2
- **Accept**: application/json

