# CwmsRadar.LocationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCwmsDataLocationsWithLocationId**](LocationsApi.md#deleteCwmsDataLocationsWithLocationId) | **DELETE** /cwms-data/locations/{location-id} | Delete cwmsData locations with locationId
[**getCwmsDataLocations**](LocationsApi.md#getCwmsDataLocations) | **GET** /cwms-data/locations | Get cwmsData locations
[**getCwmsDataLocationsWithLocationId**](LocationsApi.md#getCwmsDataLocationsWithLocationId) | **GET** /cwms-data/locations/{location-id} | Get cwmsData locations with locationId
[**patchCwmsDataLocationsWithLocationId**](LocationsApi.md#patchCwmsDataLocationsWithLocationId) | **PATCH** /cwms-data/locations/{location-id} | Patch cwmsData locations with locationId
[**postCwmsDataLocations**](LocationsApi.md#postCwmsDataLocations) | **POST** /cwms-data/locations | Post cwmsData locations



## deleteCwmsDataLocationsWithLocationId

> deleteCwmsDataLocationsWithLocationId(locationId, opts)

Delete cwmsData locations with locationId

Delete CWMS Location

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationsApi();
let locationId = "locationId_example"; // String | 
let opts = {
  'office': "office_example" // String | Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices.
};
apiInstance.deleteCwmsDataLocationsWithLocationId(locationId, opts, (error, data, response) => {
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
 **locationId** | **String**|  | 
 **office** | **String**| Specifies the owning office of the location whose data is to be deleted. If this field is not specified, matching location information will be deleted from all offices. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCwmsDataLocations

> Object getCwmsDataLocations(opts)

Get cwmsData locations

Returns CWMS Location Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationsApi();
let opts = {
  'names': "names_example", // String | Specifies the name(s) of the location(s) whose data is to be included in the response
  'office': "office_example", // String | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
  'unit': "unit_example", // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
  'datum': "datum_example", // String | Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum.
  'format': "format_example" // String | Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson
};
apiInstance.getCwmsDataLocations(opts, (error, data, response) => {
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
 **names** | **String**| Specifies the name(s) of the location(s) whose data is to be included in the response | [optional] 
 **office** | **String**| Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | [optional] 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location level values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location level values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] 
 **datum** | **String**| Specifies the elevation datum of the response. This field affects only elevation location levels. Valid values for this field are:  1. NAVD88.  The elevation values will in the specified or default units above the NAVD-88 datum.  2. NGVD29.  The elevation values will be in the specified or default units above the NGVD-29 datum. | [optional] 
 **format** | **String**| Specifies the encoding format of the response. Valid values for the format field for this URI are:  1.    tab  2.    csv  3.    xml  4.  wml2 (only if name field is specified)  5.    json (default) 6.    geojson | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/tab-separated-values, text/csv, application/xml, application/vnd.opengis.waterml+xml, application/geo+json


## getCwmsDataLocationsWithLocationId

> Location getCwmsDataLocationsWithLocationId(locationId, office, opts)

Get cwmsData locations with locationId

Returns CWMS Location Data

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationsApi();
let locationId = "locationId_example"; // String | 
let office = "office_example"; // String | Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned.
let opts = {
  'unit': "unit_example" // String | Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters.
};
apiInstance.getCwmsDataLocationsWithLocationId(locationId, office, opts, (error, data, response) => {
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
 **locationId** | **String**|  | 
 **office** | **String**| Specifies the owning office of the location level(s) whose data is to be included in the response. If this field is not specified, matching location level information from all offices shall be returned. | 
 **unit** | **String**| Specifies the unit or unit system of the response. Valid values for the unit field are:   1. EN.   Specifies English unit system.  Location values will be in the default English units for their parameters.  2. SI.   Specifies the SI unit system.  Location values will be in the default SI units for their parameters.  3. Other. Any unit returned in the response to the units URI request that is appropriate for the requested parameters. | [optional] 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/json;version=2, application/xml;version=2


## patchCwmsDataLocationsWithLocationId

> patchCwmsDataLocationsWithLocationId(locationId, office, location)

Patch cwmsData locations with locationId

Update CWMS Location

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationsApi();
let locationId = "locationId_example"; // String | 
let office = "office_example"; // String | Specifies the office in which Location will be updated
let location = new CwmsRadar.Location(); // Location | 
apiInstance.patchCwmsDataLocationsWithLocationId(locationId, office, location, (error, data, response) => {
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
 **locationId** | **String**|  | 
 **office** | **String**| Specifies the office in which Location will be updated | 
 **location** | [**Location**](Location.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## postCwmsDataLocations

> postCwmsDataLocations(office, location)

Post cwmsData locations

Create new CWMS Location

### Example

```javascript
import CwmsRadar from 'cwms_radar';

let apiInstance = new CwmsRadar.LocationsApi();
let office = "office_example"; // String | Specifies the office in which Location will be created
let location = new CwmsRadar.Location(); // Location | 
apiInstance.postCwmsDataLocations(office, location, (error, data, response) => {
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
 **office** | **String**| Specifies the office in which Location will be created | 
 **location** | [**Location**](Location.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

