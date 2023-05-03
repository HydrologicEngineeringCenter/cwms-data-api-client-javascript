# CwmsRadar.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsData**](DefaultApi.md#getCwmsData) | **GET** /cwms-data | Get cwmsData
[**getCwmsDataTimeseriesRecentWithGroupId**](DefaultApi.md#getCwmsDataTimeseriesRecentWithGroupId) | **GET** /cwms-data/timeseries/recent/{group-id} | Get cwmsData timeseries recent with groupId



## getCwmsData

> getCwmsData()

Get cwmsData

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.DefaultApi();
apiInstance.getCwmsData((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataTimeseriesRecentWithGroupId

> getCwmsDataTimeseriesRecentWithGroupId(groupId)

Get cwmsData timeseries recent with groupId

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.DefaultApi();
let groupId = "groupId_example"; // String | 
apiInstance.getCwmsDataTimeseriesRecentWithGroupId(groupId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

