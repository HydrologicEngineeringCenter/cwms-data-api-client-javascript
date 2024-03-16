# cwmsjs.LocationsApi

All URIs are relative to *https://waters.usace.army.mil*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationsWithLocationId**](LocationsApi.md#deleteCwmsDataLocationsWithLocationId) | **DELETE** /cwms-data/locations/{location-id} | Delete cwmsData locations with locationId
[**getCwmsDataLocations**](LocationsApi.md#getCwmsDataLocations) | **GET** /cwms-data/locations | Get cwmsData locations
[**getCwmsDataLocationsWithLocationId**](LocationsApi.md#getCwmsDataLocationsWithLocationId) | **GET** /cwms-data/locations/{location-id} | Get cwmsData locations with locationId
[**patchCwmsDataLocationsWithLocationId**](LocationsApi.md#patchCwmsDataLocationsWithLocationId) | **PATCH** /cwms-data/locations/{location-id} | Patch cwmsData locations with locationId
[**postCwmsDataLocations**](LocationsApi.md#postCwmsDataLocations) | **POST** /cwms-data/locations | Post cwmsData locations


# **deleteCwmsDataLocationsWithLocationId**
> deleteCwmsDataLocationsWithLocationId()

Delete CWMS Location

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationsApi(configuration);

let body:cwmsjs.LocationsApiDeleteCwmsDataLocationsWithLocationIdRequest = {
  // string
  locationId: "location-id_example",
  // string | Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices. (optional)
  office: "office_example",
};

apiInstance.deleteCwmsDataLocationsWithLocationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices. | (optional) defaults to undefined


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
**404** | Based on the combination of inputs provided the location was not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCwmsDataLocations**
> any getCwmsDataLocations()

Returns CWMS Location Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationsApi(configuration);

let body:cwmsjs.LocationsApiGetCwmsDataLocationsRequest = {
  // string | Specifies the name(s) of the location(s) whose data is to be included in the response (optional)
  names: "names_example",
  // string | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. (optional)
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
  // string | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. (optional)
  datum: "datum_example",
  // string | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson (optional)
  format: "format_example",
};

apiInstance.getCwmsDataLocations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | [**string**] | Specifies the name(s) of the location(s) whose data is to be included in the response | (optional) defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | (optional) defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | (optional) defaults to undefined
 **datum** | [**string**] | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | (optional) defaults to undefined
 **format** | [**string**] | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/tab-separated-values, text/csv, application/xml, application/vnd.opengis.waterml+xml, application/geo+json, 


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

# **getCwmsDataLocationsWithLocationId**
> Location getCwmsDataLocationsWithLocationId()

Returns CWMS Location Data

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationsApi(configuration);

let body:cwmsjs.LocationsApiGetCwmsDataLocationsWithLocationIdRequest = {
  // string
  locationId: "location-id_example",
  // string | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
  office: "office_example",
  // string | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. (optional)
  unit: "unit_example",
};

apiInstance.getCwmsDataLocationsWithLocationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **office** | [**string**] | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | defaults to undefined
 **unit** | [**string**] | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | (optional) defaults to undefined


### Return type

**Location**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/json;version=2, application/xml;version=2


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Based on the combination of inputs provided the location was not found. |  -  |
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchCwmsDataLocationsWithLocationId**
> patchCwmsDataLocationsWithLocationId(location)

Update CWMS Location

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationsApi(configuration);

let body:cwmsjs.LocationsApiPatchCwmsDataLocationsWithLocationIdRequest = {
  // string
  locationId: "location-id_example",
  // Location
  location: {
    officeId: "officeId_example",
    name: "name_example",
    latitude: 3.14,
    longitude: 3.14,
    active: true,
    publicName: "publicName_example",
    longName: "longName_example",
    description: "description_example",
    timezoneName: "timezoneName_example",
    locationType: "locationType_example",
    locationKind: "locationKind_example",
    nation: "US",
    stateInitial: "stateInitial_example",
    countyName: "countyName_example",
    nearestCity: "nearestCity_example",
    horizontalDatum: "horizontalDatum_example",
    publishedLongitude: 3.14,
    publishedLatitude: 3.14,
    verticalDatum: "verticalDatum_example",
    elevation: 3.14,
    mapLabel: "mapLabel_example",
    boundingOfficeId: "boundingOfficeId_example",
  },
};

apiInstance.patchCwmsDataLocationsWithLocationId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **Location**|  |
 **locationId** | [**string**] |  | defaults to undefined


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
**404** | Based on the combination of inputs provided the location was not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCwmsDataLocations**
> postCwmsDataLocations(location)

Create new CWMS Location

### Example


```typescript
import { cwmsjs } from 'cwmsjs';
import * as fs from 'fs';

const configuration = cwmsjs.createConfiguration();
const apiInstance = new cwmsjs.LocationsApi(configuration);

let body:cwmsjs.LocationsApiPostCwmsDataLocationsRequest = {
  // Location
  location: {
    officeId: "officeId_example",
    name: "name_example",
    latitude: 3.14,
    longitude: 3.14,
    active: true,
    publicName: "publicName_example",
    longName: "longName_example",
    description: "description_example",
    timezoneName: "timezoneName_example",
    locationType: "locationType_example",
    locationKind: "locationKind_example",
    nation: "US",
    stateInitial: "stateInitial_example",
    countyName: "countyName_example",
    nearestCity: "nearestCity_example",
    horizontalDatum: "horizontalDatum_example",
    publishedLongitude: 3.14,
    publishedLatitude: 3.14,
    verticalDatum: "verticalDatum_example",
    elevation: 3.14,
    mapLabel: "mapLabel_example",
    boundingOfficeId: "boundingOfficeId_example",
  },
};

apiInstance.postCwmsDataLocations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **Location**|  |


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


