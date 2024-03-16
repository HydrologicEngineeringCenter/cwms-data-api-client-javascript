# cwmsjs.StatesApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataStates**](StatesApi.md#getCwmsDataStates) | **GET** /cwms-data/states | Get cwmsData states


# **getCwmsDataStates**
> Array<State> getCwmsDataStates()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.StatesApi(configuration);

let body:any = {};

apiInstance.getCwmsDataStates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<State>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | A list of states. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


