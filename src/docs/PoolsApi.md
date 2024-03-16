# cwmsjs.PoolsApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataPools**](PoolsApi.md#getCwmsDataPools) | **GET** /cwms-data/pools | Get cwmsData pools
[**getCwmsDataPoolsWithPoolId**](PoolsApi.md#getCwmsDataPoolsWithPoolId) | **GET** /cwms-data/pools/{pool-id} | Get cwmsData pools with poolId



## getCwmsDataPools

> Pools getCwmsDataPools(opts)

Get cwmsData pools

Returns Pools Data

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.PoolsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
  'idMask': "idMask_example", // String | Project Id mask. Default value:*
  'nameMask': "nameMask_example", // String | Name mask. Default value:*
  'bottomMask': "bottomMask_example", // String | Bottom level mask. Default value:*
  'topMask': "topMask_example", // String | Top level mask. Default value:*
  'includeExplicit': "includeExplicit_example", // String | Specifies if the results should include explicit Pools. Default value:false
  'includeImplicit': "includeImplicit_example", // String | Specifies if the results should include implicit Pools. Default value:true
  'page': "page_example", // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 100.
};
apiInstance.getCwmsDataPools(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned. | [optional] 
 **idMask** | **String**| Project Id mask. Default value:* | [optional] 
 **nameMask** | **String**| Name mask. Default value:* | [optional] 
 **bottomMask** | **String**| Bottom level mask. Default value:* | [optional] 
 **topMask** | **String**| Top level mask. Default value:* | [optional] 
 **includeExplicit** | **String**| Specifies if the results should include explicit Pools. Default value:false | [optional] 
 **includeImplicit** | **String**| Specifies if the results should include implicit Pools. Default value:true | [optional] 
 **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 100. | [optional] 

### Return type

[**Pools**](Pools.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataPoolsWithPoolId

> Pool getCwmsDataPoolsWithPoolId(poolId, office, projectId, opts)

Get cwmsData pools with poolId

Retrieves requested Pool

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.PoolsApi();
let poolId = "poolId_example"; // String | Specifies the pool whose data is to be included in the response.
let office = "office_example"; // String | Specifies the owning office of the Pool whose data is to be included in the response.
let projectId = "projectId_example"; // String | Specifies the project-id of the Pool whose data is to be included in the response.
let opts = {
  'bottomMask': "bottomMask_example", // String | Bottom level mask. Default value:*
  'topMask': "topMask_example", // String | Top level mask. Default value:*
  'includeExplicit': "includeExplicit_example", // String | Specifies if the results should include explicit Pools. Default value:false
  'includeImplicit': "includeImplicit_example" // String | Specifies if the results should include implicit Pools. Default value:true
};
apiInstance.getCwmsDataPoolsWithPoolId(poolId, office, projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**| Specifies the pool whose data is to be included in the response. | 
 **office** | **String**| Specifies the owning office of the Pool whose data is to be included in the response. | 
 **projectId** | **String**| Specifies the project-id of the Pool whose data is to be included in the response. | 
 **bottomMask** | **String**| Bottom level mask. Default value:* | [optional] 
 **topMask** | **String**| Top level mask. Default value:* | [optional] 
 **includeExplicit** | **String**| Specifies if the results should include explicit Pools. Default value:false | [optional] 
 **includeImplicit** | **String**| Specifies if the results should include implicit Pools. Default value:true | [optional] 

### Return type

[**Pool**](Pool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2

