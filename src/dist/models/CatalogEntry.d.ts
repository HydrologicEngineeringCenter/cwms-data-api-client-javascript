/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { LocationCatalogEntry } from './LocationCatalogEntry';
import type { TimeseriesCatalogEntry } from './TimeseriesCatalogEntry';
/**
 * @type CatalogEntry
 *
 * @export
 */
export type CatalogEntry = LocationCatalogEntry | TimeseriesCatalogEntry;
export declare function CatalogEntryFromJSON(json: any): CatalogEntry;
export declare function CatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogEntry;
export declare function CatalogEntryToJSON(value?: CatalogEntry | null): any;
