# CwmsRadar.TimeSeriesCategoriesBetaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesCategory**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategory) | **GET** /cwms-data/timeseries/category | Get cwmsData timeseries category
[**getCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategoryWithCategoryId) | **GET** /cwms-data/timeseries/category/{category-id} | Get cwmsData timeseries category with categoryId



## getCwmsDataTimeseriesCategory

> [TimeSeriesCategory] getCwmsDataTimeseriesCategory(opts)

Get cwmsData timeseries category

Returns CWMS timeseries category Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.TimeSeriesCategoriesBetaApi();
let opts = {
  'office': "office_example" // String | Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned.
};
apiInstance.getCwmsDataTimeseriesCategory(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. | [optional] 

### Return type

[**[TimeSeriesCategory]**](TimeSeriesCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesCategoryWithCategoryId

> TimeSeriesCategory getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office)

Get cwmsData timeseries category with categoryId

Retrieves requested timeseries category

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.TimeSeriesCategoriesBetaApi();
let categoryId = "categoryId_example"; // String | Specifies the Category whose data is to be included in the response.
let office = "office_example"; // String | Specifies the owning office of the timeseries category whose data is to be included in the response.
apiInstance.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, (error, data, response) => {
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
 **categoryId** | **String**| Specifies the Category whose data is to be included in the response. | 
 **office** | **String**| Specifies the owning office of the timeseries category whose data is to be included in the response. | 

### Return type

[**TimeSeriesCategory**](TimeSeriesCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

