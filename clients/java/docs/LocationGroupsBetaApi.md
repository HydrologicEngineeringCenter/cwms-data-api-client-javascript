# LocationGroupsBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataLocationGroup**](LocationGroupsBetaApi.md#getCwmsDataLocationGroup) | **GET** /cwms-data/location/group | Get cwmsData location group |
| [**getCwmsDataLocationGroupWithGroupId**](LocationGroupsBetaApi.md#getCwmsDataLocationGroupWithGroupId) | **GET** /cwms-data/location/group/{group-id} | Get cwmsData location group with groupId |


<a name="getCwmsDataLocationGroup"></a>
# **getCwmsDataLocationGroup**
> List&lt;LocationGroup&gt; getCwmsDataLocationGroup(office, includeAssigned, includeAssigned2)

Get cwmsData location group

Returns CWMS Location Groups Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LocationGroupsBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LocationGroupsBetaApi apiInstance = new LocationGroupsBetaApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
    Boolean includeAssigned = true; // Boolean | Include the assigned locations in the returned location groups. (default: false)
    Boolean includeAssigned2 = true; // Boolean | Deprecated. Use include-assigned instead.
    try {
      List<LocationGroup> result = apiInstance.getCwmsDataLocationGroup(office, includeAssigned, includeAssigned2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LocationGroupsBetaApi#getCwmsDataLocationGroup");
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
| **office** | **String**| Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned. | [optional] |
| **includeAssigned** | **Boolean**| Include the assigned locations in the returned location groups. (default: false) | [optional] |
| **includeAssigned2** | **Boolean**| Deprecated. Use include-assigned instead. | [optional] |

### Return type

[**List&lt;LocationGroup&gt;**](LocationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | OK |  -  |

<a name="getCwmsDataLocationGroupWithGroupId"></a>
# **getCwmsDataLocationGroupWithGroupId**
> LocationGroup getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId)

Get cwmsData location group with groupId

Retrieves requested Location Group

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LocationGroupsBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LocationGroupsBetaApi apiInstance = new LocationGroupsBetaApi(defaultClient);
    String groupId = "groupId_example"; // String | Specifies the location_group whose data is to be included in the response
    String office = "office_example"; // String | Specifies the owning office of the location group whose data is to be included in the response.
    String categoryId = "categoryId_example"; // String | Specifies the category containing the location group whose data is to be included in the response.
    try {
      LocationGroup result = apiInstance.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LocationGroupsBetaApi#getCwmsDataLocationGroupWithGroupId");
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
| **groupId** | **String**| Specifies the location_group whose data is to be included in the response | |
| **office** | **String**| Specifies the owning office of the location group whose data is to be included in the response. | |
| **categoryId** | **String**| Specifies the category containing the location group whose data is to be included in the response. | |

### Return type

[**LocationGroup**](LocationGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv, application/geo+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | OK |  -  |

