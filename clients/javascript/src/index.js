/**
 * CWMS_JS
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AbstractRatingMetadata from './model/AbstractRatingMetadata';
import ApiKey from './model/ApiKey';
import AssignedLocation from './model/AssignedLocation';
import AssignedTimeSeries from './model/AssignedTimeSeries';
import Basin from './model/Basin';
import Blob from './model/Blob';
import Blobs from './model/Blobs';
import Catalog from './model/Catalog';
import CatalogEntry from './model/CatalogEntry';
import CatalogableEndpoint from './model/CatalogableEndpoint';
import CdaError from './model/CdaError';
import Clob from './model/Clob';
import Clobs from './model/Clobs';
import County from './model/County';
import CsvV1Office from './model/CsvV1Office';
import DatabaseLoadMethod from './model/DatabaseLoadMethod';
import DeleteMethod from './model/DeleteMethod';
import ExpressionRating from './model/ExpressionRating';
import ExpressionRatingAllOf from './model/ExpressionRatingAllOf';
import IndependentRoundingSpec from './model/IndependentRoundingSpec';
import Location from './model/Location';
import LocationAlias from './model/LocationAlias';
import LocationCatalogEntry from './model/LocationCatalogEntry';
import LocationCategory from './model/LocationCategory';
import LocationGroup from './model/LocationGroup';
import LocationLevel from './model/LocationLevel';
import LocationLevels from './model/LocationLevels';
import Office from './model/Office';
import OfficeCSV from './model/OfficeCSV';
import OfficeFormatV1 from './model/OfficeFormatV1';
import OfficeTabulation from './model/OfficeTabulation';
import OfficesFMT from './model/OfficesFMT';
import Offset from './model/Offset';
import ParameterSpec from './model/ParameterSpec';
import Pool from './model/Pool';
import PoolNameType from './model/PoolNameType';
import Pools from './model/Pools';
import RatingMetadata from './model/RatingMetadata';
import RatingMetadataList from './model/RatingMetadataList';
import RatingSpec from './model/RatingSpec';
import RatingSpecs from './model/RatingSpecs';
import RatingTemplate from './model/RatingTemplate';
import RatingTemplates from './model/RatingTemplates';
import SeasonalValueBean from './model/SeasonalValueBean';
import SpecifiedLevel from './model/SpecifiedLevel';
import State from './model/State';
import StoreRule from './model/StoreRule';
import Stream from './model/Stream';
import StreamLocation from './model/StreamLocation';
import StreamReach from './model/StreamReach';
import TabV1Office from './model/TabV1Office';
import TableRating from './model/TableRating';
import TableRatingAllOf from './model/TableRatingAllOf';
import TimeSeries from './model/TimeSeries';
import TimeSeriesCategory from './model/TimeSeriesCategory';
import TimeSeriesColumn from './model/TimeSeriesColumn';
import TimeSeriesExtents from './model/TimeSeriesExtents';
import TimeSeriesGroup from './model/TimeSeriesGroup';
import TimeSeriesIdentifierDescriptor from './model/TimeSeriesIdentifierDescriptor';
import TimeSeriesIdentifierDescriptors from './model/TimeSeriesIdentifierDescriptors';
import TimeSeriesInterval from './model/TimeSeriesInterval';
import TimeSeriesIntervalUnitsInner from './model/TimeSeriesIntervalUnitsInner';
import TimeSeriesIntervalUnitsInnerDuration from './model/TimeSeriesIntervalUnitsInnerDuration';
import TimeSeriesRecord from './model/TimeSeriesRecord';
import TimeSeriesValuesInnerInner from './model/TimeSeriesValuesInnerInner';
import TimeseriesCatalogEntry from './model/TimeseriesCatalogEntry';
import TransitionalRating from './model/TransitionalRating';
import TransitionalRatingAllOf from './model/TransitionalRatingAllOf';
import UnitSystem from './model/UnitSystem';
import UsgsStreamRating from './model/UsgsStreamRating';
import VerticalDatumInfo from './model/VerticalDatumInfo';
import VirtualRating from './model/VirtualRating';
import VirtualRatingAllOf from './model/VirtualRatingAllOf';
import AuthorizationApi from './api/AuthorizationApi';
import BasinsApi from './api/BasinsApi';
import BlobApi from './api/BlobApi';
import CatalogApi from './api/CatalogApi';
import ClobApi from './api/ClobApi';
import CountiesApi from './api/CountiesApi';
import DefaultApi from './api/DefaultApi';
import LevelsApi from './api/LevelsApi';
import LocationCategoriesApi from './api/LocationCategoriesApi';
import LocationGroupsApi from './api/LocationGroupsApi';
import LocationsApi from './api/LocationsApi';
import OfficesApi from './api/OfficesApi';
import ParametersApi from './api/ParametersApi';
import PoolsApi from './api/PoolsApi';
import RatingsApi from './api/RatingsApi';
import StatesApi from './api/StatesApi';
import TimeSeriesApi from './api/TimeSeriesApi';
import TimeSeriesCategoriesApi from './api/TimeSeriesCategoriesApi';
import TimeSeriesIdentifierApi from './api/TimeSeriesIdentifierApi';
import TimeZonesApi from './api/TimeZonesApi';
import TimeseriesGroupsApi from './api/TimeseriesGroupsApi';
import UnitsApi from './api/UnitsApi';


/**
* CWMS REST API for Data Retrieval.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Cwmsjs = require('index'); // See note below*.
* var xxxSvc = new Cwmsjs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Cwmsjs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Cwmsjs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Cwmsjs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractRatingMetadata model constructor.
     * @property {module:model/AbstractRatingMetadata}
     */
    AbstractRatingMetadata,

    /**
     * The ApiKey model constructor.
     * @property {module:model/ApiKey}
     */
    ApiKey,

    /**
     * The AssignedLocation model constructor.
     * @property {module:model/AssignedLocation}
     */
    AssignedLocation,

    /**
     * The AssignedTimeSeries model constructor.
     * @property {module:model/AssignedTimeSeries}
     */
    AssignedTimeSeries,

    /**
     * The Basin model constructor.
     * @property {module:model/Basin}
     */
    Basin,

    /**
     * The Blob model constructor.
     * @property {module:model/Blob}
     */
    Blob,

    /**
     * The Blobs model constructor.
     * @property {module:model/Blobs}
     */
    Blobs,

    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog,

    /**
     * The CatalogEntry model constructor.
     * @property {module:model/CatalogEntry}
     */
    CatalogEntry,

    /**
     * The CatalogableEndpoint model constructor.
     * @property {module:model/CatalogableEndpoint}
     */
    CatalogableEndpoint,

    /**
     * The CdaError model constructor.
     * @property {module:model/CdaError}
     */
    CdaError,

    /**
     * The Clob model constructor.
     * @property {module:model/Clob}
     */
    Clob,

    /**
     * The Clobs model constructor.
     * @property {module:model/Clobs}
     */
    Clobs,

    /**
     * The County model constructor.
     * @property {module:model/County}
     */
    County,

    /**
     * The CsvV1Office model constructor.
     * @property {module:model/CsvV1Office}
     */
    CsvV1Office,

    /**
     * The DatabaseLoadMethod model constructor.
     * @property {module:model/DatabaseLoadMethod}
     */
    DatabaseLoadMethod,

    /**
     * The DeleteMethod model constructor.
     * @property {module:model/DeleteMethod}
     */
    DeleteMethod,

    /**
     * The ExpressionRating model constructor.
     * @property {module:model/ExpressionRating}
     */
    ExpressionRating,

    /**
     * The ExpressionRatingAllOf model constructor.
     * @property {module:model/ExpressionRatingAllOf}
     */
    ExpressionRatingAllOf,

    /**
     * The IndependentRoundingSpec model constructor.
     * @property {module:model/IndependentRoundingSpec}
     */
    IndependentRoundingSpec,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The LocationAlias model constructor.
     * @property {module:model/LocationAlias}
     */
    LocationAlias,

    /**
     * The LocationCatalogEntry model constructor.
     * @property {module:model/LocationCatalogEntry}
     */
    LocationCatalogEntry,

    /**
     * The LocationCategory model constructor.
     * @property {module:model/LocationCategory}
     */
    LocationCategory,

    /**
     * The LocationGroup model constructor.
     * @property {module:model/LocationGroup}
     */
    LocationGroup,

    /**
     * The LocationLevel model constructor.
     * @property {module:model/LocationLevel}
     */
    LocationLevel,

    /**
     * The LocationLevels model constructor.
     * @property {module:model/LocationLevels}
     */
    LocationLevels,

    /**
     * The Office model constructor.
     * @property {module:model/Office}
     */
    Office,

    /**
     * The OfficeCSV model constructor.
     * @property {module:model/OfficeCSV}
     */
    OfficeCSV,

    /**
     * The OfficeFormatV1 model constructor.
     * @property {module:model/OfficeFormatV1}
     */
    OfficeFormatV1,

    /**
     * The OfficeTabulation model constructor.
     * @property {module:model/OfficeTabulation}
     */
    OfficeTabulation,

    /**
     * The OfficesFMT model constructor.
     * @property {module:model/OfficesFMT}
     */
    OfficesFMT,

    /**
     * The Offset model constructor.
     * @property {module:model/Offset}
     */
    Offset,

    /**
     * The ParameterSpec model constructor.
     * @property {module:model/ParameterSpec}
     */
    ParameterSpec,

    /**
     * The Pool model constructor.
     * @property {module:model/Pool}
     */
    Pool,

    /**
     * The PoolNameType model constructor.
     * @property {module:model/PoolNameType}
     */
    PoolNameType,

    /**
     * The Pools model constructor.
     * @property {module:model/Pools}
     */
    Pools,

    /**
     * The RatingMetadata model constructor.
     * @property {module:model/RatingMetadata}
     */
    RatingMetadata,

    /**
     * The RatingMetadataList model constructor.
     * @property {module:model/RatingMetadataList}
     */
    RatingMetadataList,

    /**
     * The RatingSpec model constructor.
     * @property {module:model/RatingSpec}
     */
    RatingSpec,

    /**
     * The RatingSpecs model constructor.
     * @property {module:model/RatingSpecs}
     */
    RatingSpecs,

    /**
     * The RatingTemplate model constructor.
     * @property {module:model/RatingTemplate}
     */
    RatingTemplate,

    /**
     * The RatingTemplates model constructor.
     * @property {module:model/RatingTemplates}
     */
    RatingTemplates,

    /**
     * The SeasonalValueBean model constructor.
     * @property {module:model/SeasonalValueBean}
     */
    SeasonalValueBean,

    /**
     * The SpecifiedLevel model constructor.
     * @property {module:model/SpecifiedLevel}
     */
    SpecifiedLevel,

    /**
     * The State model constructor.
     * @property {module:model/State}
     */
    State,

    /**
     * The StoreRule model constructor.
     * @property {module:model/StoreRule}
     */
    StoreRule,

    /**
     * The Stream model constructor.
     * @property {module:model/Stream}
     */
    Stream,

    /**
     * The StreamLocation model constructor.
     * @property {module:model/StreamLocation}
     */
    StreamLocation,

    /**
     * The StreamReach model constructor.
     * @property {module:model/StreamReach}
     */
    StreamReach,

    /**
     * The TabV1Office model constructor.
     * @property {module:model/TabV1Office}
     */
    TabV1Office,

    /**
     * The TableRating model constructor.
     * @property {module:model/TableRating}
     */
    TableRating,

    /**
     * The TableRatingAllOf model constructor.
     * @property {module:model/TableRatingAllOf}
     */
    TableRatingAllOf,

    /**
     * The TimeSeries model constructor.
     * @property {module:model/TimeSeries}
     */
    TimeSeries,

    /**
     * The TimeSeriesCategory model constructor.
     * @property {module:model/TimeSeriesCategory}
     */
    TimeSeriesCategory,

    /**
     * The TimeSeriesColumn model constructor.
     * @property {module:model/TimeSeriesColumn}
     */
    TimeSeriesColumn,

    /**
     * The TimeSeriesExtents model constructor.
     * @property {module:model/TimeSeriesExtents}
     */
    TimeSeriesExtents,

    /**
     * The TimeSeriesGroup model constructor.
     * @property {module:model/TimeSeriesGroup}
     */
    TimeSeriesGroup,

    /**
     * The TimeSeriesIdentifierDescriptor model constructor.
     * @property {module:model/TimeSeriesIdentifierDescriptor}
     */
    TimeSeriesIdentifierDescriptor,

    /**
     * The TimeSeriesIdentifierDescriptors model constructor.
     * @property {module:model/TimeSeriesIdentifierDescriptors}
     */
    TimeSeriesIdentifierDescriptors,

    /**
     * The TimeSeriesInterval model constructor.
     * @property {module:model/TimeSeriesInterval}
     */
    TimeSeriesInterval,

    /**
     * The TimeSeriesIntervalUnitsInner model constructor.
     * @property {module:model/TimeSeriesIntervalUnitsInner}
     */
    TimeSeriesIntervalUnitsInner,

    /**
     * The TimeSeriesIntervalUnitsInnerDuration model constructor.
     * @property {module:model/TimeSeriesIntervalUnitsInnerDuration}
     */
    TimeSeriesIntervalUnitsInnerDuration,

    /**
     * The TimeSeriesRecord model constructor.
     * @property {module:model/TimeSeriesRecord}
     */
    TimeSeriesRecord,

    /**
     * The TimeSeriesValuesInnerInner model constructor.
     * @property {module:model/TimeSeriesValuesInnerInner}
     */
    TimeSeriesValuesInnerInner,

    /**
     * The TimeseriesCatalogEntry model constructor.
     * @property {module:model/TimeseriesCatalogEntry}
     */
    TimeseriesCatalogEntry,

    /**
     * The TransitionalRating model constructor.
     * @property {module:model/TransitionalRating}
     */
    TransitionalRating,

    /**
     * The TransitionalRatingAllOf model constructor.
     * @property {module:model/TransitionalRatingAllOf}
     */
    TransitionalRatingAllOf,

    /**
     * The UnitSystem model constructor.
     * @property {module:model/UnitSystem}
     */
    UnitSystem,

    /**
     * The UsgsStreamRating model constructor.
     * @property {module:model/UsgsStreamRating}
     */
    UsgsStreamRating,

    /**
     * The VerticalDatumInfo model constructor.
     * @property {module:model/VerticalDatumInfo}
     */
    VerticalDatumInfo,

    /**
     * The VirtualRating model constructor.
     * @property {module:model/VirtualRating}
     */
    VirtualRating,

    /**
     * The VirtualRatingAllOf model constructor.
     * @property {module:model/VirtualRatingAllOf}
     */
    VirtualRatingAllOf,

    /**
    * The AuthorizationApi service constructor.
    * @property {module:api/AuthorizationApi}
    */
    AuthorizationApi,

    /**
    * The BasinsApi service constructor.
    * @property {module:api/BasinsApi}
    */
    BasinsApi,

    /**
    * The BlobApi service constructor.
    * @property {module:api/BlobApi}
    */
    BlobApi,

    /**
    * The CatalogApi service constructor.
    * @property {module:api/CatalogApi}
    */
    CatalogApi,

    /**
    * The ClobApi service constructor.
    * @property {module:api/ClobApi}
    */
    ClobApi,

    /**
    * The CountiesApi service constructor.
    * @property {module:api/CountiesApi}
    */
    CountiesApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The LevelsApi service constructor.
    * @property {module:api/LevelsApi}
    */
    LevelsApi,

    /**
    * The LocationCategoriesApi service constructor.
    * @property {module:api/LocationCategoriesApi}
    */
    LocationCategoriesApi,

    /**
    * The LocationGroupsApi service constructor.
    * @property {module:api/LocationGroupsApi}
    */
    LocationGroupsApi,

    /**
    * The LocationsApi service constructor.
    * @property {module:api/LocationsApi}
    */
    LocationsApi,

    /**
    * The OfficesApi service constructor.
    * @property {module:api/OfficesApi}
    */
    OfficesApi,

    /**
    * The ParametersApi service constructor.
    * @property {module:api/ParametersApi}
    */
    ParametersApi,

    /**
    * The PoolsApi service constructor.
    * @property {module:api/PoolsApi}
    */
    PoolsApi,

    /**
    * The RatingsApi service constructor.
    * @property {module:api/RatingsApi}
    */
    RatingsApi,

    /**
    * The StatesApi service constructor.
    * @property {module:api/StatesApi}
    */
    StatesApi,

    /**
    * The TimeSeriesApi service constructor.
    * @property {module:api/TimeSeriesApi}
    */
    TimeSeriesApi,

    /**
    * The TimeSeriesCategoriesApi service constructor.
    * @property {module:api/TimeSeriesCategoriesApi}
    */
    TimeSeriesCategoriesApi,

    /**
    * The TimeSeriesIdentifierApi service constructor.
    * @property {module:api/TimeSeriesIdentifierApi}
    */
    TimeSeriesIdentifierApi,

    /**
    * The TimeZonesApi service constructor.
    * @property {module:api/TimeZonesApi}
    */
    TimeZonesApi,

    /**
    * The TimeseriesGroupsApi service constructor.
    * @property {module:api/TimeseriesGroupsApi}
    */
    TimeseriesGroupsApi,

    /**
    * The UnitsApi service constructor.
    * @property {module:api/UnitsApi}
    */
    UnitsApi
};
