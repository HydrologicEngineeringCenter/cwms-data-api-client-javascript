# CwmsRadar.LocationCategoriesBetaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataLocationCategory**](LocationCategoriesBetaApi.md#getCwmsDataLocationCategory) | **GET** /cwms-data/location/category | Get cwmsData location category
[**getCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesBetaApi.md#getCwmsDataLocationCategoryWithCategoryId) | **GET** /cwms-data/location/category/{category-id} | Get cwmsData location category with categoryId



## getCwmsDataLocationCategory

> [LocationCategory] getCwmsDataLocationCategory(opts)

Get cwmsData location category

Returns CWMS Location Category Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationCategoriesBetaApi();
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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationCategoriesBetaApi();
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

