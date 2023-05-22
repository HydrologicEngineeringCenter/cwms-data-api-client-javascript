# .BlobApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBlobs**](BlobApi.md#getCwmsDataBlobs) | **GET** /cwms-data/blobs | Get cwmsData blobs
[**getCwmsDataBlobsWithBlobId**](BlobApi.md#getCwmsDataBlobsWithBlobId) | **GET** /cwms-data/blobs/{blob-id} | Get cwmsData blobs with blobId


# **getCwmsDataBlobs**
> Blobs getCwmsDataBlobs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobApi(configuration);

let body:.BlobApiGetCwmsDataBlobsRequest = {
  // string | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. (optional)
  office: "office_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response. (optional)
  page: "page_example",
  // string | Deprecated. Use 'page' instead. (optional)
  cursor: "cursor_example",
  // number | Deprecated.  Use page-size instead. (optional)
  pageSize: 1,
  // number | How many entries per page returned. Default 20. (optional)
  pageSize2: 1,
  // string | Posix regular expression describing the blob id's you want (optional)
  like: "like_example",
};

apiInstance.getCwmsDataBlobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | (optional) defaults to undefined
 **cursor** | [**string**] | Deprecated. Use &#39;page&#39; instead. | (optional) defaults to undefined
 **pageSize** | [**number**] | Deprecated.  Use page-size instead. | (optional) defaults to undefined
 **pageSize2** | [**number**] | How many entries per page returned. Default 20. | (optional) defaults to undefined
 **like** | [**string**] | Posix regular expression describing the blob id&#39;s you want | (optional) defaults to undefined


### Return type

**Blobs**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | A list of blobs. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataBlobsWithBlobId**
> getCwmsDataBlobsWithBlobId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlobApi(configuration);

let body:.BlobApiGetCwmsDataBlobsWithBlobIdRequest = {
  // string
  blobId: "blob-id_example",
  // string | Specifies the owning office. (optional)
  office: "office_example",
};

apiInstance.getCwmsDataBlobsWithBlobId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blobId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


