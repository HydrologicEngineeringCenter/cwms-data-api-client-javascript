# cwmsjs.TimeZonesApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataTimezones**](TimeZonesApi.md#getCwmsDataTimezones) | **GET** /cwms-data/timezones | Get cwmsData timezones



## getCwmsDataTimezones

> getCwmsDataTimezones(opts)

Get cwmsData timezones

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.TimeZonesApi();
let opts = {
  'format': "format_example" // String | Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
};
apiInstance.getCwmsDataTimezones(opts).then(() => {
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

