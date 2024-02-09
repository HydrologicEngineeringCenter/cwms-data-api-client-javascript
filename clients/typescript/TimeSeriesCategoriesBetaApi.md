# .TimeSeriesCategoriesBetaApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesCategory**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategory) | **GET** /cwms-data/timeseries/category | Get cwmsData timeseries category
[**getCwmsDataTimeseriesCategoryWithCategoryId**](TimeSeriesCategoriesBetaApi.md#getCwmsDataTimeseriesCategoryWithCategoryId) | **GET** /cwms-data/timeseries/category/{category-id} | Get cwmsData timeseries category with categoryId


# **getCwmsDataTimeseriesCategory**
> Array<TimeSeriesCategory> getCwmsDataTimeseriesCategory()

Returns CWMS timeseries category Data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesCategoriesBetaApi(configuration);

let body:.TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryRequest = {
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeSeriesCategoriesBetaApi(configuration);

let body:.TimeSeriesCategoriesBetaApiGetCwmsDataTimeseriesCategoryWithCategoryIdRequest = {
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


