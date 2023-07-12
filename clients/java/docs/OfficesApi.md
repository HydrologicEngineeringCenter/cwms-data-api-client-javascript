# OfficesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCwmsDataOffices**](OfficesApi.md#getCwmsDataOffices) | **GET** /cwms-data/offices | Get cwmsData offices |
| [**getCwmsDataOfficesWithOffice**](OfficesApi.md#getCwmsDataOfficesWithOffice) | **GET** /cwms-data/offices/{office} | Get cwmsData offices with office |


<a name="getCwmsDataOffices"></a>
# **getCwmsDataOffices**
> OfficeFormatV1 getCwmsDataOffices(format)

Get cwmsData offices

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OfficesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    OfficesApi apiInstance = new OfficesApi(defaultClient);
    String format = "format_example"; // String | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
    try {
      OfficeFormatV1 result = apiInstance.getCwmsDataOffices(format);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OfficesApi#getCwmsDataOffices");
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
| **format** | **String**| (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | [optional] |

### Return type

[**OfficeFormatV1**](OfficeFormatV1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, , application/json;version=2, text/tab-separated-values, text/csv, application/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | A list of offices. |  -  |

<a name="getCwmsDataOfficesWithOffice"></a>
# **getCwmsDataOfficesWithOffice**
> OfficeFormatV1 getCwmsDataOfficesWithOffice(office, format)

Get cwmsData offices with office

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OfficesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    OfficesApi apiInstance = new OfficesApi(defaultClient);
    String office = "office_example"; // String | The 3 letter office ID you want more information for
    String format = "format_example"; // String | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
    try {
      OfficeFormatV1 result = apiInstance.getCwmsDataOfficesWithOffice(office, format);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OfficesApi#getCwmsDataOfficesWithOffice");
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
| **office** | **String**| The 3 letter office ID you want more information for | |
| **format** | **String**| (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | [optional] |

### Return type

[**OfficeFormatV1**](OfficeFormatV1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, , application/json;version=2, text/tab-separated-values, text/csv, application/xml

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **200** | A list of offices. |  -  |

