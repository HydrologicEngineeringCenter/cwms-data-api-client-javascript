# cwmsjs.LevelsApi

All URIs are relative to *https://cwms-data.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLevelsWithLevelId**](LevelsApi.md#deleteCwmsDataLevelsWithLevelId) | **DELETE** /cwms-data/levels/{level-id} | Delete cwmsData levels with levelId
[**deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId**](LevelsApi.md#deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId) | **DELETE** /cwms-data/specified-levels/{specified-level-id} | Delete cwmsData specifiedLevels with specifiedLevelId
[**getCwmsDataLevels**](LevelsApi.md#getCwmsDataLevels) | **GET** /cwms-data/levels | Get cwmsData levels
[**getCwmsDataLevelsWithLevelId**](LevelsApi.md#getCwmsDataLevelsWithLevelId) | **GET** /cwms-data/levels/{level-id} | Get cwmsData levels with levelId
[**getCwmsDataSpecifiedLevels**](LevelsApi.md#getCwmsDataSpecifiedLevels) | **GET** /cwms-data/specified-levels | Get cwmsData specifiedLevels
[**patchCwmsDataLevelsWithLevelId**](LevelsApi.md#patchCwmsDataLevelsWithLevelId) | **PATCH** /cwms-data/levels/{level-id} | Patch cwmsData levels with levelId
[**patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId**](LevelsApi.md#patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId) | **PATCH** /cwms-data/specified-levels/{specified-level-id} | Patch cwmsData specifiedLevels with specifiedLevelId
[**postCwmsDataLevels**](LevelsApi.md#postCwmsDataLevels) | **POST** /cwms-data/levels | Post cwmsData levels
[**postCwmsDataSpecifiedLevels**](LevelsApi.md#postCwmsDataSpecifiedLevels) | **POST** /cwms-data/specified-levels | Post cwmsData specifiedLevels



## deleteCwmsDataLevelsWithLevelId

> deleteCwmsDataLevelsWithLevelId(levelId, opts)

Delete cwmsData levels with levelId

Delete CWMS Location Level

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

let apiInstance = new cwmsjs.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be deleted
let opts = {
  'cascadeDelete': true, // Boolean | 
  'office': "office_example", // String | Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices.
  'effectiveDate': "effectiveDate_example", // String | Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level.
  'timezone': "timezone_example" // String | Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used.
};
apiInstance.deleteCwmsDataLevelsWithLevelId(levelId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | **String**| Specifies the location level id of the Location Level to be deleted | 
 **cascadeDelete** | **Boolean**|  | [optional] 
 **office** | **String**| Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices. | [optional] 
 **effectiveDate** | **String**| Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level. | [optional] 
 **timezone** | **String**| Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId

> deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office)

Delete cwmsData specifiedLevels with specifiedLevelId

Deletes requested specified level id

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

let apiInstance = new cwmsjs.LevelsApi();
let specifiedLevelId = "specifiedLevelId_example"; // String | The specified level id to be deleted
let office = "office_example"; // String | Specifies the owning office of the timeseries identifier to be deleted
apiInstance.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, office).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevelId** | **String**| The specified level id to be deleted | 
 **office** | **String**| Specifies the owning office of the timeseries identifier to be deleted | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLevels

> Object getCwmsDataLevels(opts)

Get cwmsData levels

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.LevelsApi();
let opts = {
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
apiInstance.getCwmsDataLevels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
- **Accept**: application/json, , application/json;version=2


## getCwmsDataLevelsWithLevelId

> LocationLevel getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, opts)

Get cwmsData levels with levelId

Retrieves requested Location Level

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the requested location level.
let office = "office_example"; // String | Specifies the office of the Location Level to be returned
let effectiveDate = "effectiveDate_example"; // String | Specifies the effective date of Location Level to be returned
let opts = {
  'timezone': "timezone_example", // String | Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used.
  'unit': "unit_example" // String | Desired unit for the values retrieved.
};
apiInstance.getCwmsDataLevelsWithLevelId(levelId, office, effectiveDate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | **String**| Specifies the requested location level. | 
 **office** | **String**| Specifies the office of the Location Level to be returned | 
 **effectiveDate** | **String**| Specifies the effective date of Location Level to be returned | 
 **timezone** | **String**| Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | [optional] 
 **unit** | **String**| Desired unit for the values retrieved. | [optional] 

### Return type

[**LocationLevel**](LocationLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2


## getCwmsDataSpecifiedLevels

> SpecifiedLevel getCwmsDataSpecifiedLevels(opts)

Get cwmsData specifiedLevels

### Example

```javascript
import cwmsjs from 'cwmsjs';

let apiInstance = new cwmsjs.LevelsApi();
let opts = {
  'office': "office_example", // String | Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned.
  'templateIdMask': "templateIdMask_example" // String | Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned.
};
apiInstance.getCwmsDataSpecifiedLevels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## patchCwmsDataLevelsWithLevelId

> patchCwmsDataLevelsWithLevelId(levelId, locationLevel, opts)

Patch cwmsData levels with levelId

Update CWMS Location Level

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

let apiInstance = new cwmsjs.LevelsApi();
let levelId = "levelId_example"; // String | Specifies the location level id of the Location Level to be updated
let locationLevel = new cwmsjs.LocationLevel(); // LocationLevel | 
let opts = {
  'effectiveDate': "effectiveDate_example" // String | Specifies the effective date of Location Level that will be updated
};
apiInstance.patchCwmsDataLevelsWithLevelId(levelId, locationLevel, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | **String**| Specifies the location level id of the Location Level to be updated | 
 **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | 
 **effectiveDate** | **String**| Specifies the effective date of Location Level that will be updated | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId

> patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office)

Patch cwmsData specifiedLevels with specifiedLevelId

Renames the requested specified level id

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

let apiInstance = new cwmsjs.LevelsApi();
let specifiedLevelId = "specifiedLevelId_example"; // String | 
let specifiedLevelId2 = "specifiedLevelId_example"; // String | The new specified level id.
let office = "office_example"; // String | Specifies the owning office of the specified level to be renamed
apiInstance.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(specifiedLevelId, specifiedLevelId2, office).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevelId** | **String**|  | 
 **specifiedLevelId2** | **String**| The new specified level id. | 
 **office** | **String**| Specifies the owning office of the specified level to be renamed | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCwmsDataLevels

> postCwmsDataLevels(locationLevel)

Post cwmsData levels

Create new CWMS Location Level

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

let apiInstance = new cwmsjs.LevelsApi();
let locationLevel = new cwmsjs.LocationLevel(); // LocationLevel | 
apiInstance.postCwmsDataLevels(locationLevel).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationLevel** | [**LocationLevel**](LocationLevel.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## postCwmsDataSpecifiedLevels

> postCwmsDataSpecifiedLevels(specifiedLevel, opts)

Post cwmsData specifiedLevels

Create new SpecifiedLevel

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

let apiInstance = new cwmsjs.LevelsApi();
let specifiedLevel = new cwmsjs.SpecifiedLevel(); // SpecifiedLevel | 
let opts = {
  'failIfExists': true // Boolean | Create will fail if provided ID already exists. Default: true
};
apiInstance.postCwmsDataSpecifiedLevels(specifiedLevel, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevel** | [**SpecifiedLevel**](SpecifiedLevel.md)|  | 
 **failIfExists** | **Boolean**| Create will fail if provided ID already exists. Default: true | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [CwmsAAACacAuth](../README.md#CwmsAAACacAuth)

### HTTP request headers

- **Content-Type**: application/json;version=2
- **Accept**: application/json

