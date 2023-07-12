# ClobApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataClobs**](ClobApi.md#getCwmsDataClobs) | **GET** /cwms-data/clobs | Get cwmsData clobs |
| [**getCwmsDataClobsWithClobId**](ClobApi.md#getCwmsDataClobsWithClobId) | **GET** /cwms-data/clobs/{clob-id} | Get cwmsData clobs with clobId |


<a name="getCwmsDataClobs"></a>
# **getCwmsDataClobs**
> Clobs getCwmsDataClobs(office, page, cursor, pageSize, pageSize2, includeValues, includeValues2, like)

Get cwmsData clobs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClobApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    ClobApi apiInstance = new ClobApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
    String page = "page_example"; // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
    String cursor = "cursor_example"; // String | Deprecated. Use 'page' instead.
    Integer pageSize = 56; // Integer | How many entries per page returned. Default 20.
    Integer pageSize2 = 56; // Integer | Deprecated, use 'page-size' instead.
    Boolean includeValues = true; // Boolean | Do you want the value associated with this particular clob (default: false)
    Boolean includeValues2 = true; // Boolean | Deprecated, use 'include-values' instead.
    String like = "like_example"; // String | Posix regular expression matching against the id
    try {
      Clobs result = apiInstance.getCwmsDataClobs(office, page, cursor, pageSize, pageSize2, includeValues, includeValues2, like);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClobApi#getCwmsDataClobs");
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
| **office** | **String**| Specifies the owning office. If this field is not specified, matching information from all offices shall be returned. | [optional] |
| **page** | **String**| This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] |
| **cursor** | **String**| Deprecated. Use &#39;page&#39; instead. | [optional] |
| **pageSize** | **Integer**| How many entries per page returned. Default 20. | [optional] |
| **pageSize2** | **Integer**| Deprecated, use &#39;page-size&#39; instead. | [optional] |
| **includeValues** | **Boolean**| Do you want the value associated with this particular clob (default: false) | [optional] |
| **includeValues2** | **Boolean**| Deprecated, use &#39;include-values&#39; instead. | [optional] |
| **like** | **String**| Posix regular expression matching against the id | [optional] |

### Return type

[**Clobs**](Clobs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml;version=2

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | A list of clobs. |  -  |

<a name="getCwmsDataClobsWithClobId"></a>
# **getCwmsDataClobsWithClobId**
> Clob getCwmsDataClobsWithClobId(clobId, office)

Get cwmsData clobs with clobId

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ClobApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    ClobApi apiInstance = new ClobApi(defaultClient);
    String clobId = "clobId_example"; // String | 
    String office = "office_example"; // String | Specifies the owning office.
    try {
      Clob result = apiInstance.getCwmsDataClobsWithClobId(clobId, office);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ClobApi#getCwmsDataClobsWithClobId");
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
| **clobId** | **String**|  | |
| **office** | **String**| Specifies the owning office. | [optional] |

### Return type

[**Clob**](Clob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | Returns requested clob. |  -  |

