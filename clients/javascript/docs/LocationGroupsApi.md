# CwmsDataApi.LocationGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#deleteCwmsDataLocationGroupWithGroupId) | **DELETE** /cwms-data/location/group/{group-id} | Delete cwmsData location group with groupId
[**getCwmsDataLocationGroup**](LocationGroupsApi.md#getCwmsDataLocationGroup) | **GET** /cwms-data/location/group | Get cwmsData location group
[**getCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#getCwmsDataLocationGroupWithGroupId) | **GET** /cwms-data/location/group/{group-id} | Get cwmsData location group with groupId
[**patchCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#patchCwmsDataLocationGroupWithGroupId) | **PATCH** /cwms-data/location/group/{group-id} | Patch cwmsData location group with groupId
[**postCwmsDataLocationGroup**](LocationGroupsApi.md#postCwmsDataLocationGroup) | **POST** /cwms-data/location/group | Post cwmsData location group



## deleteCwmsDataLocationGroupWithGroupId

> deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, opts)

Delete cwmsData location group with groupId

Deletes requested location group

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
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

let apiInstance = new CwmsDataApi.LocationGroupsApi();
let groupId = "groupId_example"; // String | The location group to be deleted
let categoryId = "categoryId_example"; // String | Specifies the location category of the location group to be deleted
let office = "office_example"; // String | Specifies the owning office of the location group to be deleted
let opts = {
  'cascadeDelete': true // Boolean | Specifies whether to specifies whether to unassign any location assignments. Default: false
};
apiInstance.deleteCwmsDataLocationGroupWithGroupId(groupId, categoryId, office, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The location group to be deleted | 
 **categoryId** | **String**| Specifies the location category of the location group to be deleted | 
 **office** | **String**| Specifies the owning office of the location group to be deleted | 
 **cascadeDelete** | **Boolean**| Specifies whether to specifies whether to unassign any location assignments. Default: false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLocationGroup

> [LocationGroup] getCwmsDataLocationGroup(opts)

Get cwmsData location group

Returns CWMS Location Groups Data

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.LocationGroupsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
  'includeAssigned': true, // Boolean | Include the assigned locations in the returned location groups. (default: false)
  'locationCategoryLike': "locationCategoryLike_example" // String | Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id
};
apiInstance.getCwmsDataLocationGroup(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned. | [optional] 
 **includeAssigned** | **Boolean**| Include the assigned locations in the returned location groups. (default: false) | [optional] 
 **locationCategoryLike** | **String**| Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id | [optional] 

### Return type

[**[LocationGroup]**](LocationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv


## getCwmsDataLocationGroupWithGroupId

> LocationGroup getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId)

Get cwmsData location group with groupId

Retrieves requested Location Group

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';

let apiInstance = new CwmsDataApi.LocationGroupsApi();
let groupId = "groupId_example"; // String | Specifies the location_group whose data is to be included in the response
let office = "office_example"; // String | Specifies the owning office of the location group whose data is to be included in the response.
let categoryId = "categoryId_example"; // String | Specifies the category containing the location group whose data is to be included in the response.
apiInstance.getCwmsDataLocationGroupWithGroupId(groupId, office, categoryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Specifies the location_group whose data is to be included in the response | 
 **office** | **String**| Specifies the owning office of the location group whose data is to be included in the response. | 
 **categoryId** | **String**| Specifies the category containing the location group whose data is to be included in the response. | 

### Return type

[**LocationGroup**](LocationGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, application/geo+json


## patchCwmsDataLocationGroupWithGroupId

> patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, opts)

Patch cwmsData location group with groupId

Update existing LocationGroup

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
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

let apiInstance = new CwmsDataApi.LocationGroupsApi();
let groupId = "groupId_example"; // String | 
let office = "office_example"; // String | Specifies the owning office of the location group to be updated
let locationGroup = new CwmsDataApi.LocationGroup(); // LocationGroup | 
let opts = {
  'replaceAssignedLocs': true // Boolean | Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false
};
apiInstance.patchCwmsDataLocationGroupWithGroupId(groupId, office, locationGroup, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 
 **office** | **String**| Specifies the owning office of the location group to be updated | 
 **locationGroup** | [**LocationGroup**](LocationGroup.md)|  | 
 **replaceAssignedLocs** | **Boolean**| Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postCwmsDataLocationGroup

> postCwmsDataLocationGroup(locationGroup)

Post cwmsData location group

Create new LocationGroup

### Example

```javascript
import CwmsDataApi from 'cwms_data_api';
let defaultClient = CwmsDataApi.ApiClient.instance;
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

let apiInstance = new CwmsDataApi.LocationGroupsApi();
let locationGroup = new CwmsDataApi.LocationGroup(); // LocationGroup | 
apiInstance.postCwmsDataLocationGroup(locationGroup, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationGroup** | [**LocationGroup**](LocationGroup.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

