

# LocationLevel


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**locationLevelId** | **String** | Name of the location level |  |
|**officeId** | **String** | Owning office of the level |  |
|**seasonalTimeSeriesId** | **String** | Timeseries ID (e.g. from the times series catalog) to use as the location level. Mutually exclusive with seasonalValues and siParameterUnitsConstantValue |  [optional] |
|**seasonalValues** | [**List&lt;SeasonalValueBean&gt;**](SeasonalValueBean.md) | List of Repeating seasonal values. The values repeater after the specified interval. A yearly interval seasonable could have 12 different values, one for each month for example. Mutually exclusive with seasonalTimeSeriesId and siParameterUnitsConstantValue |  [optional] |
|**specifiedLevelId** | **String** | Generic name of this location level. Common names are &#39;Top of Dam&#39;, &#39;Streambed&#39;, &#39;Bottom of Dam&#39;. |  [optional] |
|**parameterTypeId** | [**ParameterTypeIdEnum**](#ParameterTypeIdEnum) | To indicate if single or aggregate value |  [optional] |
|**parameterId** | **String** | Data Type such as Stage, Elevation, or others. |  [optional] |
|**constantValue** | **Double** | Single value for this location level. Mutually exclusive with seasonableTimeSeriesId and seasonValues. |  [optional] |
|**levelUnitsId** | **String** | Units thhe provided levels are in |  [optional] |
|**levelDate** | **OffsetDateTime** | The date/time at which this location level configuration takes effect. |  [optional] |
|**levelComment** | **String** |  |  [optional] |
|**intervalOrigin** | **OffsetDateTime** | The start point of provided seasonal values |  [optional] |
|**intervalMonths** | **Integer** |  |  [optional] |
|**intervalMinutes** | **Integer** |  |  [optional] |
|**interpolateString** | [**InterpolateStringEnum**](#InterpolateStringEnum) | Indicating whether or not to interpolate between seasonal values. |  [optional] |
|**durationId** | **String** | 0 if parameterTypeId is Inst. Otherwise duration indicating the time window of the aggregate value. |  [optional] |
|**attributeValue** | **BigDecimal** |  |  [optional] |
|**attributeUnitsId** | **String** |  |  [optional] |
|**attributeParameterTypeId** | **String** |  |  [optional] |
|**attributeParameterId** | **String** |  |  [optional] |
|**attributeDurationId** | **String** |  |  [optional] |
|**attributeComment** | **String** |  |  [optional] |



## Enum: ParameterTypeIdEnum

| Name | Value |
|---- | -----|
| INST | &quot;Inst&quot; |
| AVE | &quot;Ave&quot; |
| MIN | &quot;Min&quot; |
| MAX | &quot;Max&quot; |
| TOTAL | &quot;Total&quot; |



## Enum: InterpolateStringEnum

| Name | Value |
|---- | -----|
| T | &quot;T&quot; |
| F | &quot;F&quot; |



