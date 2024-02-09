# .TimeseriesGroupsBetaApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesGroup**](TimeseriesGroupsBetaApi.md#getCwmsDataTimeseriesGroup) | **GET** /cwms-data/timeseries/group | Get cwmsData timeseries group


# **getCwmsDataTimeseriesGroup**
> Array<TimeSeriesGroup> getCwmsDataTimeseriesGroup()

Returns CWMS Timeseries Groups Data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TimeseriesGroupsBetaApi(configuration);

let body:.TimeseriesGroupsBetaApiGetCwmsDataTimeseriesGroupRequest = {
  // string | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. (optional)
  office: "office_example",
};

apiInstance.getCwmsDataTimeseriesGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. | (optional) defaults to undefined


### Return type

**Array<TimeSeriesGroup>**

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
**404** | Based on the combination of inputs provided the timeseries group(s) were not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


