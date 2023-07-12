/*
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.RadarError;
import org.openapitools.client.model.TimeSeriesCategory;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

public class TimeSeriesCategoriesBetaApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public TimeSeriesCategoriesBetaApi() {
        this(Configuration.getDefaultApiClient());
    }

    public TimeSeriesCategoriesBetaApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for getCwmsDataTimeseriesCategory
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the categories were not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getCwmsDataTimeseriesCategoryCall(String office, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/cwms-data/timeseries/category";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (office != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("office", office));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getCwmsDataTimeseriesCategoryValidateBeforeCall(String office, final ApiCallback _callback) throws ApiException {
        return getCwmsDataTimeseriesCategoryCall(office, _callback);

    }

    /**
     * Get cwmsData timeseries category
     * Returns CWMS timeseries category Data
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. (optional)
     * @return List&lt;TimeSeriesCategory&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the categories were not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public List<TimeSeriesCategory> getCwmsDataTimeseriesCategory(String office) throws ApiException {
        ApiResponse<List<TimeSeriesCategory>> localVarResp = getCwmsDataTimeseriesCategoryWithHttpInfo(office);
        return localVarResp.getData();
    }

    /**
     * Get cwmsData timeseries category
     * Returns CWMS timeseries category Data
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. (optional)
     * @return ApiResponse&lt;List&lt;TimeSeriesCategory&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the categories were not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<TimeSeriesCategory>> getCwmsDataTimeseriesCategoryWithHttpInfo(String office) throws ApiException {
        okhttp3.Call localVarCall = getCwmsDataTimeseriesCategoryValidateBeforeCall(office, null);
        Type localVarReturnType = new TypeToken<List<TimeSeriesCategory>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get cwmsData timeseries category (asynchronously)
     * Returns CWMS timeseries category Data
     * @param office Specifies the owning office of the timeseries category(ies) whose data is to be included in the response. If this field is not specified, matching timeseries category information from all offices shall be returned. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the categories were not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getCwmsDataTimeseriesCategoryAsync(String office, final ApiCallback<List<TimeSeriesCategory>> _callback) throws ApiException {

        okhttp3.Call localVarCall = getCwmsDataTimeseriesCategoryValidateBeforeCall(office, _callback);
        Type localVarReturnType = new TypeToken<List<TimeSeriesCategory>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for getCwmsDataTimeseriesCategoryWithCategoryId
     * @param categoryId Specifies the Category whose data is to be included in the response. (required)
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response. (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the timeseries category was not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getCwmsDataTimeseriesCategoryWithCategoryIdCall(String categoryId, String office, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/cwms-data/timeseries/category/{category-id}"
            .replace("{" + "category-id" + "}", localVarApiClient.escapeString(categoryId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (office != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("office", office));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getCwmsDataTimeseriesCategoryWithCategoryIdValidateBeforeCall(String categoryId, String office, final ApiCallback _callback) throws ApiException {
        // verify the required parameter 'categoryId' is set
        if (categoryId == null) {
            throw new ApiException("Missing the required parameter 'categoryId' when calling getCwmsDataTimeseriesCategoryWithCategoryId(Async)");
        }

        // verify the required parameter 'office' is set
        if (office == null) {
            throw new ApiException("Missing the required parameter 'office' when calling getCwmsDataTimeseriesCategoryWithCategoryId(Async)");
        }

        return getCwmsDataTimeseriesCategoryWithCategoryIdCall(categoryId, office, _callback);

    }

    /**
     * Get cwmsData timeseries category with categoryId
     * Retrieves requested timeseries category
     * @param categoryId Specifies the Category whose data is to be included in the response. (required)
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response. (required)
     * @return TimeSeriesCategory
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the timeseries category was not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public TimeSeriesCategory getCwmsDataTimeseriesCategoryWithCategoryId(String categoryId, String office) throws ApiException {
        ApiResponse<TimeSeriesCategory> localVarResp = getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(categoryId, office);
        return localVarResp.getData();
    }

    /**
     * Get cwmsData timeseries category with categoryId
     * Retrieves requested timeseries category
     * @param categoryId Specifies the Category whose data is to be included in the response. (required)
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response. (required)
     * @return ApiResponse&lt;TimeSeriesCategory&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the timeseries category was not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<TimeSeriesCategory> getCwmsDataTimeseriesCategoryWithCategoryIdWithHttpInfo(String categoryId, String office) throws ApiException {
        okhttp3.Call localVarCall = getCwmsDataTimeseriesCategoryWithCategoryIdValidateBeforeCall(categoryId, office, null);
        Type localVarReturnType = new TypeToken<TimeSeriesCategory>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get cwmsData timeseries category with categoryId (asynchronously)
     * Retrieves requested timeseries category
     * @param categoryId Specifies the Category whose data is to be included in the response. (required)
     * @param office Specifies the owning office of the timeseries category whose data is to be included in the response. (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 500 </td><td> Server Error </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 403 </td><td> Forbidden </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Based on the combination of inputs provided the timeseries category was not found. </td><td>  -  </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 501 </td><td> request format is not implemented </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call getCwmsDataTimeseriesCategoryWithCategoryIdAsync(String categoryId, String office, final ApiCallback<TimeSeriesCategory> _callback) throws ApiException {

        okhttp3.Call localVarCall = getCwmsDataTimeseriesCategoryWithCategoryIdValidateBeforeCall(categoryId, office, _callback);
        Type localVarReturnType = new TypeToken<TimeSeriesCategory>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
