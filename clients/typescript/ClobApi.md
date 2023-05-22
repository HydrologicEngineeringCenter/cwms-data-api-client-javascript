# .ClobApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataClobs**](ClobApi.md#getCwmsDataClobs) | **GET** /cwms-data/clobs | Get cwmsData clobs
[**getCwmsDataClobsWithClobId**](ClobApi.md#getCwmsDataClobsWithClobId) | **GET** /cwms-data/clobs/{clob-id} | Get cwmsData clobs with clobId


# **getCwmsDataClobs**
> Clobs getCwmsDataClobs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClobApi(configuration);

let body:.ClobApiGetCwmsDataClobsRequest = {
  // string | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. (optional)
  office: "office_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response. (optional)
  page: "page_example",
  // string | Deprecated. Use 'page' instead. (optional)
  cursor: "cursor_example",
  // number | How many entries per page returned. Default 20. (optional)
  pageSize: 1,
  // number | Deprecated, use 'page-size' instead. (optional)
  pageSize2: 1,
  // boolean | Do you want the value associated with this particular clob (default: false) (optional)
  includeValues: true,
  // boolean | Deprecated, use 'include-values' instead. (optional)
  includeValues2: true,
  // string | Posix regular expression matching against the id (optional)
  like: "like_example",
};

apiInstance.getCwmsDataClobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | (optional) defaults to undefined
 **cursor** | [**string**] | Deprecated. Use &#39;page&#39; instead. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 20. | (optional) defaults to undefined
 **pageSize2** | [**number**] | Deprecated, use &#39;page-size&#39; instead. | (optional) defaults to undefined
 **includeValues** | [**boolean**] | Do you want the value associated with this particular clob (default: false) | (optional) defaults to undefined
 **includeValues2** | [**boolean**] | Deprecated, use &#39;include-values&#39; instead. | (optional) defaults to undefined
 **like** | [**string**] | Posix regular expression matching against the id | (optional) defaults to undefined


### Return type

**Clobs**

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
**200** | A list of clobs. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataClobsWithClobId**
> Clob getCwmsDataClobsWithClobId()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClobApi(configuration);

let body:.ClobApiGetCwmsDataClobsWithClobIdRequest = {
  // string
  clobId: "clob-id_example",
  // string | Specifies the owning office. (optional)
  office: "office_example",
};

apiInstance.getCwmsDataClobsWithClobId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clobId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office. | (optional) defaults to undefined


### Return type

**Clob**

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
**200** | Returns requested clob. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


