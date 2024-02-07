# Cwmsjs.CatalogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataCatalogWithDataset**](CatalogApi.md#getCwmsDataCatalogWithDataset) | **GET** /cwms-data/catalog/{dataset} | Get cwmsData catalog with dataset



## getCwmsDataCatalogWithDataset

> Catalog getCwmsDataCatalogWithDataset(dataset, opts)

Get cwmsData catalog with dataset

### Example

```javascript
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.CatalogApi();
let dataset = new Cwmsjs.CatalogableEndpoint(); // CatalogableEndpoint | A list of what data? E.g. Timeseries, Locations, Ratings, etc
let opts = {
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are.
  'pageSize': 56, // Number | How many entires per page returned. Default 500.
  'unitSystem': new Cwmsjs.UnitSystem(), // UnitSystem | Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
  'office': "office_example", // String | 3-4 letter office name representing the district you want to isolate data to.
  'like': "like_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the id
  'timeseriesCategoryLike': "timeseriesCategoryLike_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id
  'timeseriesGroupLike': "timeseriesGroupLike_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id
  'locationCategoryLike': "locationCategoryLike_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id
  'locationGroupLike': "locationGroupLike_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the location group id
  'boundingOfficeLike': "boundingOfficeLike_example" // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the location bounding office. When this field is used items with no bounding office set will not be present in results.
};
apiInstance.getCwmsDataCatalogWithDataset(dataset, opts, (error, data, response) => {
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
 **dataset** | [**CatalogableEndpoint**](.md)| A list of what data? E.g. Timeseries, Locations, Ratings, etc | 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. | [optional] 
 **pageSize** | **Number**| How many entires per page returned. Default 500. | [optional] 
 **unitSystem** | [**UnitSystem**](.md)| Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI. | [optional] 
 **office** | **String**| 3-4 letter office name representing the district you want to isolate data to. | [optional] 
 **like** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id | [optional] 
 **timeseriesCategoryLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id | [optional] 
 **timeseriesGroupLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id | [optional] 
 **locationCategoryLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id | [optional] 
 **locationGroupLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id | [optional] 
 **boundingOfficeLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results. | [optional] 

### Return type

[**Catalog**](Catalog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;version=2, application/xml, application/json

