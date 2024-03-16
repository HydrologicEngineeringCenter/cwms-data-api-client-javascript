# cwmsjs.ParametersApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataParameters**](ParametersApi.md#getCwmsDataParameters) | **GET** /cwms-data/parameters | Get cwmsData parameters



## getCwmsDataParameters

> getCwmsDataParameters(opts)

Get cwmsData parameters

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.ParametersApi();
let opts = {
  'format': "format_example" // String | Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
};
apiInstance.getCwmsDataParameters(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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

