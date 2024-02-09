# .TimeseriesGroupsApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroupWithGroupId) | **GET** /cwms-data/timeseries/group/{group-id} | Get cwmsData timeseries group with groupId


# **getCwmsDataTimeseriesGroupWithGroupId**
> TimeSeriesGroup getCwmsDataTimeseriesGroupWithGroupId()

Retrieves requested timeseries group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeseriesGroupsApi(configuration);

let body:.TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest = {
  // string | Specifies the timeseries group whose data is to be included in the response
  groupId: "group-id_example",
  // string | Specifies the owning office of the timeseries group whose data is to be included in the response.
  office: "office_example",
  // string | Specifies the category containing the timeseries group whose data is to be included in the response.
  categoryId: "category-id_example",
};

apiInstance.getCwmsDataTimeseriesGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Specifies the timeseries group whose data is to be included in the response | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries group whose data is to be included in the response. | defaults to undefined
 **categoryId** | [**string**] | Specifies the category containing the timeseries group whose data is to be included in the response. | defaults to undefined


### Return type

**TimeSeriesGroup**

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


