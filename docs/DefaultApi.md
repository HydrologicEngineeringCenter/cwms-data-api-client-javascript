# cwmsjs.DefaultApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsData**](DefaultApi.md#getCwmsData) | **GET** /cwms-data | Get cwmsData
[**getCwmsDataLevelsWithLevelIdTimeseries**](DefaultApi.md#getCwmsDataLevelsWithLevelIdTimeseries) | **GET** /cwms-data/levels/{level-id}/timeseries | Get cwmsData levels with levelId timeseries
[**getCwmsDataTimeseriesRecentWithGroupId**](DefaultApi.md#getCwmsDataTimeseriesRecentWithGroupId) | **GET** /cwms-data/timeseries/recent/{group-id} | Get cwmsData timeseries recent with groupId


# **getCwmsData**
> getCwmsData()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.DefaultApi(configuration);

let body:any = {};

apiInstance.getCwmsData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLevelsWithLevelIdTimeseries**
> getCwmsDataLevelsWithLevelIdTimeseries()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.DefaultApi(configuration);

let body:cwmsjs.DefaultApiGetCwmsDataLevelsWithLevelIdTimeseriesRequest = {
  // string
  levelId: "level-id_example",
};

apiInstance.getCwmsDataLevelsWithLevelIdTimeseries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataTimeseriesRecentWithGroupId**
> getCwmsDataTimeseriesRecentWithGroupId()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.DefaultApi(configuration);

let body:cwmsjs.DefaultApiGetCwmsDataTimeseriesRecentWithGroupIdRequest = {
  // string
  groupId: "group-id_example",
};

apiInstance.getCwmsDataTimeseriesRecentWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


