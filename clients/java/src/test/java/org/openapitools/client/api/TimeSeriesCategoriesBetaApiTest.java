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

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RadarError;
import org.openapitools.client.model.TimeSeriesCategory;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TimeSeriesCategoriesBetaApi
 */
@Disabled
public class TimeSeriesCategoriesBetaApiTest {

    private final TimeSeriesCategoriesBetaApi api = new TimeSeriesCategoriesBetaApi();

    /**
     * Get cwmsData timeseries category
     *
     * Returns CWMS timeseries category Data
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getCwmsDataTimeseriesCategoryTest() throws ApiException {
        String office = null;
        List<TimeSeriesCategory> response = api.getCwmsDataTimeseriesCategory(office);
        // TODO: test validations
    }

    /**
     * Get cwmsData timeseries category with categoryId
     *
     * Retrieves requested timeseries category
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getCwmsDataTimeseriesCategoryWithCategoryIdTest() throws ApiException {
        String categoryId = null;
        String office = null;
        TimeSeriesCategory response = api.getCwmsDataTimeseriesCategoryWithCategoryId(categoryId, office);
        // TODO: test validations
    }

}
