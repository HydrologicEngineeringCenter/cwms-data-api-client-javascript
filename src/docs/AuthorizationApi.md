# cwmsjs.AuthorizationApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataAuthKeysWithKeyName**](AuthorizationApi.md#deleteCwmsDataAuthKeysWithKeyName) | **DELETE** /cwms-data/auth/keys/{key-name} | Delete cwmsData auth keys with keyName
[**getCwmsDataAuthKeys**](AuthorizationApi.md#getCwmsDataAuthKeys) | **GET** /cwms-data/auth/keys | Get cwmsData auth keys
[**getCwmsDataAuthKeysWithKeyName**](AuthorizationApi.md#getCwmsDataAuthKeysWithKeyName) | **GET** /cwms-data/auth/keys/{key-name} | Get cwmsData auth keys with keyName
[**postCwmsDataAuthKeys**](AuthorizationApi.md#postCwmsDataAuthKeys) | **POST** /cwms-data/auth/keys | Post cwmsData auth keys



## deleteCwmsDataAuthKeysWithKeyName

> ApiKey deleteCwmsDataAuthKeysWithKeyName(keyName, opts)

Delete cwmsData auth keys with keyName

Delete API key for a user

### Example

```javascript
import cwmsjs from 'cwmsjs';
let defaultClient = cwmsjs.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new cwmsjs.AuthorizationApi();
let keyName = "keyName_example"; // String | 
let opts = {
  'apiKey': new cwmsjs.ApiKey() // ApiKey | 
};
apiInstance.deleteCwmsDataAuthKeysWithKeyName(keyName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyName** | **String**|  | 
 **apiKey** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCwmsDataAuthKeys

> [ApiKey] getCwmsDataAuthKeys()

Get cwmsData auth keys

View all keys for the current user

### Example

```javascript
import cwmsjs from 'cwmsjs';
let defaultClient = cwmsjs.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new cwmsjs.AuthorizationApi();
apiInstance.getCwmsDataAuthKeys().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ApiKey]**](ApiKey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataAuthKeysWithKeyName

> ApiKey getCwmsDataAuthKeysWithKeyName(keyName)

Get cwmsData auth keys with keyName

View specific key

### Example

```javascript
import cwmsjs from 'cwmsjs';
let defaultClient = cwmsjs.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new cwmsjs.AuthorizationApi();
let keyName = "keyName_example"; // String | Name of the specific key to get more information for. NOTE: Case-sensitive.
apiInstance.getCwmsDataAuthKeysWithKeyName(keyName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyName** | **String**| Name of the specific key to get more information for. NOTE: Case-sensitive. | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCwmsDataAuthKeys

> ApiKey postCwmsDataAuthKeys(opts)

Post cwmsData auth keys

Create a new API Key for user. The randomly generated key is returned to the caller. A provided key will be ignored.

### Example

```javascript
import cwmsjs from 'cwmsjs';
let defaultClient = cwmsjs.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';
// Configure API key authorization: CwmsAAACacAuth
let CwmsAAACacAuth = defaultClient.authentications['CwmsAAACacAuth'];
CwmsAAACacAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CwmsAAACacAuth.apiKeyPrefix = 'Token';

let apiInstance = new cwmsjs.AuthorizationApi();
let opts = {
  'apiKey': new cwmsjs.ApiKey() // ApiKey | 
};
apiInstance.postCwmsDataAuthKeys(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

