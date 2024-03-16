# cwmsjs.LocationCategoriesApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesApi.md#deleteCwmsDataLocationCategoryWithCategoryId) | **DELETE** /cwms-data/location/category/{category-id} | Delete cwmsData location category with categoryId
[**getCwmsDataLocationCategory**](LocationCategoriesApi.md#getCwmsDataLocationCategory) | **GET** /cwms-data/location/category | Get cwmsData location category
[**getCwmsDataLocationCategoryWithCategoryId**](LocationCategoriesApi.md#getCwmsDataLocationCategoryWithCategoryId) | **GET** /cwms-data/location/category/{category-id} | Get cwmsData location category with categoryId
[**postCwmsDataLocationCategory**](LocationCategoriesApi.md#postCwmsDataLocationCategory) | **POST** /cwms-data/location/category | Post cwmsData location category


# **deleteCwmsDataLocationCategoryWithCategoryId**
> deleteCwmsDataLocationCategoryWithCategoryId()

Deletes requested location category

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationCategoriesApi(configuration);

let body:cwmsjs.LocationCategoriesApiDeleteCwmsDataLocationCategoryWithCategoryIdRequest = {
  // string | The location category to be deleted
  categoryId: "category-id_example",
  // string | Specifies the owning office of the location category to be deleted
  office: "office_example",
  // boolean | Specifies whether to delete any location groups in this location category. Default: false (optional)
  cascadeDelete: true,
};

apiInstance.deleteCwmsDataLocationCategoryWithCategoryId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | The location category to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location category to be deleted | defaults to undefined
 **cascadeDelete** | [**boolean**] | Specifies whether to delete any location groups in this location category. Default: false | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLocationCategory**
> Array<LocationCategory> getCwmsDataLocationCategory()

Returns CWMS Location Category Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationCategoriesApi(configuration);

let body:cwmsjs.LocationCategoriesApiGetCwmsDataLocationCategoryRequest = {
  // string | Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned. (optional)
  office: "office_example",
};

apiInstance.getCwmsDataLocationCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the location category(ies) whose data is to be included in the response. If this field is not specified, matching location category information from all offices shall be returned. | (optional) defaults to undefined


### Return type

**Array<LocationCategory>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLocationCategoryWithCategoryId**
> LocationCategory getCwmsDataLocationCategoryWithCategoryId()

Retrieves requested Location Category

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationCategoriesApi(configuration);

let body:cwmsjs.LocationCategoriesApiGetCwmsDataLocationCategoryWithCategoryIdRequest = {
  // string | Specifies the Category whose data is to be included in the response.
  categoryId: "category-id_example",
  // string | Specifies the owning office of the Location Category whose data is to be included in the response.
  office: "office_example",
};

apiInstance.getCwmsDataLocationCategoryWithCategoryId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Specifies the Category whose data is to be included in the response. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the Location Category whose data is to be included in the response. | defaults to undefined


### Return type

**LocationCategory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataLocationCategory**
> postCwmsDataLocationCategory(locationCategory)

Create new LocationCategory

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationCategoriesApi(configuration);

let body:cwmsjs.LocationCategoriesApiPostCwmsDataLocationCategoryRequest = {
  // LocationCategory
  locationCategory: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
  },
};

apiInstance.postCwmsDataLocationCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationCategory** | **LocationCategory**|  |


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


