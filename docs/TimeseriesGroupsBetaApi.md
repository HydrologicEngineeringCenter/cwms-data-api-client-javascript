# CwmsRadar.TimeseriesGroupsBetaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimeseriesGroup**](TimeseriesGroupsBetaApi.md#getCwmsDataTimeseriesGroup) | **GET** /cwms-data/timeseries/group | Get cwmsData timeseries group



## getCwmsDataTimeseriesGroup

> [TimeSeriesGroup] getCwmsDataTimeseriesGroup(opts)

Get cwmsData timeseries group

Returns CWMS Timeseries Groups Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.TimeseriesGroupsBetaApi();
let opts = {
  'office': "office_example" // String | Specifies the owning office of the timeseries group(s) whose data is to be included in the response. If this field is not specified, matching timeseries groups information from all offices shall be returned.
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

### Return type

[**[TimeSeriesGroup]**](TimeSeriesGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

