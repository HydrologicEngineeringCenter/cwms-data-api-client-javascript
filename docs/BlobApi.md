# CwmsRadar.BlobApi

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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.BlobApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'cursor': "cursor_example", // String | Deprecated. Use 'page' instead.
  'pageSize': 56, // Number | Deprecated.  Use page-size instead.
  'pageSize2': 56, // Number | How many entries per page returned. Default 20.
  'like': "like_example" // String | Posix regular expression describing the blob id's you want
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
 **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] 
 **pageSize** | **Number**| Deprecated.  Use page-size instead. | [optional] 
 **pageSize2** | **Number**| How many entries per page returned. Default 20. | [optional] 
 **like** | **String**| Posix regular expression describing the blob id&#39;s you want | [optional] 

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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.BlobApi();
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

