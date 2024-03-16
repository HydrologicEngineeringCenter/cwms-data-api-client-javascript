# cwmsjs.BlobApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBlobs**](BlobApi.md#getCwmsDataBlobs) | **GET** /cwms-data/blobs | Get cwmsData blobs
[**getCwmsDataBlobsWithBlobId**](BlobApi.md#getCwmsDataBlobsWithBlobId) | **GET** /cwms-data/blobs/{blob-id} | Get cwmsData blobs with blobId
[**postCwmsDataBlobs**](BlobApi.md#postCwmsDataBlobs) | **POST** /cwms-data/blobs | Post cwmsData blobs


# **getCwmsDataBlobs**
> Blobs getCwmsDataBlobs()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.BlobApi(configuration);

let body:cwmsjs.BlobApiGetCwmsDataBlobsRequest = {
  // string | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. (optional)
  office: "office_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 20. (optional)
  pageSize: 1,
  // string | Posix <a href=\"regexp.html\">regular expression</a> describing the blob id\'s you want (optional)
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
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 20. | (optional) defaults to undefined
 **like** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; describing the blob id\&#39;s you want | (optional) defaults to undefined


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
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.BlobApi(configuration);

let body:cwmsjs.BlobApiGetCwmsDataBlobsWithBlobIdRequest = {
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

# **postCwmsDataBlobs**
> postCwmsDataBlobs(blob)

Create new Blob

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.BlobApi(configuration);

let body:cwmsjs.BlobApiPostCwmsDataBlobsRequest = {
  // Blob
  blob: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
    mediaTypeId: "mediaTypeId_example",
    value: [
      'YQ==',
    ],
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataBlobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blob** | **Blob**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json;version=2, application/xml;version=2
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


