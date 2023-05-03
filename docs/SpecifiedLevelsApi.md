# CwmsRadar.SpecifiedLevelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataSpecifiedLevels**](SpecifiedLevelsApi.md#getCwmsDataSpecifiedLevels) | **GET** /cwms-data/specified-levels | Get cwmsData specifiedLevels



## getCwmsDataSpecifiedLevels

> SpecifiedLevel getCwmsDataSpecifiedLevels(opts)

Get cwmsData specifiedLevels

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.SpecifiedLevelsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'templateIdMask': "templateIdMask_example" // String | Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
};
apiInstance.getCwmsDataSpecifiedLevels(opts, (error, data, response) => {
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
 **office** | **String**| Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | [optional] 
 **templateIdMask** | **String**| Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned. | [optional] 

### Return type

[**SpecifiedLevel**](SpecifiedLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2

