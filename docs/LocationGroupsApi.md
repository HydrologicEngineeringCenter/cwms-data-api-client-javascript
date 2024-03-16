# cwmsjs.LocationGroupsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#deleteCwmsDataLocationGroupWithGroupId) | **DELETE** /cwms-data/location/group/{group-id} | Delete cwmsData location group with groupId
[**getCwmsDataLocationGroup**](LocationGroupsApi.md#getCwmsDataLocationGroup) | **GET** /cwms-data/location/group | Get cwmsData location group
[**getCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#getCwmsDataLocationGroupWithGroupId) | **GET** /cwms-data/location/group/{group-id} | Get cwmsData location group with groupId
[**patchCwmsDataLocationGroupWithGroupId**](LocationGroupsApi.md#patchCwmsDataLocationGroupWithGroupId) | **PATCH** /cwms-data/location/group/{group-id} | Patch cwmsData location group with groupId
[**postCwmsDataLocationGroup**](LocationGroupsApi.md#postCwmsDataLocationGroup) | **POST** /cwms-data/location/group | Post cwmsData location group


# **deleteCwmsDataLocationGroupWithGroupId**
> deleteCwmsDataLocationGroupWithGroupId()

Deletes requested location group

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationGroupsApi(configuration);

let body:cwmsjs.LocationGroupsApiDeleteCwmsDataLocationGroupWithGroupIdRequest = {
  // string | The location group to be deleted
  groupId: "group-id_example",
  // string | Specifies the location category of the location group to be deleted
  categoryId: "category-id_example",
  // string | Specifies the owning office of the location group to be deleted
  office: "office_example",
  // boolean | Specifies whether to specifies whether to unassign any location assignments. Default: false (optional)
  cascadeDelete: true,
};

apiInstance.deleteCwmsDataLocationGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | The location group to be deleted | defaults to undefined
 **categoryId** | [**string**] | Specifies the location category of the location group to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location group to be deleted | defaults to undefined
 **cascadeDelete** | [**boolean**] | Specifies whether to specifies whether to unassign any location assignments. Default: false | (optional) defaults to undefined


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLocationGroup**
> Array<LocationGroup> getCwmsDataLocationGroup()

Returns CWMS Location Groups Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationGroupsApi(configuration);

let body:cwmsjs.LocationGroupsApiGetCwmsDataLocationGroupRequest = {
  // string | Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned. (optional)
  office: "office_example",
  // boolean | Include the assigned locations in the returned location groups. (default: false) (optional)
  includeAssigned: true,
  // string | Posix <a href=\"regexp.html\">regular expression</a> matching against the location category id (optional)
  locationCategoryLike: "location-category-like_example",
};

apiInstance.getCwmsDataLocationGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned. | (optional) defaults to undefined
 **includeAssigned** | [**boolean**] | Include the assigned locations in the returned location groups. (default: false) | (optional) defaults to undefined
 **locationCategoryLike** | [**string**] | Posix &lt;a href&#x3D;\&quot;regexp.html\&quot;&gt;regular expression&lt;/a&gt; matching against the location category id | (optional) defaults to undefined


### Return type

**Array<LocationGroup>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLocationGroupWithGroupId**
> LocationGroup getCwmsDataLocationGroupWithGroupId()

Retrieves requested Location Group

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationGroupsApi(configuration);

let body:cwmsjs.LocationGroupsApiGetCwmsDataLocationGroupWithGroupIdRequest = {
  // string | Specifies the location_group whose data is to be included in the response
  groupId: "group-id_example",
  // string | Specifies the owning office of the location group whose data is to be included in the response.
  office: "office_example",
  // string | Specifies the category containing the location group whose data is to be included in the response.
  categoryId: "category-id_example",
};

apiInstance.getCwmsDataLocationGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Specifies the location_group whose data is to be included in the response | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location group whose data is to be included in the response. | defaults to undefined
 **categoryId** | [**string**] | Specifies the category containing the location group whose data is to be included in the response. | defaults to undefined


### Return type

**LocationGroup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv, application/geo+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataLocationGroupWithGroupId**
> patchCwmsDataLocationGroupWithGroupId(locationGroup)

Update existing LocationGroup

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationGroupsApi(configuration);

let body:cwmsjs.LocationGroupsApiPatchCwmsDataLocationGroupWithGroupIdRequest = {
  // string
  groupId: "group-id_example",
  // string | Specifies the owning office of the location group to be updated
  office: "office_example",
  // LocationGroup
  locationGroup: {
    officeId: "officeId_example",
    id: "id_example",
    locationCategory: {
      officeId: "officeId_example",
      id: "id_example",
      description: "description_example",
    },
    description: "description_example",
    sharedLocAliasId: "sharedLocAliasId_example",
    sharedRefLocationId: "sharedRefLocationId_example",
    locGroupAttribute: 3.14,
    assignedLocations: [
      {
        locationId: "locationId_example",
        officeId: "officeId_example",
        aliasId: "aliasId_example",
        attribute: 3.14,
        refLocationId: "refLocationId_example",
      },
    ],
  },
  // boolean | Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false (optional)
  replaceAssignedLocs: true,
};

apiInstance.patchCwmsDataLocationGroupWithGroupId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationGroup** | **LocationGroup**|  |
 **groupId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location group to be updated | defaults to undefined
 **replaceAssignedLocs** | [**boolean**] | Specifies whether to unassign all existing locations before assigning new locations specified in the content body Default: false | (optional) defaults to undefined


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataLocationGroup**
> postCwmsDataLocationGroup(locationGroup)

Create new LocationGroup

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationGroupsApi(configuration);

let body:cwmsjs.LocationGroupsApiPostCwmsDataLocationGroupRequest = {
  // LocationGroup
  locationGroup: {
    officeId: "officeId_example",
    id: "id_example",
    locationCategory: {
      officeId: "officeId_example",
      id: "id_example",
      description: "description_example",
    },
    description: "description_example",
    sharedLocAliasId: "sharedLocAliasId_example",
    sharedRefLocationId: "sharedRefLocationId_example",
    locGroupAttribute: 3.14,
    assignedLocations: [
      {
        locationId: "locationId_example",
        officeId: "officeId_example",
        aliasId: "aliasId_example",
        attribute: 3.14,
        refLocationId: "refLocationId_example",
      },
    ],
  },
};

apiInstance.postCwmsDataLocationGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationGroup** | **LocationGroup**|  |


### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


