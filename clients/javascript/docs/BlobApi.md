# CwmsDataApi.BlobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBlobs**](BlobApi.md#getCwmsDataBlobs) | **GET** /cwms-data/blobs | Get cwmsData blobs
[**getCwmsDataBlobsWithBlobId**](BlobApi.md#getCwmsDataBlobsWithBlobId) | **GET** /cwms-data/blobs/{blob-id} | Get cwmsData blobs with blobId



## getCwmsDataBlobs

> Blobs getCwmsDataBlobs(opts)

Get cwmsData blobs

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.BlobApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56, // Number | How many entries per page returned. Default 20.
  'like': "like_example" // String | Posix <a href=\"regexp.html\">regular expression</a> describing the blob id's you want
};
apiInstance.getCwmsDataBlobs(opts, (error, data, response) => {
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
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.BlobApi();
let blobId = "blobId_example"; // String | 
let opts = {
  'office': "office_example" // String | Specifies the owning office.
};
apiInstance.getCwmsDataBlobsWithBlobId(blobId, opts, (error, data, response) => {
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
 **blobId** | **String**|  | 
 **office** | **String**| Specifies the owning office. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

