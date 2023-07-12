# BlobApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataBlobs**](BlobApi.md#getCwmsDataBlobs) | **GET** /cwms-data/blobs | Get cwmsData blobs |
| [**getCwmsDataBlobsWithBlobId**](BlobApi.md#getCwmsDataBlobsWithBlobId) | **GET** /cwms-data/blobs/{blob-id} | Get cwmsData blobs with blobId |


<a name="getCwmsDataBlobs"></a>
# **getCwmsDataBlobs**
> Blobs getCwmsDataBlobs(office, page, cursor, pageSize, pageSize2, like)

Get cwmsData blobs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlobApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    BlobApi apiInstance = new BlobApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office. If this field is not specified, matching information from all offices shall be returned.
    String page = "page_example"; // String | This end point can return a lot of data, this identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
    String cursor = "cursor_example"; // String | Deprecated. Use 'page' instead.
    Integer pageSize = 56; // Integer | Deprecated.  Use page-size instead.
    Integer pageSize2 = 56; // Integer | How many entries per page returned. Default 20.
    String like = "like_example"; // String | Posix regular expression describing the blob id's you want
    try {
      Blobs result = apiInstance.getCwmsDataBlobs(office, page, cursor, pageSize, pageSize2, like);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlobApi#getCwmsDataBlobs");
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
| **pageSize** | **Integer**| Deprecated.  Use page-size instead. | [optional] |
| **pageSize2** | **Integer**| How many entries per page returned. Default 20. | [optional] |
| **like** | **String**| Posix regular expression describing the blob id&#39;s you want | [optional] |

### Return type

[**Blobs**](Blobs.md)

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
| **200** | A list of blobs. |  -  |

<a name="getCwmsDataBlobsWithBlobId"></a>
# **getCwmsDataBlobsWithBlobId**
> getCwmsDataBlobsWithBlobId(blobId, office)

Get cwmsData blobs with blobId

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BlobApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    BlobApi apiInstance = new BlobApi(defaultClient);
    String blobId = "blobId_example"; // String | 
    String office = "office_example"; // String | Specifies the owning office.
    try {
      apiInstance.getCwmsDataBlobsWithBlobId(blobId, office);
    } catch (ApiException e) {
      System.err.println("Exception when calling BlobApi#getCwmsDataBlobsWithBlobId");
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
| **blobId** | **String**|  | |
| **office** | **String**| Specifies the owning office. | [optional] |

### Return type

null (empty response body)

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

