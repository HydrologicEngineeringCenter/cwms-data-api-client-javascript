# cwmsjs.CatalogApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataCatalogWithDataset**](CatalogApi.md#getCwmsDataCatalogWithDataset) | **GET** /cwms-data/catalog/{dataset} | Get cwmsData catalog with dataset


# **getCwmsDataCatalogWithDataset**
> Catalog getCwmsDataCatalogWithDataset()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.CatalogApi(configuration);

let body:cwmsjs.CatalogApiGetCwmsDataCatalogWithDatasetRequest = {
  // CatalogableEndpoint | A list of what data? E.g. Timeseries, Locations, Ratings, etc
  dataset: "TIMESERIES",
  // string | This end point can return a lot of data, this identifies where in the request you are. (optional)
  page: "page_example",
  // number | How many entires per page returned. Default 500. (optional)
  pageSize: 1,
  // UnitSystem | Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI. (optional)
  unitSystem: "SI",
  // string | 3-4 letter office name representing the district you want to isolate data to. (optional)
  office: "office_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the id (optional)
  like: "like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id (optional)
  timeseriesCategoryLike: "timeseries-category-like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id (optional)
  timeseriesGroupLike: "timeseries-group-like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id (optional)
  locationCategoryLike: "location-category-like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the location group id (optional)
  locationGroupLike: "location-group-like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the location bounding office. When this field is used items with no bounding office set will not be present in results. (optional)
  boundingOfficeLike: "bounding-office-like_example",
};

apiInstance.getCwmsDataCatalogWithDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataset** | **CatalogableEndpoint** | A list of what data? E.g. Timeseries, Locations, Ratings, etc | defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entires per page returned. Default 500. | (optional) defaults to undefined
 **unitSystem** | **UnitSystem** | Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI. | (optional) defaults to undefined
 **office** | [**string**] | 3-4 letter office name representing the district you want to isolate data to. | (optional) defaults to undefined
 **like** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id | (optional) defaults to undefined
 **timeseriesCategoryLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id | (optional) defaults to undefined
 **timeseriesGroupLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id | (optional) defaults to undefined
 **locationCategoryLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id | (optional) defaults to undefined
 **locationGroupLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location group id | (optional) defaults to undefined
 **boundingOfficeLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location bounding office. When this field is used items with no bounding office set will not be present in results. | (optional) defaults to undefined


### Return type

**Catalog**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | A list of elements the data set you\&#39;ve selected. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


