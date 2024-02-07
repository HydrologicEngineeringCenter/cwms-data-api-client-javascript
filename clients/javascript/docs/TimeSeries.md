# Cwmsjs.TimeSeries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | **Date** | The requested start time of the data, in ISO-8601 format with offset and timezone (&#39;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ&#39;[&#39;VV&#39;]&#39;&#39;) | [optional] [readonly] 
**end** | **Date** | The requested end time of the data, in ISO-8601 format with offset and timezone (&#39;yyyy-MM-dd&#39;T&#39;HH:mm:ssZ&#39;[&#39;VV&#39;]&#39;&#39;) | [optional] [readonly] 
**interval** | [**TimeSeriesInterval**](TimeSeriesInterval.md) |  | [optional] 
**intervalOffset** | **Number** | Offset from top of interval | [optional] [readonly] 
**name** | **String** | Time-series name | [optional] 
**nextPage** | **String** | The cursor to the next page of data; null if there is no more data | [optional] [readonly] 
**officeId** | **String** | Office ID that owns the time-series | [optional] 
**page** | **String** | The cursor to the current page of data | [optional] [readonly] 
**pageSize** | **Number** | The number of records fetched per-page; this may be larger than the number of records actually retrieved | [optional] [readonly] 
**timeZone** | **String** | Only on 21.1.1 Database. The timezone the Interval Offset is from. | [optional] [readonly] 
**total** | **Number** | The total number of records retrieved; null or not present if not supported or unknown | [optional] [readonly] 
**units** | **String** | The units of the time series data | 
**valueColumns** | [**[TimeSeriesColumn]**](TimeSeriesColumn.md) |  | [optional] [readonly] 
**values** | **[[TimeSeriesValuesInnerInner]]** |  | [optional] 
**verticalDatumInfo** | [**VerticalDatumInfo**](VerticalDatumInfo.md) |  | [optional] 


