# cwmsjs.CountiesApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataCounties**](CountiesApi.md#getCwmsDataCounties) | **GET** /cwms-data/counties | Get cwmsData counties



## getCwmsDataCounties

> [County] getCwmsDataCounties()

Get cwmsData counties

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.CountiesApi();
apiInstance.getCwmsDataCounties().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[County]**](County.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2

