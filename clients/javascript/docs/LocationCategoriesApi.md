# CwmsDataApi.LocationCategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesApi.md#deleteCwmsDataLocationCategoryWithCategoryId) | **DELETE** /cwms-data/location/category/{category-id} | Delete cwmsData location category with categoryId
[**getCwmsDataLocationCategory**](LocationCategoriesApi.md#getCwmsDataLocationCategory) | **GET** /cwms-data/location/category | Get cwmsData location category
[**getCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesApi.md#getCwmsDataLocationCategoryWithCategoryId) | **GET** /cwms-data/location/category/{category-id} | Get cwmsData location category with categoryId
[**postCwmsDataLocationCategory**](LocationCategoriesApi.md#postCwmsDataLocationCategory) | **POST** /cwms-data/location/category | Post cwmsData location category



## deleteCwmsDataLocationCategoryWithCategoryId

> deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, opts)

Delete cwmsData location category with categoryId

Deletes requested location category

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

let apiInstance = new CwmsDataApi.LocationCategoriesApi();
let categoryId = "categoryId_example"; // String | The location category to be deleted
let office = "office_example"; // String | Specifies the owning office of the location category to be deleted
let opts = {
  'cascadeDelete': true // Boolean | Specifies whether to delete any location groups in this location category. Default: false
};
apiInstance.deleteCwmsDataLocationCategoryWithCategoryId(categoryId, office, opts, (error, data, response) => {
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
 **categoryId** | **String**| The location category to be deleted | 
 **office** | **String**| Specifies the owning office of the location category to be deleted | 
 **cascadeDelete** | **Boolean**| Specifies whether to delete any location groups in this location category. Default: false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLocationCategory

> [LocationCategory] getCwmsDataLocationCategory(opts)

Get cwmsData location category

Returns CWMS Location Category Data

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.LocationCategoriesApi();
let opts = {
  'office': "office_example" // String | Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned.
};
apiInstance.getCwmsDataLocationCategory(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned. | [optional] 

### Return type

[**[LocationCategory]**](LocationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLocationCategoryWithCategoryId

> LocationCategory getCwmsDataLocationCategoryWithCategoryId(categoryId, office)

Get cwmsData location category with categoryId

Retrieves requested Location Category

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.LocationCategoriesApi();
let categoryId = "categoryId_example"; // String | Specifies the Category whose data is to be included in the response.
let office = "office_example"; // String | Specifies the owning office of the Location Category whose data is to be included in the response.
apiInstance.getCwmsDataLocationCategoryWithCategoryId(categoryId, office, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the Location Category whose data is to be included in the response. | 

### Return type

[**LocationCategory**](LocationCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCwmsDataLocationCategory

> postCwmsDataLocationCategory(locationCategory)

Post cwmsData location category

Create new LocationCategory

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

let apiInstance = new CwmsDataApi.LocationCategoriesApi();
let locationCategory = new CwmsDataApi.LocationCategory(); // LocationCategory | 
apiInstance.postCwmsDataLocationCategory(locationCategory, (error, data, response) => {
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
 **locationCategory** | [**LocationCategory**](LocationCategory.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

