# CwmsDataApi.StatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataStates**](StatesApi.md#getCwmsDataStates) | **GET** /cwms-data/states | Get cwmsData states



## getCwmsDataStates

> [State] getCwmsDataStates()

Get cwmsData states

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.StatesApi();
apiInstance.getCwmsDataStates((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[State]**](State.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2
