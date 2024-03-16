# cwmsjs.LevelsApi

All URIs are relative to *https://waters.usace.army.mil*

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


# **deleteCwmsDataLevelsWithLevelId**
> deleteCwmsDataLevelsWithLevelId()

Delete CWMS Location Level

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiDeleteCwmsDataLevelsWithLevelIdRequest = {
  // string | Specifies the location level id of the Location Level to be deleted
  levelId: "level-id_example",
  // boolean (optional)
  cascadeDelete: true,
  // string | Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices. (optional)
  office: "office_example",
  // string | Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level. (optional)
  effectiveDate: "effective-date_example",
  // string | Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
};

apiInstance.deleteCwmsDataLevelsWithLevelId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | [**string**] | Specifies the location level id of the Location Level to be deleted | defaults to undefined
 **cascadeDelete** | [**boolean**] |  | (optional) defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location level whose data is to be deleted. If this field is not specified, matching location level information will be deleted from all offices. | (optional) defaults to undefined
 **effectiveDate** | [**string**] | Specifies the effective date of the level to be deleted. If not provided will delete all data and reference to the location level. | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the value of the effective date field (unless otherwise specified).If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined


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

# **deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId**
> deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId()

Deletes requested specified level id

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiDeleteCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest = {
  // string | The specified level id to be deleted
  specifiedLevelId: "specified-level-id_example",
  // string | Specifies the owning office of the timeseries identifier to be deleted
  office: "office_example",
};

apiInstance.deleteCwmsDataSpecifiedLevelsWithSpecifiedLevelId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevelId** | [**string**] | The specified level id to be deleted | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the timeseries identifier to be deleted | defaults to undefined


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

# **getCwmsDataLevels**
> any getCwmsDataLevels()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiGetCwmsDataLevelsRequest = {
  // string | Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all. (optional)
  levelIdMask: "level-id-mask_example",
  // string | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
  // string | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. (optional)
  datum: "datum_example",
  // string | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. (optional)
  begin: "begin_example",
  // string | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time (optional)
  end: "end_example",
  // string | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
  // string | Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version=2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)   (optional)
  format: "format_example",
  // string | This identifies where in the request you are. This is an opaque value, and can be obtained from the \'next-page\' value in the response. (optional)
  page: "page_example",
  // number | How many entries per page returned. Default 100. (optional)
  pageSize: 1,
};

apiInstance.getCwmsDataLevels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelIdMask** | [**string**] | Specifies the name(s) of the location level(s) whose data is to be included in the response. Uses * for all. | (optional) defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | (optional) defaults to undefined
 **datum** | [**string**] | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | (optional) defaults to undefined
 **begin** | [**string**] | Specifies the start of the time window for data to be included in the response. If this field is not specified, any required time window begins 24 hours prior to the specified or default end time. | (optional) defaults to undefined
 **end** | [**string**] | Specifies the end of the time window for data to be included in the response. If this field is not specified, any required time window ends at the current time | (optional) defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the begin and end fields (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined
 **format** | [**string**] | Specifies the encoding format of the response. Requests specifying an Accept header:application/json;version&#x3D;2 must not include this field. Valid format field values for this URI are:  1.    tab  2.    csv  3.    xml  4.    wml2 (only if name field is specified)  5.    json (default)   | (optional) defaults to undefined
 **page** | [**string**] | This identifies where in the request you are. This is an opaque value, and can be obtained from the \&#39;next-page\&#39; value in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | How many entries per page returned. Default 100. | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, , application/json;version=2


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

# **getCwmsDataLevelsWithLevelId**
> LocationLevel getCwmsDataLevelsWithLevelId()

Retrieves requested Location Level

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiGetCwmsDataLevelsWithLevelIdRequest = {
  // string | Specifies the requested location level.
  levelId: "level-id_example",
  // string | Specifies the office of the Location Level to be returned
  office: "office_example",
  // string | Specifies the effective date of Location Level to be returned
  effectiveDate: "effective-date_example",
  // string | Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. (optional)
  timezone: "timezone_example",
  // string | Desired unit for the values retrieved. (optional)
  unit: "unit_example",
};

apiInstance.getCwmsDataLevelsWithLevelId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levelId** | [**string**] | Specifies the requested location level. | defaults to undefined
 **office** | [**string**] | Specifies the office of the Location Level to be returned | defaults to undefined
 **effectiveDate** | [**string**] | Specifies the effective date of Location Level to be returned | defaults to undefined
 **timezone** | [**string**] | Specifies the time zone of the values of the effective date field (unless otherwise specified), as well as the time zone of any times in the response. If this field is not specified, the default time zone of UTC shall be used. | (optional) defaults to undefined
 **unit** | [**string**] | Desired unit for the values retrieved. | (optional) defaults to undefined


### Return type

**LocationLevel**

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataSpecifiedLevels**
> SpecifiedLevel getCwmsDataSpecifiedLevels()


### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiGetCwmsDataSpecifiedLevelsRequest = {
  // string | Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned. (optional)
  templateIdMask: "template-id-mask_example",
};

apiInstance.getCwmsDataSpecifiedLevels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **office** | [**string**] | Specifies the owning office of the Specified Levels whose data is to be included in the response. If this field is not specified, matching rating information from all offices shall be returned. | (optional) defaults to undefined
 **templateIdMask** | [**string**] | Mask that specifies the IDs to be included in the response. If this field is not specified, all specified levels shall be returned. | (optional) defaults to undefined


### Return type

**SpecifiedLevel**

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataLevelsWithLevelId**
> patchCwmsDataLevelsWithLevelId(locationLevel)

Update CWMS Location Level

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiPatchCwmsDataLevelsWithLevelIdRequest = {
  // string | Specifies the location level id of the Location Level to be updated
  levelId: "level-id_example",
  // LocationLevel
  locationLevel: {
    officeId: "officeId_example",
    locationLevelId: "locationLevelId_example",
    seasonalTimeSeriesId: "seasonalTimeSeriesId_example",
    seasonalValues: [
      {
        value: 3.14,
        offsetMonths: 1,
        offsetMinutes: 1,
      },
    ],
    specifiedLevelId: "specifiedLevelId_example",
    parameterTypeId: "Inst",
    parameterId: "parameterId_example",
    constantValue: 3.14,
    levelUnitsId: "levelUnitsId_example",
    levelDate: new Date('1970-01-01T00:00:00.00Z'),
    levelComment: "levelComment_example",
    intervalOrigin: new Date('1970-01-01T00:00:00.00Z'),
    intervalMonths: 1,
    intervalMinutes: 1,
    interpolateString: "T",
    durationId: "durationId_example",
    attributeValue: 3.14,
    attributeUnitsId: "attributeUnitsId_example",
    attributeParameterTypeId: "attributeParameterTypeId_example",
    attributeParameterId: "attributeParameterId_example",
    attributeDurationId: "attributeDurationId_example",
    attributeComment: "attributeComment_example",
  },
  // string | Specifies the effective date of Location Level that will be updated (optional)
  effectiveDate: "effective-date_example",
};

apiInstance.patchCwmsDataLevelsWithLevelId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationLevel** | **LocationLevel**|  |
 **levelId** | [**string**] | Specifies the location level id of the Location Level to be updated | defaults to undefined
 **effectiveDate** | [**string**] | Specifies the effective date of Location Level that will be updated | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
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

# **patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId**
> patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId()

Renames the requested specified level id

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiPatchCwmsDataSpecifiedLevelsWithSpecifiedLevelIdRequest = {
  // string
  specifiedLevelId: "specified-level-id_example",
  // string | The new specified level id.
  specifiedLevelId2: "specified-level-id_example",
  // string | Specifies the owning office of the specified level to be renamed
  office: "office_example",
};

apiInstance.patchCwmsDataSpecifiedLevelsWithSpecifiedLevelId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevelId** | [**string**] |  | defaults to undefined
 **specifiedLevelId2** | [**string**] | The new specified level id. | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the specified level to be renamed | defaults to undefined


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

# **postCwmsDataLevels**
> postCwmsDataLevels(locationLevel)

Create new CWMS Location Level

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiPostCwmsDataLevelsRequest = {
  // LocationLevel
  locationLevel: {
    officeId: "officeId_example",
    locationLevelId: "locationLevelId_example",
    seasonalTimeSeriesId: "seasonalTimeSeriesId_example",
    seasonalValues: [
      {
        value: 3.14,
        offsetMonths: 1,
        offsetMinutes: 1,
      },
    ],
    specifiedLevelId: "specifiedLevelId_example",
    parameterTypeId: "Inst",
    parameterId: "parameterId_example",
    constantValue: 3.14,
    levelUnitsId: "levelUnitsId_example",
    levelDate: new Date('1970-01-01T00:00:00.00Z'),
    levelComment: "levelComment_example",
    intervalOrigin: new Date('1970-01-01T00:00:00.00Z'),
    intervalMonths: 1,
    intervalMinutes: 1,
    interpolateString: "T",
    durationId: "durationId_example",
    attributeValue: 3.14,
    attributeUnitsId: "attributeUnitsId_example",
    attributeParameterTypeId: "attributeParameterTypeId_example",
    attributeParameterId: "attributeParameterId_example",
    attributeDurationId: "attributeDurationId_example",
    attributeComment: "attributeComment_example",
  },
};

apiInstance.postCwmsDataLevels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationLevel** | **LocationLevel**|  |


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
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

# **postCwmsDataSpecifiedLevels**
> postCwmsDataSpecifiedLevels(specifiedLevel)

Create new SpecifiedLevel

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LevelsApi(configuration);

let body:cwmsjs.LevelsApiPostCwmsDataSpecifiedLevelsRequest = {
  // SpecifiedLevel
  specifiedLevel: {
    officeId: "officeId_example",
    id: "id_example",
    description: "description_example",
  },
  // boolean | Create will fail if provided ID already exists. Default: true (optional)
  failIfExists: true,
};

apiInstance.postCwmsDataSpecifiedLevels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specifiedLevel** | **SpecifiedLevel**|  |
 **failIfExists** | [**boolean**] | Create will fail if provided ID already exists. Default: true | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[ApiKey](README.md#ApiKey), [CwmsAAACacAuth](README.md#CwmsAAACacAuth)

### HTTP request headers

 - **Content-Type**: application/json;version=2
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


