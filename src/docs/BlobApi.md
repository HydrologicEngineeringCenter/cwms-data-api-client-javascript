# cwmsjs.BlobApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBlobs**](BlobApi.md#getCwmsDataBlobs) | **GET** /cwms-data/blobs | Get cwmsData blobs
[**getCwmsDataBlobsWithBlobId**](BlobApi.md#getCwmsDataBlobsWithBlobId) | **GET** /cwms-data/blobs/{blob-id} | Get cwmsData blobs with blobId
[**postCwmsDataBlobs**](BlobApi.md#postCwmsDataBlobs) | **POST** /cwms-data/blobs | Post cwmsData blobs



## getCwmsDataBlobs

> Blobs getCwmsDataBlobs(opts)

Get cwmsData blobs

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.BlobApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56, // Number | How many entries per page returned. Default 20.
  'like': "like_example" // String | Posix <a href=\"regexp.html\">regular expression</a> describing the blob id's you want
};
apiInstance.getCwmsDataBlobs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 20. | [optional] 
 **like** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id&#39;s you want | [optional] 

### Return type

[**Blobs**](Blobs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml;version=2


## getCwmsDataBlobsWithBlobId

> getCwmsDataBlobsWithBlobId(blobId, opts)

Get cwmsData blobs with blobId

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.BlobApi();
let blobId = "blobId_example"; // String | 
let opts = {
  'office': "office_example" // String | Specifies the owning office.
};
apiInstance.getCwmsDataBlobsWithBlobId(blobId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blobId** | **String**|  | 
 **office** | **String**| Specifies the owning office. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCwmsDataBlobs

> postCwmsDataBlobs(blob, opts)

Post cwmsData blobs

Create new Blob

### Example

```javascript
import cwmsjs from 'cwmsjs';
let defaultClient = cwmsjs.ApiClient.instance;
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

let apiInstance = new cwmsjs.BlobApi();
let blob = null; // Blob | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataBlobs(blob, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blob** | [**Blob**](Blob.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2, application/xml;version=2
- **Accept**: application/json

