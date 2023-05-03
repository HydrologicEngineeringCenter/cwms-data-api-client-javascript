# CwmsRadar.TimeseriesGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesGroupWithGroupId**](TimeseriesGroupsApi.md#getCwmsDataTimeseriesGroupWithGroupId) | **GET** /cwms-data/timeseries/group/{group-id} | Get cwmsData timeseries group with groupId



## getCwmsDataTimeseriesGroupWithGroupId

> TimeSeriesGroup getCwmsDataTimeseriesGroupWithGroupId(groupId, office, categoryId)

Get cwmsData timeseries group with groupId

Retrieves requested timeseries group

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.TimeseriesGroupsApi();
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

