# cwmsjs.BasinsApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataBasins**](BasinsApi.md#getCwmsDataBasins) | **GET** /cwms-data/basins | Get cwmsData basins
[**getCwmsDataBasinsWithBasinId**](BasinsApi.md#getCwmsDataBasinsWithBasinId) | **GET** /cwms-data/basins/{basin-id} | Get cwmsData basins with basinId



## getCwmsDataBasins

> Basin getCwmsDataBasins(opts)

Get cwmsData basins

Returns CWMS Basin Data

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.BasinsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
  'unit': "unit_example" // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
};
apiInstance.getCwmsDataBasins(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | **String**| Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | [optional] 

### Return type

[**Basin**](Basin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.named+pg+json


## getCwmsDataBasinsWithBasinId

> Basin getCwmsDataBasinsWithBasinId(basinId, opts)

Get cwmsData basins with basinId

Returns CWMS Basin Data

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.BasinsApi();
let basinId = "basinId_example"; // String | 
let opts = {
  'office': "office_example", // String | Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned.
  'unit': "unit_example" // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters.
};
apiInstance.getCwmsDataBasinsWithBasinId(basinId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basinId** | **String**|  | 
 **office** | **String**| Specifies the owning office of the basin whose data is to be included in the response. If this field is not specified, matching basin information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system. Basin values will be in the default English units for their parameters. (This is default if no value is entered)  2. SI.   Specifies the SI unit system. Basin values will be in the default SI units for their parameters. | [optional] 

### Return type

[**Basin**](Basin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.named+pg+json
