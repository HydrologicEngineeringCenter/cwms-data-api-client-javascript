# cwmsjs.AuthorizationApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataAuthKeysWithKeyName**](AuthorizationApi.md#deleteCwmsDataAuthKeysWithKeyName) | **DELETE** /cwms-data/auth/keys/{key-name} | Delete cwmsData auth keys with keyName
[**getCwmsDataAuthKeys**](AuthorizationApi.md#getCwmsDataAuthKeys) | **GET** /cwms-data/auth/keys | Get cwmsData auth keys
[**getCwmsDataAuthKeysWithKeyName**](AuthorizationApi.md#getCwmsDataAuthKeysWithKeyName) | **GET** /cwms-data/auth/keys/{key-name} | Get cwmsData auth keys with keyName
[**postCwmsDataAuthKeys**](AuthorizationApi.md#postCwmsDataAuthKeys) | **POST** /cwms-data/auth/keys | Post cwmsData auth keys


# **deleteCwmsDataAuthKeysWithKeyName**
> ApiKey deleteCwmsDataAuthKeysWithKeyName()

Delete API key for a user

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.AuthorizationApi(configuration);

let body:cwmsjs.AuthorizationApiDeleteCwmsDataAuthKeysWithKeyNameRequest = {
  // string
  keyName: "key-name_example",
  // ApiKey (optional)
  apiKey: {
    userId: "userId_example",
    keyName: "keyName_example",
    apiKey: "apiKey_example",
    expires: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.deleteCwmsDataAuthKeysWithKeyName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **ApiKey**|  |
 **keyName** | [**string**] |  | defaults to undefined


### Return type

**ApiKey**

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataAuthKeys**
> Array<ApiKey> getCwmsDataAuthKeys()

View all keys for the current user

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.AuthorizationApi(configuration);

let body:any = {};

apiInstance.getCwmsDataAuthKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ApiKey>**

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

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
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataAuthKeysWithKeyName**
> ApiKey getCwmsDataAuthKeysWithKeyName()

View specific key

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.AuthorizationApi(configuration);

let body:cwmsjs.AuthorizationApiGetCwmsDataAuthKeysWithKeyNameRequest = {
  // string | Name of the specific key to get more information for. NOTE: Case-sensitive.
  keyName: "key-name_example",
};

apiInstance.getCwmsDataAuthKeysWithKeyName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyName** | [**string**] | Name of the specific key to get more information for. NOTE: Case-sensitive. | defaults to undefined


### Return type

**ApiKey**

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

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
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataAuthKeys**
> ApiKey postCwmsDataAuthKeys()

Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.AuthorizationApi(configuration);

let body:cwmsjs.AuthorizationApiPostCwmsDataAuthKeysRequest = {
  // ApiKey (optional)
  apiKey: {
    userId: "userId_example",
    keyName: "keyName_example",
    apiKey: "apiKey_example",
    expires: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.postCwmsDataAuthKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **ApiKey**|  |


### Return type

**ApiKey**

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


