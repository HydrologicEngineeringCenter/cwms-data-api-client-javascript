# CwmsDataApi.TimeSeriesIdentifierApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **DELETE** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Delete cwmsData timeseries identifierDescriptor with timeseriesId
[**getCwmsDataTimeseriesIdentifierDescriptor**](TimeSeriesIdentifierApi.md#getCwmsDataTimeseriesIdentifierDescriptor) | **GET** /cwms-data/timeseries/identifier-descriptor | Get cwmsData timeseries identifierDescriptor
[**getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **GET** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Get cwmsData timeseries identifierDescriptor with timeseriesId
[**patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId**](TimeSeriesIdentifierApi.md#patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId) | **PATCH** /cwms-data/timeseries/identifier-descriptor/{timeseries-id} | Patch cwmsData timeseries identifierDescriptor with timeseriesId
[**postCwmsDataTimeseriesIdentifierDescriptor**](TimeSeriesIdentifierApi.md#postCwmsDataTimeseriesIdentifierDescriptor) | **POST** /cwms-data/timeseries/identifier-descriptor | Post cwmsData timeseries identifierDescriptor



## deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId

> deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method)

Delete cwmsData timeseries identifierDescriptor with timeseriesId

Deletes requested timeseries identifier

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

let apiInstance = new CwmsDataApi.TimeSeriesIdentifierApi();
let timeseriesId = "timeseriesId_example"; // String | The timeseries-id of the timeseries to be deleted. 
let office = "office_example"; // String | Specifies the owning office of the timeseries to be deleted.
let method = new CwmsDataApi.DeleteMethod(); // DeleteMethod | Specifies the delete method used.
apiInstance.deleteCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, method, (error, data, response) => {
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
 **timeseriesId** | **String**| The timeseries-id of the timeseries to be deleted.  | 
 **office** | **String**| Specifies the owning office of the timeseries to be deleted. | 
 **method** | [**DeleteMethod**](.md)| Specifies the delete method used. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesIdentifierDescriptor

> TimeSeriesIdentifierDescriptors getCwmsDataTimeseriesIdentifierDescriptor(opts)

Get cwmsData timeseries identifierDescriptor

Returns CWMS timeseries identifier descriptorData

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.TimeSeriesIdentifierApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned.
  'timeseriesIdRegex': "timeseriesIdRegex_example", // String | A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 500.
};
apiInstance.getCwmsDataTimeseriesIdentifierDescriptor(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the timeseries identifier(s) whose data is to be included in the response. If this field is not specified, matching timeseries identifier information from all offices shall be returned. | [optional] 
 **timeseriesIdRegex** | **String**| A case insensitive RegExp that will be applied to the timeseries-id field. If this field is not specified the results will not be constrained by timeseries-id. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 500. | [optional] 

### Return type

[**TimeSeriesIdentifierDescriptors**](TimeSeriesIdentifierDescriptors.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId

> TimeSeriesIdentifierDescriptor getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office)

Get cwmsData timeseries identifierDescriptor with timeseriesId

Retrieves requested timeseries identifier descriptor

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.TimeSeriesIdentifierApi();
let timeseriesId = "timeseriesId_example"; // String | Specifies the identifier of the timeseries to be included in the response.
let office = "office_example"; // String | Specifies the owning office of the timeseries identifier to be included in the response.
apiInstance.getCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, office, (error, data, response) => {
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
 **timeseriesId** | **String**| Specifies the identifier of the timeseries to be included in the response. | 
 **office** | **String**| Specifies the owning office of the timeseries identifier to be included in the response. | 

### Return type

[**TimeSeriesIdentifierDescriptor**](TimeSeriesIdentifierDescriptor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId

> patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, opts)

Patch cwmsData timeseries identifierDescriptor with timeseriesId

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

let apiInstance = new CwmsDataApi.TimeSeriesIdentifierApi();
let timeseriesId = "timeseriesId_example"; // String | 
let timeseriesId2 = "timeseriesId_example"; // String | A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided
let office = "office_example"; // String | Specifies the owning office of the timeseries identifier to be updated
let opts = {
  'intervalOffset': 789, // Number | The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation.
  'snapForward': 789, // Number | The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time.
  'snapBackward': 789, // Number | The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time.
  'active': true // Boolean | 'True' or 'true' if the time series is active
};
apiInstance.patchCwmsDataTimeseriesIdentifierDescriptorWithTimeseriesId(timeseriesId, timeseriesId2, office, opts, (error, data, response) => {
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
 **timeseriesId** | **String**|  | 
 **timeseriesId2** | **String**| A new timeseries-id.  If specified a rename operation will be performed and snap-forward, snap-backward, and active must not be provided | 
 **office** | **String**| Specifies the owning office of the timeseries identifier to be updated | 
 **intervalOffset** | **Number**| The offset into the data interval in minutes.  If specified and a new timeseries-id is also specified both will be passed to a rename operation.  May also be passed to update operation. | [optional] 
 **snapForward** | **Number**| The new snap forward tolerance in minutes. This specifies how many minutes before the expected data time that data will be considered to be on time. | [optional] 
 **snapBackward** | **Number**| The new snap backward tolerance in minutes. This specifies how many minutes after the expected data time that data will be considered to be on time. | [optional] 
 **active** | **Boolean**| &#39;True&#39; or &#39;true&#39; if the time series is active | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCwmsDataTimeseriesIdentifierDescriptor

> postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, opts)

Post cwmsData timeseries identifierDescriptor

Create new TimeSeriesIdentifierDescriptor

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

let apiInstance = new CwmsDataApi.TimeSeriesIdentifierApi();
let timeSeriesIdentifierDescriptor = new CwmsDataApi.TimeSeriesIdentifierDescriptor(); // TimeSeriesIdentifierDescriptor | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataTimeseriesIdentifierDescriptor(timeSeriesIdentifierDescriptor, opts, (error, data, response) => {
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
 **timeSeriesIdentifierDescriptor** | [**TimeSeriesIdentifierDescriptor**](TimeSeriesIdentifierDescriptor.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json

