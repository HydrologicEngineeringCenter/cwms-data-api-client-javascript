# cwmsjs.PoolsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataPools**](PoolsApi.md#getCwmsDataPools) | **GET** /cwms-data/pools | Get cwmsData pools
[**getCwmsDataPoolsWithPoolId**](PoolsApi.md#getCwmsDataPoolsWithPoolId) | **GET** /cwms-data/pools/{pool-id} | Get cwmsData pools with poolId


# **getCwmsDataPools**
> Pools getCwmsDataPools()

Returns Pools Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.PoolsApi(configuration);

let body:cwmsjs.PoolsApiGetCwmsDataPoolsRequest = {
  // string | Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned. (optional)
  office: "office_example",
  // string | Project Id mask. Default value:* (optional)
  idMask: "id-mask_example",
  // string | Name mask. Default value:* (optional)
  nameMask: "name-mask_example",
  // string | Bottom level mask. Default value:* (optional)
  bottomMask: "bottom-mask_example",
  // string | Top level mask. Default value:* (optional)
  topMask: "top-mask_example",
  // string | Specifies if the results should include explicit Pools. Default value:false (optional)
  includeExplicit: "include-explicit_example",
  // string | Specifies if the results should include implicit Pools. Default value:true (optional)
  includeImplicit: "include-implicit_example",
  // string | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 100. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataPools(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned. | (optional) defaults to undefined
 **idMask** | [**string**] | Project Id mask. Default value:* | (optional) defaults to undefined
 **nameMask** | [**string**] | Name mask. Default value:* | (optional) defaults to undefined
 **bottomMask** | [**string**] | Bottom level mask. Default value:* | (optional) defaults to undefined
 **topMask** | [**string**] | Top level mask. Default value:* | (optional) defaults to undefined
 **includeExplicit** | [**string**] | Specifies if the results should include explicit Pools. Default value:false | (optional) defaults to undefined
 **includeImplicit** | [**string**] | Specifies if the results should include implicit Pools. Default value:true | (optional) defaults to undefined
 **page** | [**string**] | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 100. | (optional) defaults to undefined


### Return type

**Pools**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Based on the combination of inputs provided the pools were not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataPoolsWithPoolId**
> Pool getCwmsDataPoolsWithPoolId()

Retrieves requested Pool

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.PoolsApi(configuration);

let body:cwmsjs.PoolsApiGetCwmsDataPoolsWithPoolIdRequest = {
  // string | Specifies the pool whose data is to be included in the response.
  poolId: "pool-id_example",
  // string | Specifies the owning office of the Pool whose data is to be included in the response.
  office: "office_example",
  // string | Specifies the project-id of the Pool whose data is to be included in the response.
  projectId: "project-id_example",
  // string | Bottom level mask. Default value:* (optional)
  bottomMask: "bottom-mask_example",
  // string | Top level mask. Default value:* (optional)
  topMask: "top-mask_example",
  // string | Specifies if the results should include explicit Pools. Default value:false (optional)
  includeExplicit: "include-explicit_example",
  // string | Specifies if the results should include implicit Pools. Default value:true (optional)
  includeImplicit: "include-implicit_example",
};

apiInstance.getCwmsDataPoolsWithPoolId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | [**string**] | Specifies the pool whose data is to be included in the response. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the Pool whose data is to be included in the response. | defaults to undefined
 **projectId** | [**string**] | Specifies the project-id of the Pool whose data is to be included in the response. | defaults to undefined
 **bottomMask** | [**string**] | Bottom level mask. Default value:* | (optional) defaults to undefined
 **topMask** | [**string**] | Top level mask. Default value:* | (optional) defaults to undefined
 **includeExplicit** | [**string**] | Specifies if the results should include explicit Pools. Default value:false | (optional) defaults to undefined
 **includeImplicit** | [**string**] | Specifies if the results should include implicit Pools. Default value:true | (optional) defaults to undefined


### Return type

**Pool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Based on the combination of inputs provided the Location Category was not found. |  -  |
**200** | OK |  -  |
**501** | request format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


