# cwmsjs.OfficesApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataOffices**](OfficesApi.md#getCwmsDataOffices) | **GET** /cwms-data/offices | Get cwmsData offices
[**getCwmsDataOfficesWithOffice**](OfficesApi.md#getCwmsDataOfficesWithOffice) | **GET** /cwms-data/offices/{office} | Get cwmsData offices with office


# **getCwmsDataOffices**
> OfficeFormatV1 getCwmsDataOffices()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.OfficesApi(configuration);

let body:cwmsjs.OfficesApiGetCwmsDataOfficesRequest = {
  // string | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) (optional)
  format: "format_example",
  // boolean | A flag (\'True\'/\'False\') When set to true this returns offices that have operational data. Default value is <b>False</b>,. <a href=\"https://github.com/USACE/cwms-data-api/issues/321\" target=\"_blank\">Feature #321</a> (optional)
  hasData: true,
};

apiInstance.getCwmsDataOffices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | (optional) defaults to undefined
 **hasData** | [**boolean**] | A flag (\&#39;True\&#39;/\&#39;False\&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt; | (optional) defaults to undefined


### Return type

**OfficeFormatV1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, , application/json;version=2, text/tab-separated-values, text/csv, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | A list of offices. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataOfficesWithOffice**
> OfficeFormatV1 getCwmsDataOfficesWithOffice()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.OfficesApi(configuration);

let body:cwmsjs.OfficesApiGetCwmsDataOfficesWithOfficeRequest = {
  // string | The 3 letter office ID you want more information for
  office: "office_example",
  // string | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) (optional)
  format: "format_example",
};

apiInstance.getCwmsDataOfficesWithOffice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | The 3 letter office ID you want more information for | defaults to undefined
 **format** | [**string**] | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | (optional) defaults to undefined


### Return type

**OfficeFormatV1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, , application/json;version=2, text/tab-separated-values, text/csv, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | A list of offices. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


