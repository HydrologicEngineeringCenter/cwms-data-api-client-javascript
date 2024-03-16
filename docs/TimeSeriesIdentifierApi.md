# cwmsjs.TimeSeriesIdentifierApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **DELETE** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Delete cwmsData timeseries identifierDescriptor with timeseriesId
[**getCwmsDataTimeseriesIdentifierDescriptor**](TimeSeriesIdentifierApi.md#getCwmsDataTimeseriesIdentifierDescriptor) | **GET** /cwms-data/timeseries/identifier-descriptor | Get cwmsData timeseries identifierDescriptor
[**getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **GET** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Get cwmsData timeseries identifierDescriptor with timeseriesId
[**patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **PATCH** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Patch cwmsData timeseries identifierDescriptor with timeseriesId
[**postCwmsDataTimeseriesIdentifierDescriptor**](TimeSeriesIdentifierApi.md#postCwmsDataTimeseriesIdentifierDescriptor) | **POST** /cwms-data/timeseries/identifier-descriptor | Post cwmsData timeseries identifierDescriptor


# **deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**
> deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId()

Deletes requested timeseries identifier

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesIdentifierApi(configuration);

let body:cwmsjs.TimeSeriesIdentifierApiDeleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest = {
  // string | The timeseries-id of the timeseries to be deleted. 
  timeseriesId: "timeseries-id_example",
  // string | Specifies the owning office of the timeseries to be deleted.
  office: "office_example",
  // DeleteMethod | Specifies the delete method used.
  method: "DELETE_ALL",
};

apiInstance.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseriesId** | [**string**] | The timeseries-id of the timeseries to be deleted.  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries to be deleted. | defaults to undefined
 **method** | **DeleteMethod** | Specifies the delete method used. | defaults to undefined


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

# **getCwmsDataTimeseriesIdentifierDescriptor**
> TimeSeriesIdentifierDescriptors getCwmsDataTimeseriesIdentifierDescriptor()

Returns CWMS timeseries identifier descriptorData

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesIdentifierApi(configuration);

let body:cwmsjs.TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorRequest = {
  // string | Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned. (optional)
  office: "office_example",
  // string | A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id. (optional)
  timeseriesIdRegex: "timeseries-id-regex_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 500. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataTimeseriesIdentifierDescriptor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned. | (optional) defaults to undefined
 **timeseriesIdRegex** | [**string**] | A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 500. | (optional) defaults to undefined


### Return type

**TimeSeriesIdentifierDescriptors**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Based on the combination of inputs provided the time series identifier descriptors were not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**
> TimeSeriesIdentifierDescriptor getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId()

Retrieves requested timeseries identifier descriptor

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesIdentifierApi(configuration);

let body:cwmsjs.TimeSeriesIdentifierApiGetCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest = {
  // string | Specifies the identifier of the timeseries to be included in the response.
  timeseriesId: "timeseries-id_example",
  // string | Specifies the owning office of the timeseries identifier to be included in the response.
  office: "office_example",
};

apiInstance.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseriesId** | [**string**] | Specifies the identifier of the timeseries to be included in the response. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries identifier to be included in the response. | defaults to undefined


### Return type

**TimeSeriesIdentifierDescriptor**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Based on the combination of inputs provided the timeseries identifier descriptor was not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**
> patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesIdentifierApi(configuration);

let body:cwmsjs.TimeSeriesIdentifierApiPatchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesIdRequest = {
  // string
  timeseriesId: "timeseries-id_example",
  // string | A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
  timeseriesId2: "timeseries-id_example",
  // string | Specifies the owning office of the timeseries identifier to be updated
  office: "office_example",
  // number | The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation. (optional)
  intervalOffset: 1,
  // number | The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time. (optional)
  snapForward: 1,
  // number | The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time. (optional)
  snapBackward: 1,
  // boolean | \'True\' or \'true\' if the time series is active (optional)
  active: true,
};

apiInstance.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeseriesId** | [**string**] |  | defaults to undefined
 **timeseriesId2** | [**string**] | A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries identifier to be updated | defaults to undefined
 **intervalOffset** | [**number**] | The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation. | (optional) defaults to undefined
 **snapForward** | [**number**] | The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time. | (optional) defaults to undefined
 **snapBackward** | [**number**] | The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time. | (optional) defaults to undefined
 **active** | [**boolean**] | \&#39;True\&#39; or \&#39;true\&#39; if the time series is active | (optional) defaults to undefined


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

# **postCwmsDataTimeseriesIdentifierDescriptor**
> postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor)

Create new TimeSeriesIdentifierDescriptor

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeSeriesIdentifierApi(configuration);

let body:cwmsjs.TimeSeriesIdentifierApiPostCwmsDataTimeseriesIdentifierDescriptorRequest = {
  // TimeSeriesIdentifierDescriptor
  timeSeriesIdentifierDescriptor: {
    officeId: "officeId_example",
    timeSeriesId: "timeSeriesId_example",
    timezoneName: "timezoneName_example",
    intervalOffsetMinutes: 1,
    active: true,
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataTimeseriesIdentifierDescriptor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesIdentifierDescriptor** | **TimeSeriesIdentifierDescriptor**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
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


