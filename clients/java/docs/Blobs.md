

# Blobs


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **String** | The cursor to the current page of data |  [optional] [readonly] |
|**total** | **Integer** | The total number of records retrieved; null or not present if not supported or unknown |  [optional] [readonly] |
|**blobs** | [**List&lt;Blob&gt;**](Blob.md) | List of retrieved blobs |  [optional] |
|**nextPage** | **String** | The cursor to the next page of data; null if there is no more data |  [optional] [readonly] |
|**pageSize** | **Integer** | The number of records fetched per-page; this may be larger than the number of records actually retrieved |  [optional] [readonly] |



