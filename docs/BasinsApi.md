# cwmsjs.BasinsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBasins**](BasinsApi.md#getCwmsDataBasins) | **GET** /cwms-data/basins | Get cwmsData basins
[**getCwmsDataBasinsWithBasinId**](BasinsApi.md#getCwmsDataBasinsWithBasinId) | **GET** /cwms-data/basins/{basin-id} | Get cwmsData basins with basinId


# **getCwmsDataBasins**
> Basin getCwmsDataBasins()

Returns CWMS Basin Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.BasinsApi(configuration);

let body:cwmsjs.BasinsApiGetCwmsDataBasinsRequest = {
  // string | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. (optional)
  unit: "unit_example",
};

apiInstance.getCwmsDataBasins(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | (optional) defaults to undefined


### Return type

**Basin**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.named+pg+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | The provided combination of parameters did not find a basin. |  -  |
**200** | OK |  -  |
**501** | Requested format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataBasinsWithBasinId**
> Basin getCwmsDataBasinsWithBasinId()

Returns CWMS Basin Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.BasinsApi(configuration);

let body:cwmsjs.BasinsApiGetCwmsDataBasinsWithBasinIdRequest = {
  // string
  basinId: "basin-id_example",
  // string | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. (optional)
  unit: "unit_example",
};

apiInstance.getCwmsDataBasinsWithBasinId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basinId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | (optional) defaults to undefined


### Return type

**Basin**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.named+pg+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | The provided combination of parameters did not find a basin. |  -  |
**200** | OK |  -  |
**501** | Requested format is not implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


