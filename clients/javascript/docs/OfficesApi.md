# Cwmsjs.OfficesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCwmsDataOffices**](OfficesApi.md#getCwmsDataOffices) | **GET** /cwms-data/offices | Get cwmsData offices
[**getCwmsDataOfficesWithOffice**](OfficesApi.md#getCwmsDataOfficesWithOffice) | **GET** /cwms-data/offices/{office} | Get cwmsData offices with office



## getCwmsDataOffices

> OfficeFormatV1 getCwmsDataOffices(opts)

Get cwmsData offices

### Example

```javascript
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.OfficesApi();
let opts = {
  'format': "format_example", // String | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
  'hasData': true // Boolean | A flag ('True'/'False') When set to true this returns offices that have operational data. Default value is <b>False</b>,. <a href=\"https://github.com/USACE/cwms-data-api/issues/321\" target=\"_blank\">Feature #321</a>
};
apiInstance.getCwmsDataOffices(opts, (error, data, response) => {
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
 **format** | **String**| (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | [optional] 
 **hasData** | **Boolean**| A flag (&#39;True&#39;/&#39;False&#39;) When set to true this returns offices that have operational data. Default value is &lt;b&gt;False&lt;/b&gt;,. &lt;a href&#x3D;\&quot;https://github.com/USACE/cwms-data-api/issues/321\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Feature #321&lt;/a&gt; | [optional] 

### Return type

[**OfficeFormatV1**](OfficeFormatV1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: , application/json;version=2, application/json, text/tab-separated-values, text/csv, application/xml


## getCwmsDataOfficesWithOffice

> OfficeFormatV1 getCwmsDataOfficesWithOffice(office, opts)

Get cwmsData offices with office

### Example

```javascript
import Cwmsjs from 'CWMSJS';

let apiInstance = new Cwmsjs.OfficesApi();
let office = "office_example"; // String | The 3 letter office ID you want more information for
let opts = {
  'format': "format_example" // String | (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default)
};
apiInstance.getCwmsDataOfficesWithOffice(office, opts, (error, data, response) => {
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
 **office** | **String**| The 3 letter office ID you want more information for | 
 **format** | **String**| (Deprecated in favor of Accept header) Specifies the encoding format of the response. Valid value for the format field for this URI are:  1. tab  2. csv   3. xml  4. json (default) | [optional] 

### Return type

[**OfficeFormatV1**](OfficeFormatV1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: , application/json;version=2, application/json, text/tab-separated-values, text/csv, application/xml

