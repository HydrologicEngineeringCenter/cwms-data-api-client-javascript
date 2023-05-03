# CwmsRadar.ClobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataClobs**](ClobApi.md#getCwmsDataClobs) | **GET** /cwms-data/clobs | Get cwmsData clobs
[**getCwmsDataClobsWithClobId**](ClobApi.md#getCwmsDataClobsWithClobId) | **GET** /cwms-data/clobs/{clob-id} | Get cwmsData clobs with clobId



## getCwmsDataClobs

> Clobs getCwmsDataClobs(opts)

Get cwmsData clobs

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.ClobApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'cursor': "cursor_example", // String | Deprecated. Use 'page' instead.
  'pageSize': 56, // Number | How many entries per page returned. Default 20.
  'pageSize2': 56, // Number | Deprecated, use 'page-size' instead.
  'includeValues': true, // Boolean | Do you want the value associated with this particular clob (default: false)
  'includeValues2': true, // Boolean | Deprecated, use 'include-values' instead.
  'like': "like_example" // String | Posix regular expression matching against the id
};
apiInstance.getCwmsDataClobs(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 20. | [optional] 
 **pageSize2** | **Number**| Deprecated, use &#39;page-size&#39; instead. | [optional] 
 **includeValues** | **Boolean**| Do you want the value associated with this particular clob (default: false) | [optional] 
 **includeValues2** | **Boolean**| Deprecated, use &#39;include-values&#39; instead. | [optional] 
 **like** | **String**| Posix regular expression matching against the id | [optional] 

### Return type

[**Clobs**](Clobs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml;version=2


## getCwmsDataClobsWithClobId

> Clob getCwmsDataClobsWithClobId(clobId, opts)

Get cwmsData clobs with clobId

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.ClobApi();
let clobId = "clobId_example"; // String | 
let opts = {
  'office': "office_example" // String | Specifies the owning office.
};
apiInstance.getCwmsDataClobsWithClobId(clobId, opts, (error, data, response) => {
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
 **clobId** | **String**|  | 
 **office** | **String**| Specifies the owning office. | [optional] 

### Return type

[**Clob**](Clob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

