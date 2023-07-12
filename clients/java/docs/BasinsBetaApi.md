# BasinsBetaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataBasins**](BasinsBetaApi.md#getCwmsDataBasins) | **GET** /cwms-data/basins | Get cwmsData basins |
| [**getCwmsDataBasinsWithBasinId**](BasinsBetaApi.md#getCwmsDataBasinsWithBasinId) | **GET** /cwms-data/basins/{basin-id} | Get cwmsData basins with basinId |


<a name="getCwmsDataBasins"></a>
# **getCwmsDataBasins**
> Basin getCwmsDataBasins(office, unit)

Get cwmsData basins

Returns CWMS Basin Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BasinsBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    BasinsBetaApi apiInstance = new BasinsBetaApi(defaultClient);
    String office = "office_example"; // String | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
    String unit = "unit_example"; // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
    try {
      Basin result = apiInstance.getCwmsDataBasins(office, unit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BasinsBetaApi#getCwmsDataBasins");
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
| **office** | **String**| Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | [optional] |
| **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | [optional] |

### Return type

[**Basin**](Basin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.named+pg+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | The provided combination of parameters did not find a basin. |  -  |
| **200** | OK |  -  |
| **501** | Requested format is not implemented |  -  |

<a name="getCwmsDataBasinsWithBasinId"></a>
# **getCwmsDataBasinsWithBasinId**
> Basin getCwmsDataBasinsWithBasinId(basinId, office, unit)

Get cwmsData basins with basinId

Returns CWMS Basin Data

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BasinsBetaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    BasinsBetaApi apiInstance = new BasinsBetaApi(defaultClient);
    String basinId = "basinId_example"; // String | 
    String office = "office_example"; // String | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
    String unit = "unit_example"; // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
    try {
      Basin result = apiInstance.getCwmsDataBasinsWithBasinId(basinId, office, unit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BasinsBetaApi#getCwmsDataBasinsWithBasinId");
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
| **basinId** | **String**|  | |
| **office** | **String**| Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | [optional] |
| **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | [optional] |

### Return type

[**Basin**](Basin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.named+pg+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | The provided combination of parameters did not find a basin. |  -  |
| **200** | OK |  -  |
| **501** | Requested format is not implemented |  -  |

