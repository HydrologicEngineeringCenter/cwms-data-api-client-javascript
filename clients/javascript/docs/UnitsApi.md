# CwmsDataApi.UnitsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataUnits**](UnitsApi.md#getCwmsDataUnits) | **GET** /cwms-data/units | Get cwmsData units



## getCwmsDataUnits

> getCwmsDataUnits(opts)

Get cwmsData units

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.UnitsApi();
let opts = {
  'format': "format_example" // String | Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
};
apiInstance.getCwmsDataUnits(opts, (error, data, response) => {
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
 **format** | **String**| Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

