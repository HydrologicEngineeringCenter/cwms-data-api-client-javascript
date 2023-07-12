# CatalogBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataCatalogWithDataset**](CatalogBetaApi.md#getCwmsDataCatalogWithDataset) | **GET** /cwms-data/catalog/{dataset} | Get cwmsData catalog with dataset |


<a name="getCwmsDataCatalogWithDataset"></a>
# **getCwmsDataCatalogWithDataset**
> Catalog getCwmsDataCatalogWithDataset(dataset, page, cursor, pageSize, pageSize2, unitSystem, unitSystem2, office, like, timeseriesCategoryLike, timeseriesCategoryLike2, timeseriesGroupLike, timeseriesGroupLike2, locationCategoryLike, locationCategoryLike2, locationGroupLike, locationGroupLike2)

Get cwmsData catalog with dataset

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.CatalogBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    CatalogBetaApi apiInstance = new CatalogBetaApi(defaultClient);
    CatalogableEndpoint dataset = CatalogableEndpoint.fromValue("TIMESERIES"); // CatalogableEndpoint | A list of what data? E.g. Timeseries, Locations, Ratings, etc
    String page = "page_example"; // String | This end point can return a lot of data, this identifies where in the request you are.
    String cursor = "cursor_example"; // String | Deprecated. Use 'page' instead.
    Integer pageSize = 56; // Integer | How many entires per page returned. Default 500.
    Integer pageSize2 = 56; // Integer | Deprecated. Use page-size.
    UnitSystem unitSystem = UnitSystem.fromValue("SI"); // UnitSystem | Deprecated. Use unit-system.
    UnitSystem unitSystem2 = UnitSystem.fromValue("SI"); // UnitSystem | Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI.
    String office = "office_example"; // String | 3-4 letter office name representing the district you want to isolate data to.
    String like = "like_example"; // String | Posix regular expression matching against the id
    String timeseriesCategoryLike = "timeseriesCategoryLike_example"; // String | Posix regular expression matching against the timeseries category id
    String timeseriesCategoryLike2 = "timeseriesCategoryLike_example"; // String | Deprecated. Use timeseries-category-like.
    String timeseriesGroupLike = "timeseriesGroupLike_example"; // String | Posix regular expression matching against the timeseries group id
    String timeseriesGroupLike2 = "timeseriesGroupLike_example"; // String | Deprecated. Use timeseries-group-like.
    String locationCategoryLike = "locationCategoryLike_example"; // String | Posix regular expression matching against the location category id
    String locationCategoryLike2 = "locationCategoryLike_example"; // String | Deprecated. Use location-category-like.
    String locationGroupLike = "locationGroupLike_example"; // String | Posix regular expression matching against the location group id
    String locationGroupLike2 = "locationGroupLike_example"; // String | Deprecated. Use location-group-like.
    try {
      Catalog result = apiInstance.getCwmsDataCatalogWithDataset(dataset, page, cursor, pageSize, pageSize2, unitSystem, unitSystem2, office, like, timeseriesCategoryLike, timeseriesCategoryLike2, timeseriesGroupLike, timeseriesGroupLike2, locationCategoryLike, locationCategoryLike2, locationGroupLike, locationGroupLike2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CatalogBetaApi#getCwmsDataCatalogWithDataset");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataset** | [**CatalogableEndpoint**](.md)| A list of what data? E.g. Timeseries, Locations, Ratings, etc | [enum: TIMESERIES, LOCATIONS] |
| **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. | [optional] |
| **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] |
| **pageSize** | **Integer**| How many entires per page returned. Default 500. | [optional] |
| **pageSize2** | **Integer**| Deprecated. Use page-size. | [optional] |
| **unitSystem** | [**UnitSystem**](.md)| Deprecated. Use unit-system. | [optional] [enum: SI, EN] |
| **unitSystem2** | [**UnitSystem**](.md)| Unit System desired in response. Can be SI (International Scientific) or EN (Imperial.) If unspecified, defaults to SI. | [optional] [enum: SI, EN] |
| **office** | **String**| 3-4 letter office name representing the district you want to isolate data to. | [optional] |
| **like** | **String**| Posix regular expression matching against the id | [optional] |
| **timeseriesCategoryLike** | **String**| Posix regular expression matching against the timeseries category id | [optional] |
| **timeseriesCategoryLike2** | **String**| Deprecated. Use timeseries-category-like. | [optional] |
| **timeseriesGroupLike** | **String**| Posix regular expression matching against the timeseries group id | [optional] |
| **timeseriesGroupLike2** | **String**| Deprecated. Use timeseries-group-like. | [optional] |
| **locationCategoryLike** | **String**| Posix regular expression matching against the location category id | [optional] |
| **locationCategoryLike2** | **String**| Deprecated. Use location-category-like. | [optional] |
| **locationGroupLike** | **String**| Posix regular expression matching against the location group id | [optional] |
| **locationGroupLike2** | **String**| Deprecated. Use location-group-like. | [optional] |

### Return type

[**Catalog**](Catalog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | A list of elements the data set you&#39;ve selected. |  -  |

