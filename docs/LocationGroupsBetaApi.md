# CwmsRadar.LocationGroupsBetaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataLocationGroup**](LocationGroupsBetaApi.md#getCwmsDataLocationGroup) | **GET** /cwms-data/location/group | Get cwmsData location group
[**getCwmsDataLocationGroupWithGroupId**](LocationGroupsBetaApi.md#getCwmsDataLocationGroupWithGroupId) | **GET** /cwms-data/location/group/{group-id} | Get cwmsData location group with groupId



## getCwmsDataLocationGroup

> [LocationGroup] getCwmsDataLocationGroup(opts)

Get cwmsData location group

Returns CWMS Location Groups Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationGroupsBetaApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the location group(s) whose data is to be included in the response. If this field is not specified, matching location groups information from all offices shall be returned.
  'includeAssigned': true, // Boolean | Include the assigned locations in the returned location groups. (default: false)
  'includeAssigned2': true // Boolean | Deprecated. Use include-assigned instead.
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
 **includeAssigned2** | **Boolean**| Deprecated. Use include-assigned instead. | [optional] 

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
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationGroupsBetaApi();
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

