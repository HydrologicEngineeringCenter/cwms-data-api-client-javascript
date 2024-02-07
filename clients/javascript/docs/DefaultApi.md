# CwmsDataApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsData**](DefaultApi.md#getCwmsData) | **GET** /cwms-data | Get cwmsData
[**getCwmsDataLevelsWithLevelIdTimeseries**](DefaultApi.md#getCwmsDataLevelsWithLevelIdTimeseries) | **GET** /cwms-data/levels/{level-id}/timeseries | Get cwmsData levels with levelId timeseries
[**getCwmsDataTimeseriesRecentWithGroupId**](DefaultApi.md#getCwmsDataTimeseriesRecentWithGroupId) | **GET** /cwms-data/timeseries/recent/{group-id} | Get cwmsData timeseries recent with groupId



## getCwmsData

> getCwmsData()

Get cwmsData

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.DefaultApi();
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


## getCwmsDataLevelsWithLevelIdTimeseries

> getCwmsDataLevelsWithLevelIdTimeseries(levelId)

Get cwmsData levels with levelId timeseries

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.DefaultApi();
let levelId = "levelId_example"; // String | 
apiInstance.getCwmsDataLevelsWithLevelIdTimeseries(levelId, (error, data, response) => {
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
 **levelId** | **String**|  | 

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
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.DefaultApi();
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

