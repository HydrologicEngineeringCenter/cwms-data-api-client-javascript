# CwmsRadar.LevelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLevelsWithLevelId**](LevelsApi.md#deleteCwmsDataLevelsWithLevelId) | **DELETE** /cwms-data/levels/{level-id} | Delete cwmsData levels with levelId
[**getCwmsDataLevels**](LevelsApi.md#getCwmsDataLevels) | **GET** /cwms-data/levels | Get cwmsData levels
[**getCwmsDataLevelsWithLevelId**](LevelsApi.md#getCwmsDataLevelsWithLevelId) | **GET** /cwms-data/levels/{level-id} | Get cwmsData levels with levelId
[**patchCwmsDataLevelsWithLevelId**](LevelsApi.md#patchCwmsDataLevelsWithLevelId) | **PATCH** /cwms-data/levels/{level-id} | Patch cwmsData levels with levelId
[**postCwmsDataLevels**](LevelsApi.md#postCwmsDataLevels) | **POST** /cwms-data/levels | Post cwmsData levels



## deleteCwmsDataLevelsWithLevelId

> deleteCwmsDataLevelsWithLevelId(levelId, opts)

Delete cwmsData levels with levelId

Delete CWMS Location Level

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be deleted
let opts = {
  'cascadeDelete': true, // Boolean | 
  'office': "office_example", // String | Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
  'date': "date_example", // String | Deprecated, use effective-date
  'effectiveDate': "effectiveDate_example" // String | Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
};
apiInstance.deleteCwmsDataLevelsWithLevelId(levelId, opts, (error, data, response) => {
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
 **levelId** | **String**| Specifies the location level id of the Location Level to be deleted | 
 **cascadeDelete** | **Boolean**|  | [optional] 
 **office** | **String**| Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices. | [optional] 
 **date** | **String**| Deprecated, use effective-date | [optional] 
 **effectiveDate** | **String**| Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLevels

> Object getCwmsDataLevels(opts)

Get cwmsData levels

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LevelsApi();
let opts = {
  'name': "name_example", // String | Deprecated, use level-id-mask. 
  'levelIdMask': "levelIdMask_example", // String | Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all.
  'office': "office_example", // String | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
  'unit': "unit_example", // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
  'datum': "datum_example", // String | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
  'begin': "begin_example", // String | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time.
  'end': "end_example", // String | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
  'format': "format_example", // String | Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version=2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)  
  'page': "page_example", // String | This identifies where in the request you are. This is an opaque value, and can be obtained from the 'next-page' value in the response.
  'pageSize': 56 // Number | How many entries per page returned. Default 100.
};
apiInstance.getCwmsDataLevels(opts, (error, data, response) => {
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
 **name** | **String**| Deprecated, use level-id-mask.  | [optional] 
 **levelIdMask** | **String**| Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all. | [optional] 
 **office** | **String**| Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] 
 **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] 
 **begin** | **String**| Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. | [optional] 
 **end** | **String**| Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time | [optional] 
 **timezone** | **String**| Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | [optional] 
 **format** | **String**| Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)   | [optional] 
 **page** | **String**| This identifies where in the request you are. This is an opaque value, and can be obtained from the &#39;next-page&#39; value in the response. | [optional] 
 **pageSize** | **Number**| How many entries per page returned. Default 100. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataLevelsWithLevelId

> LocationLevel getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, opts)

Get cwmsData levels with levelId

Retrieves requested Location Level

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the requested location level.
let office = "office_example"; // String | Specifies the office of the Location Level to be returned
let effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of Location Level to be returned
let opts = {
  'date': "date_example" // String | Deprecated, use effective-date
};
apiInstance.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, opts, (error, data, response) => {
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
 **levelId** | **String**| Specifies the requested location level. | 
 **office** | **String**| Specifies the office of the Location Level to be returned | 
 **effectiveDate** | **String**| Specifies the effective date of Location Level to be returned | 
 **date** | **String**| Deprecated, use effective-date | [optional] 

### Return type

[**LocationLevel**](LocationLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## patchCwmsDataLevelsWithLevelId

> patchCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, locationLevel, opts)

Patch cwmsData levels with levelId

Update CWMS Location Level

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be updated
let office = "office_example"; // String | Specifies the office in which Location Level will be updated
let effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of Location Level that will be updated
let locationLevel = new CwmsRadar.LocationLevel(); // LocationLevel | 
let opts = {
  'date': "date_example" // String | Deprecated, use effective-date
};
apiInstance.patchCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, locationLevel, opts, (error, data, response) => {
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
 **levelId** | **String**| Specifies the location level id of the Location Level to be updated | 
 **office** | **String**| Specifies the office in which Location Level will be updated | 
 **effectiveDate** | **String**| Specifies the effective date of Location Level that will be updated | 
 **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | 
 **date** | **String**| Deprecated, use effective-date | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## postCwmsDataLevels

> postCwmsDataLevels(office, locationLevel)

Post cwmsData levels

Create new CWMS Location Level

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LevelsApi();
let office = "office_example"; // String | Specifies the office in which Location Level will be created
let locationLevel = new CwmsRadar.LocationLevel(); // LocationLevel | 
apiInstance.postCwmsDataLevels(office, locationLevel, (error, data, response) => {
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
 **office** | **String**| Specifies the office in which Location Level will be created | 
 **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

