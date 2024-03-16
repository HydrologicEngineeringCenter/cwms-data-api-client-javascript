# cwmsjs.TimeSeriesCategoriesApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesApi.md#deleteCwmsDataTimeseriesCategoryWithCategoryId) | **DELETE** /cwms-data/timeseries/category/{category-id} | Delete cwmsData timeseries category with categoryId
[**getCwmsDataTimeseriesCategory**](TimeSeriesCategoriesApi.md#getCwmsDataTimeseriesCategory) | **GET** /cwms-data/timeseries/category | Get cwmsData timeseries category
[**getCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesApi.md#getCwmsDataTimeseriesCategoryWithCategoryId) | **GET** /cwms-data/timeseries/category/{category-id} | Get cwmsData timeseries category with categoryId
[**postCwmsDataTimeseriesCategory**](TimeSeriesCategoriesApi.md#postCwmsDataTimeseriesCategory) | **POST** /cwms-data/timeseries/category | Post cwmsData timeseries category


# **deleteCwmsDataTimeseriesCategoryWithCategoryId**
> deleteCwmsDataTimeseriesCategoryWithCategoryId()

Deletes requested time series category

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesCategoriesApi(configuration);

let body:cwmsjs.TimeSeriesCategoriesApiDeleteCwmsDataTimeseriesCategoryWithCategoryIdRequest = {
  // string | The time series category to be deleted
  categoryId: "category-id_example",
  // string | Specifies the owning office of the time series category to be deleted
  office: "office_example",
  // boolean | Specifies whether to delete any time series groups in this time series category. Default: false (optional)
  cascadeDelete: true,
};

apiInstance.deleteCwmsDataTimeseriesCategoryWithCategoryId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | The time series category to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the time series category to be deleted | defaults to undefined
 **cascadeDelete** | [**boolean**] | Specifies whether to delete any time series groups in this time series category. Default: false | (optional) defaults to undefined


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

# **getCwmsDataTimeseriesCategory**
> Array<TimeSeriesCategory> getCwmsDataTimeseriesCategory()

Returns CWMS timeseries category Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesCategoriesApi(configuration);

let body:cwmsjs.TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryRequest = {
  // string | Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. (optional)
  office: "office_example",
};

apiInstance.getCwmsDataTimeseriesCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. | (optional) defaults to undefined


### Return type

**Array<TimeSeriesCategory>**

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
**404** | Based on the combination of inputs provided the categories were not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataTimeseriesCategoryWithCategoryId**
> TimeSeriesCategory getCwmsDataTimeseriesCategoryWithCategoryId()

Retrieves requested timeseries category

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesCategoriesApi(configuration);

let body:cwmsjs.TimeSeriesCategoriesApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest = {
  // string | Specifies the Category whose data is to be included in the response.
  categoryId: "category-id_example",
  // string | Specifies the owning office of the timeseries category whose data is to be included in the response.
  office: "office_example",
};

apiInstance.getCwmsDataTimeseriesCategoryWithCategoryId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**string**] | Specifies the Category whose data is to be included in the response. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries category whose data is to be included in the response. | defaults to undefined


### Return type

**TimeSeriesCategory**

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
**404** | Based on the combination of inputs provided the timeseries category was not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataTimeseriesCategory**
> postCwmsDataTimeseriesCategory(timeSeriesCategory)

Create new TimeSeriesCategory

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesCategoriesApi(configuration);

let body:cwmsjs.TimeSeriesCategoriesApiPostCwmsDataTimeseriesCategoryRequest = {
  // TimeSeriesCategory
  timeSeriesCategory: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataTimeseriesCategory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesCategory** | **TimeSeriesCategory**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


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


