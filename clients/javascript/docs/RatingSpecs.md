# CwmsDataApi.RatingSpecs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **String** | The cursor to the current page of data | [optional] [readonly] 
**total** | **Number** | The total number of records retrieved; null or not present if not supported or unknown | [optional] [readonly] 
**specs** | [**[RatingSpec]**](RatingSpec.md) |  | [optional] 
**nextPage** | **String** | The cursor to the next page of data; null if there is no more data | [optional] [readonly] 
**pageSize** | **Number** | The number of records fetched per-page; this may be larger than the number of records actually retrieved | [optional] [readonly] 


