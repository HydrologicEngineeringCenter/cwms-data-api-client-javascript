# LevelsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCwmsDataLevelsWithLevelId**](LevelsApi.md#deleteCwmsDataLevelsWithLevelId) | **DELETE** /cwms-data/levels/{level-id} | Delete cwmsData levels with levelId |
| [**getCwmsDataLevels**](LevelsApi.md#getCwmsDataLevels) | **GET** /cwms-data/levels | Get cwmsData levels |
| [**getCwmsDataLevelsWithLevelId**](LevelsApi.md#getCwmsDataLevelsWithLevelId) | **GET** /cwms-data/levels/{level-id} | Get cwmsData levels with levelId |
| [**patchCwmsDataLevelsWithLevelId**](LevelsApi.md#patchCwmsDataLevelsWithLevelId) | **PATCH** /cwms-data/levels/{level-id} | Patch cwmsData levels with levelId |
| [**postCwmsDataLevels**](LevelsApi.md#postCwmsDataLevels) | **POST** /cwms-data/levels | Post cwmsData levels |


<a name="deleteCwmsDataLevelsWithLevelId"></a>
# **deleteCwmsDataLevelsWithLevelId**
> deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, date, effectiveDate)

Delete cwmsData levels with levelId

Delete CWMS Location Level

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LevelsApi apiInstance = new LevelsApi(defaultClient);
    String levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be deleted
    Boolean cascadeDelete = true; // Boolean | 
    String office = "office_example"; // String | Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
    String date = "date_example"; // String | Deprecated, use effective-date
    String effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
    try {
      apiInstance.deleteCwmsDataLevelsWithLevelId(levelId, cascadeDelete, office, date, effectiveDate);
    } catch (ApiException e) {
      System.err.println("Exception when calling LevelsApi#deleteCwmsDataLevelsWithLevelId");
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
| **levelId** | **String**| Specifies the location level id of the Location Level to be deleted | |
| **cascadeDelete** | **Boolean**|  | [optional] |
| **office** | **String**| Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices. | [optional] |
| **date** | **String**| Deprecated, use effective-date | [optional] |
| **effectiveDate** | **String**| Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level. | [optional] |

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

<a name="getCwmsDataLevels"></a>
# **getCwmsDataLevels**
> Object getCwmsDataLevels(name, levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize)

Get cwmsData levels

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LevelsApi apiInstance = new LevelsApi(defaultClient);
    String name = "name_example"; // String | Deprecated, use level-id-mask. 
    String levelIdMask = "levelIdMask_example"; // String | Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
    String office = "office_example"; // String | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
    String unit = "unit_example"; // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
    String datum = "datum_example"; // String | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
    String begin = "begin_example"; // String | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
    String end = "end_example"; // String | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
    String timezone = "timezone_example"; // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
    String format = "format_example"; // String | Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version=2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)  
    String page = "page_example"; // String | This identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
    Integer pageSize = 56; // Integer | How many entries per page returned. Default 100.
    try {
      Object result = apiInstance.getCwmsDataLevels(name, levelIdMask, office, unit, datum, begin, end, timezone, format, page, pageSize);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LevelsApi#getCwmsDataLevels");
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
| **name** | **String**| Deprecated, use level-id-mask.  | [optional] |
| **levelIdMask** | **String**| Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all. | [optional] |
| **office** | **String**| Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | [optional] |
| **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] |
| **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] |
| **begin** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. | [optional] |
| **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time | [optional] |
| **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | [optional] |
| **format** | **String**| Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)   | [optional] |
| **page** | **String**| This identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] |
| **pageSize** | **Integer**| How many entries per page returned. Default 100. | [optional] |

### Return type

**Object**

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
| **404** | Not Found |  -  |
| **200** | OK |  -  |

<a name="getCwmsDataLevelsWithLevelId"></a>
# **getCwmsDataLevelsWithLevelId**
> LocationLevel getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, date)

Get cwmsData levels with levelId

Retrieves requested Location Level

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LevelsApi apiInstance = new LevelsApi(defaultClient);
    String levelId = "levelId_example"; // String | Specifies the requested location level.
    String office = "office_example"; // String | Specifies the office of the Location Level to be returned
    String effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of Location Level to be returned
    String date = "date_example"; // String | Deprecated, use effective-date
    try {
      LocationLevel result = apiInstance.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, date);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LevelsApi#getCwmsDataLevelsWithLevelId");
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
| **levelId** | **String**| Specifies the requested location level. | |
| **office** | **String**| Specifies the office of the Location Level to be returned | |
| **effectiveDate** | **String**| Specifies the effective date of Location Level to be returned | |
| **date** | **String**| Deprecated, use effective-date | [optional] |

### Return type

[**LocationLevel**](LocationLevel.md)

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
| **404** | Not Found |  -  |
| **200** | OK |  -  |

<a name="patchCwmsDataLevelsWithLevelId"></a>
# **patchCwmsDataLevelsWithLevelId**
> patchCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, locationLevel, date)

Patch cwmsData levels with levelId

Update CWMS Location Level

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LevelsApi apiInstance = new LevelsApi(defaultClient);
    String levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be updated
    String office = "office_example"; // String | Specifies the office in which Location Level will be updated
    String effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of Location Level that will be updated
    LocationLevel locationLevel = new LocationLevel(); // LocationLevel | 
    String date = "date_example"; // String | Deprecated, use effective-date
    try {
      apiInstance.patchCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, locationLevel, date);
    } catch (ApiException e) {
      System.err.println("Exception when calling LevelsApi#patchCwmsDataLevelsWithLevelId");
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
| **levelId** | **String**| Specifies the location level id of the Location Level to be updated | |
| **office** | **String**| Specifies the office in which Location Level will be updated | |
| **effectiveDate** | **String**| Specifies the effective date of Location Level that will be updated | |
| **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | |
| **date** | **String**| Deprecated, use effective-date | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

<a name="postCwmsDataLevels"></a>
# **postCwmsDataLevels**
> postCwmsDataLevels(office, locationLevel)

Post cwmsData levels

Create new CWMS Location Level

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LevelsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    LevelsApi apiInstance = new LevelsApi(defaultClient);
    String office = "office_example"; // String | Specifies the office in which Location Level will be created
    LocationLevel locationLevel = new LocationLevel(); // LocationLevel | 
    try {
      apiInstance.postCwmsDataLevels(office, locationLevel);
    } catch (ApiException e) {
      System.err.println("Exception when calling LevelsApi#postCwmsDataLevels");
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
| **office** | **String**| Specifies the office in which Location Level will be created | |
| **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **500** | Server Error |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

