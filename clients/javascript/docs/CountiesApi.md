# Cwmsjs.CountiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataCounties**](CountiesApi.md#getCwmsDataCounties) | **GET** /cwms-data/counties | Get cwmsData counties



## getCwmsDataCounties

> [County] getCwmsDataCounties()

Get cwmsData counties

### Example

```javascript
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.CountiesApi();
apiInstance.getCwmsDataCounties((error, data, response) => {
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

[**[County]**](County.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;version=2, application/json

