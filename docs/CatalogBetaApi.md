# CwmsRadar.CatalogBetaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataCatalogWithDataset**](CatalogBetaApi.md#getCwmsDataCatalogWithDataset) | **GET** /cwms-data/catalog/{dataset} | Get cwmsData catalog with dataset



## getCwmsDataCatalogWithDataset

> Catalog getCwmsDataCatalogWithDataset(dataset, opts)

Get cwmsData catalog with dataset

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.CatalogBetaApi();
let dataset = new CwmsRadar.CatalogableEndpoint(); // CatalogableEndpoint | A list of what data? E.g. Timeseries, Locations, Ratings, etc
let opts = {
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are.
  'cursor': "cursor_example", // String | Deprecated. Use 'page' instead.
  'pageSize': 56, // Number | How many entires per page returned. Default 500.
  'pageSize2': 56, // Number | Deprecated. Use page-size.
  'unitSystem': new CwmsRadar.UnitSystem(), // UnitSystem | Deprecated. Use unit-system.
  'unitSystem2': new CwmsRadar.UnitSystem(), // UnitSystem | Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
  'office': "office_example", // String | 3-4 letter office name representing the district you want to isolate data to.
  'like': "like_example", // String | Posix regular expression matching against the id
  'timeseriesCategoryLike': "timeseriesCategoryLike_example", // String | Posix regular expression matching against the timeseries category id
  'timeseriesCategoryLike2': "timeseriesCategoryLike_example", // String | Deprecated. Use timeseries-category-like.
  'timeseriesGroupLike': "timeseriesGroupLike_example", // String | Posix regular expression matching against the timeseries group id
  'timeseriesGroupLike2': "timeseriesGroupLike_example", // String | Deprecated. Use timeseries-group-like.
  'locationCategoryLike': "locationCategoryLike_example", // String | Posix regular expression matching against the location category id
  'locationCategoryLike2': "locationCategoryLike_example", // String | Deprecated. Use location-category-like.
  'locationGroupLike': "locationGroupLike_example", // String | Posix regular expression matching against the location group id
  'locationGroupLike2': "locationGroupLike_example" // String | Deprecated. Use location-group-like.
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
 **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] 
 **pageSize** | **Number**| How many entires per page returned. Default 500. | [optional] 
 **pageSize2** | **Number**| Deprecated. Use page-size. | [optional] 
 **unitSystem** | [**UnitSystem**](.md)| Deprecated. Use unit-system. | [optional] 
 **unitSystem2** | [**UnitSystem**](.md)| Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI. | [optional] 
 **office** | **String**| 3-4 letter office name representing the district you want to isolate data to. | [optional] 
 **like** | **String**| Posix regular expression matching against the id | [optional] 
 **timeseriesCategoryLike** | **String**| Posix regular expression matching against the timeseries category id | [optional] 
 **timeseriesCategoryLike2** | **String**| Deprecated. Use timeseries-category-like. | [optional] 
 **timeseriesGroupLike** | **String**| Posix regular expression matching against the timeseries group id | [optional] 
 **timeseriesGroupLike2** | **String**| Deprecated. Use timeseries-group-like. | [optional] 
 **locationCategoryLike** | **String**| Posix regular expression matching against the location category id | [optional] 
 **locationCategoryLike2** | **String**| Deprecated. Use location-category-like. | [optional] 
 **locationGroupLike** | **String**| Posix regular expression matching against the location group id | [optional] 
 **locationGroupLike2** | **String**| Deprecated. Use location-group-like. | [optional] 

### Return type

[**Catalog**](Catalog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml

