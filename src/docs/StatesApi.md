# cwmsjs.StatesApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataStates**](StatesApi.md#getCwmsDataStates) | **GET** /cwms-data/states | Get cwmsData states



## getCwmsDataStates

> [State] getCwmsDataStates()

Get cwmsData states

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.StatesApi();
apiInstance.getCwmsDataStates().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

