# PoolsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataPools**](PoolsApi.md#getCwmsDataPools) | **GET** /cwms-data/pools | Get cwmsData pools |
| [**getCwmsDataPoolsWithPoolId**](PoolsApi.md#getCwmsDataPoolsWithPoolId) | **GET** /cwms-data/pools/{pool-id} | Get cwmsData pools with poolId |


<a name="getCwmsDataPools"></a>
# **getCwmsDataPools**
> Pools getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, cursor, pageSize, pageSize2)

Get cwmsData pools

Returns Pools Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PoolsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PoolsApi apiInstance = new PoolsApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned.
    String idMask = "idMask_example"; // String | Project Id mask. Default value:*
    String nameMask = "nameMask_example"; // String | Name mask. Default value:*
    String bottomMask = "bottomMask_example"; // String | Bottom level mask. Default value:*
    String topMask = "topMask_example"; // String | Top level mask. Default value:*
    String includeExplicit = "includeExplicit_example"; // String | Specifies if the results should include explicit Pools. Default value:false
    String includeImplicit = "includeImplicit_example"; // String | Specifies if the results should include implicit Pools. Default value:true
    String page = "page_example"; // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
    String cursor = "cursor_example"; // String | Deprecated. Use 'page' instead.
    Integer pageSize = 56; // Integer | How many entries per page returned. Default 100.
    Integer pageSize2 = 56; // Integer | Deprecated. Use 'page-size' instead.
    try {
      Pools result = apiInstance.getCwmsDataPools(office, idMask, nameMask, bottomMask, topMask, includeExplicit, includeImplicit, page, cursor, pageSize, pageSize2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PoolsApi#getCwmsDataPools");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **office** | **String**| Specifies the owning office of the data in the response. If this field is not specified, matching items from all offices shall be returned. | [optional] |
| **idMask** | **String**| Project Id mask. Default value:* | [optional] |
| **nameMask** | **String**| Name mask. Default value:* | [optional] |
| **bottomMask** | **String**| Bottom level mask. Default value:* | [optional] |
| **topMask** | **String**| Top level mask. Default value:* | [optional] |
| **includeExplicit** | **String**| Specifies if the results should include explicit Pools. Default value:false | [optional] |
| **includeImplicit** | **String**| Specifies if the results should include implicit Pools. Default value:true | [optional] |
| **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] |
| **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] |
| **pageSize** | **Integer**| How many entries per page returned. Default 100. | [optional] |
| **pageSize2** | **Integer**| Deprecated. Use &#39;page-size&#39; instead. | [optional] |

### Return type

[**Pools**](Pools.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Based on the combination of inputs provided the pools were not found. |  -  |
| **200** | OK |  -  |
| **501** | request format is not implemented |  -  |

<a name="getCwmsDataPoolsWithPoolId"></a>
# **getCwmsDataPoolsWithPoolId**
> Pool getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit)

Get cwmsData pools with poolId

Retrieves requested Pool

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PoolsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PoolsApi apiInstance = new PoolsApi(defaultClient);
    String poolId = "poolId_example"; // String | Specifies the pool whose data is to be included in the response.
    String office = "office_example"; // String | Specifies the owning office of the Pool whose data is to be included in the response.
    String projectId = "projectId_example"; // String | Specifies the project-id of the Pool whose data is to be included in the response.
    String bottomMask = "bottomMask_example"; // String | Bottom level mask. Default value:*
    String topMask = "topMask_example"; // String | Top level mask. Default value:*
    String includeExplicit = "includeExplicit_example"; // String | Specifies if the results should include explicit Pools. Default value:false
    String includeImplicit = "includeImplicit_example"; // String | Specifies if the results should include implicit Pools. Default value:true
    try {
      Pool result = apiInstance.getCwmsDataPoolsWithPoolId(poolId, office, projectId, bottomMask, topMask, includeExplicit, includeImplicit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PoolsApi#getCwmsDataPoolsWithPoolId");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **poolId** | **String**| Specifies the pool whose data is to be included in the response. | |
| **office** | **String**| Specifies the owning office of the Pool whose data is to be included in the response. | |
| **projectId** | **String**| Specifies the project-id of the Pool whose data is to be included in the response. | |
| **bottomMask** | **String**| Bottom level mask. Default value:* | [optional] |
| **topMask** | **String**| Top level mask. Default value:* | [optional] |
| **includeExplicit** | **String**| Specifies if the results should include explicit Pools. Default value:false | [optional] |
| **includeImplicit** | **String**| Specifies if the results should include implicit Pools. Default value:true | [optional] |

### Return type

[**Pool**](Pool.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Based on the combination of inputs provided the Location Category was not found. |  -  |
| **200** | OK |  -  |
| **501** | request format is not implemented |  -  |

