# Cwmsjs.TimeSeriesCategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesApi.md#deleteCwmsDataTimeseriesCategoryWithCategoryId) | **DELETE** /cwms-data/timeseries/category/{category-id} | Delete cwmsData timeseries category with categoryId
[**getCwmsDataTimeseriesCategory**](TimeSeriesCategoriesApi.md#getCwmsDataTimeseriesCategory) | **GET** /cwms-data/timeseries/category | Get cwmsData timeseries category
[**getCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesApi.md#getCwmsDataTimeseriesCategoryWithCategoryId) | **GET** /cwms-data/timeseries/category/{category-id} | Get cwmsData timeseries category with categoryId
[**postCwmsDataTimeseriesCategory**](TimeSeriesCategoriesApi.md#postCwmsDataTimeseriesCategory) | **POST** /cwms-data/timeseries/category | Post cwmsData timeseries category



## deleteCwmsDataTimeseriesCategoryWithCategoryId

> deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, opts)

Delete cwmsData timeseries category with categoryId

Deletes requested time series category

### Example

```javascript
import Cwmsjs from 'CWMSJS';
let defaultClient = Cwmsjs.ApiClient.instance;
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

let apiInstance = new Cwmsjs.TimeSeriesCategoriesApi();
let categoryId = "categoryId_example"; // String | The time series category to be deleted
let office = "office_example"; // String | Specifies the owning office of the time series category to be deleted
let opts = {
  'cascadeDelete': true // Boolean | Specifies whether to delete any time series groups in this time series category. Default: false
};
apiInstance.deleteCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office, opts, (error, data, response) => {
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
 **categoryId** | **String**| The time series category to be deleted | 
 **office** | **String**| Specifies the owning office of the time series category to be deleted | 
 **cascadeDelete** | **Boolean**| Specifies whether to delete any time series groups in this time series category. Default: false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesCategory

> [TimeSeriesCategory] getCwmsDataTimeseriesCategory(opts)

Get cwmsData timeseries category

Returns CWMS timeseries category Data

### Example

```javascript
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.TimeSeriesCategoriesApi();
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
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.TimeSeriesCategoriesApi();
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


## postCwmsDataTimeseriesCategory

> postCwmsDataTimeseriesCategory(timeSeriesCategory, opts)

Post cwmsData timeseries category

Create new TimeSeriesCategory

### Example

```javascript
import Cwmsjs from 'CWMSJS';
let defaultClient = Cwmsjs.ApiClient.instance;
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

let apiInstance = new Cwmsjs.TimeSeriesCategoriesApi();
let timeSeriesCategory = new Cwmsjs.TimeSeriesCategory(); // TimeSeriesCategory | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataTimeseriesCategory(timeSeriesCategory, opts, (error, data, response) => {
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
 **timeSeriesCategory** | [**TimeSeriesCategory**](TimeSeriesCategory.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

