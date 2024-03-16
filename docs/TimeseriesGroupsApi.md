# cwmsjs.TimeseriesGroupsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#deleteCwmsDataTimeseriesGroupWithGroupId) | **DELETE** /cwms-data/timeseries/group/{group-id} | Delete cwmsData timeseries group with groupId
[**getCwmsDataTimeseriesGroup**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroup) | **GET** /cwms-data/timeseries/group | Get cwmsData timeseries group
[**getCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroupWithGroupId) | **GET** /cwms-data/timeseries/group/{group-id} | Get cwmsData timeseries group with groupId
[**patchCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#patchCwmsDataTimeseriesGroupWithGroupId) | **PATCH** /cwms-data/timeseries/group/{group-id} | Patch cwmsData timeseries group with groupId
[**postCwmsDataTimeseriesGroup**](TimeseriesGroupsApi.md#postCwmsDataTimeseriesGroup) | **POST** /cwms-data/timeseries/group | Post cwmsData timeseries group


# **deleteCwmsDataTimeseriesGroupWithGroupId**
> deleteCwmsDataTimeseriesGroupWithGroupId()

Deletes requested time series group

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeseriesGroupsApi(configuration);

let body:cwmsjs.TimeseriesGroupsApiDeleteCwmsDataTimeseriesGroupWithGroupIdRequest = {
  // string | The time series group to be deleted
  groupId: "group-id_example",
  // string | Specifies the time series category of the time series group to be deleted
  categoryId: "category-id_example",
  // string | Specifies the owning office of the time series group to be deleted
  office: "office_example",
};

apiInstance.deleteCwmsDataTimeseriesGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | The time series group to be deleted | defaults to undefined
 **categoryId** | [**string**] | Specifies the time series category of the time series group to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the time series group to be deleted | defaults to undefined


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

# **getCwmsDataTimeseriesGroup**
> Array<TimeSeriesGroup> getCwmsDataTimeseriesGroup()

Returns CWMS Timeseries Groups Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeseriesGroupsApi(configuration);

let body:cwmsjs.TimeseriesGroupsApiGetCwmsDataTimeseriesGroupRequest = {
  // string | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. (optional)
  office: "office_example",
  // boolean | Include the assigned timeseries in the returned timeseries groups. (default: true) (optional)
  includeAssigned: true,
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id (optional)
  timeseriesCategoryLike: "timeseries-category-like_example",
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id (optional)
  timeseriesGroupLike: "timeseries-group-like_example",
};

apiInstance.getCwmsDataTimeseriesGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. | (optional) defaults to undefined
 **includeAssigned** | [**boolean**] | Include the assigned timeseries in the returned timeseries groups. (default: true) | (optional) defaults to undefined
 **timeseriesCategoryLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id | (optional) defaults to undefined
 **timeseriesGroupLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id | (optional) defaults to undefined


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

# **getCwmsDataTimeseriesGroupWithGroupId**
> TimeSeriesGroup getCwmsDataTimeseriesGroupWithGroupId()

Retrieves requested timeseries group

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeseriesGroupsApi(configuration);

let body:cwmsjs.TimeseriesGroupsApiGetCwmsDataTimeseriesGroupWithGroupIdRequest = {
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

# **patchCwmsDataTimeseriesGroupWithGroupId**
> patchCwmsDataTimeseriesGroupWithGroupId(timeSeriesGroup)

Update existing TimeSeriesGroup

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeseriesGroupsApi(configuration);

let body:cwmsjs.TimeseriesGroupsApiPatchCwmsDataTimeseriesGroupWithGroupIdRequest = {
  // string
  groupId: "group-id_example",
  // string | Specifies the owning office of the time series group to be updated
  office: "office_example",
  // TimeSeriesGroup
  timeSeriesGroup: {
    officeId: "officeId_example",
    id: "id_example",
    timeSeriesCategory: {
      officeId: "officeId_example",
      id: "id_example",
      description: "description_example",
    },
    description: "description_example",
    sharedAliasId: "sharedAliasId_example",
    sharedRefTsId: "sharedRefTsId_example",
    assignedTimeSeries: [
      {
        officeId: "officeId_example",
        timeseriesId: "timeseriesId_example",
        tsCode: 3.14,
        aliasId: "aliasId_example",
        refTsId: "refTsId_example",
        attribute: 1,
      },
    ],
  },
  // boolean | Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false (optional)
  replaceAssignedTs: true,
};

apiInstance.patchCwmsDataTimeseriesGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesGroup** | **TimeSeriesGroup**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the time series group to be updated | defaults to undefined
 **replaceAssignedTs** | [**boolean**] | Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false | (optional) defaults to undefined


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

# **postCwmsDataTimeseriesGroup**
> postCwmsDataTimeseriesGroup(timeSeriesGroup)

Create new TimeSeriesGroup

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.TimeseriesGroupsApi(configuration);

let body:cwmsjs.TimeseriesGroupsApiPostCwmsDataTimeseriesGroupRequest = {
  // TimeSeriesGroup
  timeSeriesGroup: {
    officeId: "officeId_example",
    id: "id_example",
    timeSeriesCategory: {
      officeId: "officeId_example",
      id: "id_example",
      description: "description_example",
    },
    description: "description_example",
    sharedAliasId: "sharedAliasId_example",
    sharedRefTsId: "sharedRefTsId_example",
    assignedTimeSeries: [
      {
        officeId: "officeId_example",
        timeseriesId: "timeseriesId_example",
        tsCode: 3.14,
        aliasId: "aliasId_example",
        refTsId: "refTsId_example",
        attribute: 1,
      },
    ],
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataTimeseriesGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeSeriesGroup** | **TimeSeriesGroup**|  |
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


