# .UnitsApi

All URIs are relative to *https://cwms-data.usace.army.mil/cwms-data*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataUnits**](UnitsApi.md#getCwmsDataUnits) | **GET** /cwms-data/units | Get cwmsData units


# **getCwmsDataUnits**
> void getCwmsDataUnits()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UnitsApi(configuration);

let body:.UnitsApiGetCwmsDataUnitsRequest = {
  // string | Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) (optional)
  format: "format_example",
};

apiInstance.getCwmsDataUnits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**string**] | Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |
**501** | The format requested is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


