# cwmsjs.ClobApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataClobsWithClobId**](ClobApi.md#deleteCwmsDataClobsWithClobId) | **DELETE** /cwms-data/clobs/{clob-id} | Delete cwmsData clobs with clobId
[**getCwmsDataClobs**](ClobApi.md#getCwmsDataClobs) | **GET** /cwms-data/clobs | Get cwmsData clobs
[**getCwmsDataClobsWithClobId**](ClobApi.md#getCwmsDataClobsWithClobId) | **GET** /cwms-data/clobs/{clob-id} | Get cwmsData clobs with clobId
[**patchCwmsDataClobsWithClobId**](ClobApi.md#patchCwmsDataClobsWithClobId) | **PATCH** /cwms-data/clobs/{clob-id} | Patch cwmsData clobs with clobId
[**postCwmsDataClobs**](ClobApi.md#postCwmsDataClobs) | **POST** /cwms-data/clobs | Post cwmsData clobs


# **deleteCwmsDataClobsWithClobId**
> deleteCwmsDataClobsWithClobId()

Delete clob

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.ClobApi(configuration);

let body:cwmsjs.ClobApiDeleteCwmsDataClobsWithClobIdRequest = {
  // string | Specifies the id of the clob to be deleted
  clobId: "clob-id_example",
  // string | Specifies the office of the clob.
  office: "office_example",
};

apiInstance.deleteCwmsDataClobsWithClobId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clobId** | [**string**] | Specifies the id of the clob to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the office of the clob. | defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

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

# **getCwmsDataClobs**
> Clobs getCwmsDataClobs()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.ClobApi(configuration);

let body:cwmsjs.ClobApiGetCwmsDataClobsRequest = {
  // string | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. (optional)
  office: "office_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 20. (optional)
  pageSize: 1,
  // boolean | Do you want the value associated with this particular clob (default: false) (optional)
  includeValues: true,
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the id (optional)
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
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 20. | (optional) defaults to undefined
 **includeValues** | [**boolean**] | Do you want the value associated with this particular clob (default: false) | (optional) defaults to undefined
 **like** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the id | (optional) defaults to undefined


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
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.ClobApi(configuration);

let body:cwmsjs.ClobApiGetCwmsDataClobsWithClobIdRequest = {
  // string
  clobId: "clob-id_example",
  // string | Specifies the owning office. (optional)
  office: "office_example",
  // string | If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\'s that contain \'/\' or other special characters.  Because of abuse even properly escaped \'/\' in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \'/\' you can\'t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \"ignored\" is suggested. (optional)
  clobId2: "clob-id_example",
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
 **clobId2** | [**string**] | If this _query_ parameter is provided the id _path_ parameter is ignored and the value of the query parameter is used.   Note: this query parameter is necessary for id\&#39;s that contain \&#39;/\&#39; or other special characters.  Because of abuse even properly escaped \&#39;/\&#39; in url paths are blocked.  When using this query parameter a valid path parameter must still be provided for the request to be properly routed.  If your clob id contains \&#39;/\&#39; you can\&#39;t specify the clob-id query parameter and also specify the id path parameter because firewall and/or server rules will deny the request even though you are specifying this override. \&quot;ignored\&quot; is suggested. | (optional) defaults to undefined


### Return type

**Clob**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, text/plain


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

# **patchCwmsDataClobsWithClobId**
> patchCwmsDataClobsWithClobId(clob)

Update clob

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.ClobApi(configuration);

let body:cwmsjs.ClobApiPatchCwmsDataClobsWithClobIdRequest = {
  // string | Specifies the id of the clob to be updated
  clobId: "clob-id_example",
  // Clob
  clob: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
    value: "value_example",
  },
  // boolean | If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true (optional)
  ignoreNulls: true,
};

apiInstance.patchCwmsDataClobsWithClobId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clob** | **Clob**|  |
 **clobId** | [**string**] | Specifies the id of the clob to be updated | defaults to undefined
 **ignoreNulls** | [**boolean**] | If true, null and empty fields in the provided clob will be ignored and the existing value of those fields left in place. Default: true | (optional) defaults to undefined


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

# **postCwmsDataClobs**
> postCwmsDataClobs(clob)

Create new Clob

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.ClobApi(configuration);

let body:cwmsjs.ClobApiPostCwmsDataClobsRequest = {
  // Clob
  clob: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
    value: "value_example",
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataClobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clob** | **Clob**|  |
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


