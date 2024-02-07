# CwmsDataApi.ClobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataClobsWithClobId**](ClobApi.md#deleteCwmsDataClobsWithClobId) | **DELETE** /cwms-data/clobs/{clob-id} | Delete cwmsData clobs with clobId
[**getCwmsDataClobs**](ClobApi.md#getCwmsDataClobs) | **GET** /cwms-data/clobs | Get cwmsData clobs
[**getCwmsDataClobsWithClobId**](ClobApi.md#getCwmsDataClobsWithClobId) | **GET** /cwms-data/clobs/{clob-id} | Get cwmsData clobs with clobId
[**patchCwmsDataClobsWithClobId**](ClobApi.md#patchCwmsDataClobsWithClobId) | **PATCH** /cwms-data/clobs/{clob-id} | Patch cwmsData clobs with clobId
[**postCwmsDataClobs**](ClobApi.md#postCwmsDataClobs) | **POST** /cwms-data/clobs | Post cwmsData clobs



## deleteCwmsDataClobsWithClobId

> deleteCwmsDataClobsWithClobId(clobId, office)

Delete cwmsData clobs with clobId

Delete clob

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.ClobApi();
let clobId = "clobId_example"; // String | Specifies the id of the clob to be deleted
let office = "office_example"; // String | Specifies the office of the clob.
apiInstance.deleteCwmsDataClobsWithClobId(clobId, office, (error, data, response) => {
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
 **clobId** | **String**| Specifies the id of the clob to be deleted | 
 **office** | **String**| Specifies the office of the clob. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataClobs

> Clobs getCwmsDataClobs(opts)

Get cwmsData clobs

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.ClobApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56, // Number | How many entries per page returned. Default 20.
  'includeValues': true, // Boolean | Do you want the value associated with this particular clob (default: false)
  'like': "like_example" // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the id
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
 **pageSize** | **Number**| How many entries per page returned. Default 20. | [optional] 
 **includeValues** | **Boolean**| Do you want the value associated with this particular clob (default: false) | [optional] 
 **like** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id | [optional] 

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
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.ClobApi();
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
- **Accept**: application/json, application/json;version=2


## patchCwmsDataClobsWithClobId

> patchCwmsDataClobsWithClobId(clobId, clob, opts)

Patch cwmsData clobs with clobId

Update clob

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.ClobApi();
let clobId = "clobId_example"; // String | Specifies the id of the clob to be updated
let clob = new CwmsDataApi.Clob(); // Clob | 
let opts = {
  'ignoreNulls': true // Boolean | If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true
};
apiInstance.patchCwmsDataClobsWithClobId(clobId, clob, opts, (error, data, response) => {
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
 **clobId** | **String**| Specifies the id of the clob to be updated | 
 **clob** | [**Clob**](Clob.md)|  | 
 **ignoreNulls** | **Boolean**| If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json


## postCwmsDataClobs

> postCwmsDataClobs(clob, opts)

Post cwmsData clobs

Create new Clob

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new CwmsDataApi.ClobApi();
let clob = new CwmsDataApi.Clob(); // Clob | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataClobs(clob, opts, (error, data, response) => {
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
 **clob** | [**Clob**](Clob.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json

