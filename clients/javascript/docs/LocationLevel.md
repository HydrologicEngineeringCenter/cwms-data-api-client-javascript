# Cwmsjs.LocationLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**officeId** | **String** | Owning office of object. | 
**locationLevelId** | **String** | Name of the location level | 
**seasonalTimeSeriesId** | **String** | Timeseries ID (e.g. from the times series catalog) to use as the location level. Mutually exclusive with seasonalValues and siParameterUnitsConstantValue | [optional] 
**seasonalValues** | [**[SeasonalValueBean]**](SeasonalValueBean.md) | List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue | [optional] 
**specifiedLevelId** | **String** | Generic name of this location level. Common names are &#39;Top of Dam&#39;, &#39;Streambed&#39;, &#39;Bottom of Dam&#39;. | [optional] 
**parameterTypeId** | **String** | To indicate if single or aggregate value | [optional] 
**parameterId** | **String** | Data Type such as Stage, Elevation, or others. | [optional] 
**constantValue** | **Number** | Single value for this location level. Mutually exclusive with seasonableTimeSeriesId and seasonValues. | [optional] 
**levelUnitsId** | **String** | Units the provided levels are in | [optional] 
**levelDate** | **Date** | The date/time at which this location level configuration takes effect. | [optional] 
**levelComment** | **String** |  | [optional] 
**intervalOrigin** | **Date** | The start point of provided seasonal values | [optional] 
**intervalMonths** | **Number** |  | [optional] 
**intervalMinutes** | **Number** |  | [optional] 
**interpolateString** | **String** | Indicating whether or not to interpolate between seasonal values. | [optional] 
**durationId** | **String** | 0 if parameterTypeId is Inst. Otherwise duration indicating the time window of the aggregate value. | [optional] 
**attributeValue** | **Number** |  | [optional] 
**attributeUnitsId** | **String** |  | [optional] 
**attributeParameterTypeId** | **String** |  | [optional] 
**attributeParameterId** | **String** |  | [optional] 
**attributeDurationId** | **String** |  | [optional] 
**attributeComment** | **String** |  | [optional] 



## Enum: ParameterTypeIdEnum


* `Inst` (value: `"Inst"`)

* `Ave` (value: `"Ave"`)

* `Min` (value: `"Min"`)

* `Max` (value: `"Max"`)

* `Total` (value: `"Total"`)





## Enum: InterpolateStringEnum


* `T` (value: `"T"`)

* `F` (value: `"F"`)




