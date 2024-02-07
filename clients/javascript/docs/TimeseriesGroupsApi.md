# CwmsDataApi.TimeseriesGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#deleteCwmsDataTimeseriesGroupWithGroupId) | **DELETE** /cwms-data/timeseries/group/{group-id} | Delete cwmsData timeseries group with groupId
[**getCwmsDataTimeseriesGroup**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroup) | **GET** /cwms-data/timeseries/group | Get cwmsData timeseries group
[**getCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroupWithGroupId) | **GET** /cwms-data/timeseries/group/{group-id} | Get cwmsData timeseries group with groupId
[**patchCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#patchCwmsDataTimeseriesGroupWithGroupId) | **PATCH** /cwms-data/timeseries/group/{group-id} | Patch cwmsData timeseries group with groupId
[**postCwmsDataTimeseriesGroup**](TimeseriesGroupsApi.md#postCwmsDataTimeseriesGroup) | **POST** /cwms-data/timeseries/group | Post cwmsData timeseries group



## deleteCwmsDataTimeseriesGroupWithGroupId

> deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office)

Delete cwmsData timeseries group with groupId

Deletes requested time series group

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

let apiInstance = new CwmsDataApi.TimeseriesGroupsApi();
let groupId = "groupId_example"; // String | The time series group to be deleted
let categoryId = "categoryId_example"; // String | Specifies the time series category of the time series group to be deleted
let office = "office_example"; // String | Specifies the owning office of the time series group to be deleted
apiInstance.deleteCwmsDataTimeseriesGroupWithGroupId(groupId, categoryId, office, (error, data, response) => {
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
 **groupId** | **String**| The time series group to be deleted | 
 **categoryId** | **String**| Specifies the time series category of the time series group to be deleted | 
 **office** | **String**| Specifies the owning office of the time series group to be deleted | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesGroup

> [TimeSeriesGroup] getCwmsDataTimeseriesGroup(opts)

Get cwmsData timeseries group

Returns CWMS Timeseries Groups Data

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.TimeseriesGroupsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
  'includeAssigned': true, // Boolean | Include the assigned timeseries in the returned timeseries groups. (default: true)
  'timeseriesCategoryLike': "timeseriesCategoryLike_example", // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries category id
  'timeseriesGroupLike': "timeseriesGroupLike_example" // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the timeseries group id
};
apiInstance.getCwmsDataTimeseriesGroup(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned. | [optional] 
 **includeAssigned** | **Boolean**| Include the assigned timeseries in the returned timeseries groups. (default: true) | [optional] 
 **timeseriesCategoryLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries category id | [optional] 
 **timeseriesGroupLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the timeseries group id | [optional] 

### Return type

[**[TimeSeriesGroup]**](TimeSeriesGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesGroupWithGroupId

> TimeSeriesGroup getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId)

Get cwmsData timeseries group with groupId

Retrieves requested timeseries group

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.TimeseriesGroupsApi();
let groupId = "groupId_example"; // String | Specifies the timeseries group whose data is to be included in the response
let office = "office_example"; // String | Specifies the owning office of the timeseries group whose data is to be included in the response.
let categoryId = "categoryId_example"; // String | Specifies the category containing the timeseries group whose data is to be included in the response.
apiInstance.getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId, (error, data, response) => {
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
 **groupId** | **String**| Specifies the timeseries group whose data is to be included in the response | 
 **office** | **String**| Specifies the owning office of the timeseries group whose data is to be included in the response. | 
 **categoryId** | **String**| Specifies the category containing the timeseries group whose data is to be included in the response. | 

### Return type

[**TimeSeriesGroup**](TimeSeriesGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchCwmsDataTimeseriesGroupWithGroupId

> patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, opts)

Patch cwmsData timeseries group with groupId

Update existing TimeSeriesGroup

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

let apiInstance = new CwmsDataApi.TimeseriesGroupsApi();
let groupId = "groupId_example"; // String | 
let office = "office_example"; // String | Specifies the owning office of the time series group to be updated
let timeSeriesGroup = new CwmsDataApi.TimeSeriesGroup(); // TimeSeriesGroup | 
let opts = {
  'replaceAssignedTs': true // Boolean | Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false
};
apiInstance.patchCwmsDataTimeseriesGroupWithGroupId(groupId, office, timeSeriesGroup, opts, (error, data, response) => {
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
 **groupId** | **String**|  | 
 **office** | **String**| Specifies the owning office of the time series group to be updated | 
 **timeSeriesGroup** | [**TimeSeriesGroup**](TimeSeriesGroup.md)|  | 
 **replaceAssignedTs** | **Boolean**| Specifies whether to unassign all existing time series before assigning new time series specified in the content body Default: false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCwmsDataTimeseriesGroup

> postCwmsDataTimeseriesGroup(timeSeriesGroup, opts)

Post cwmsData timeseries group

Create new TimeSeriesGroup

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

let apiInstance = new CwmsDataApi.TimeseriesGroupsApi();
let timeSeriesGroup = new CwmsDataApi.TimeSeriesGroup(); // TimeSeriesGroup | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataTimeseriesGroup(timeSeriesGroup, opts, (error, data, response) => {
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
 **timeSeriesGroup** | [**TimeSeriesGroup**](TimeSeriesGroup.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

