/* tslint:disable */
/* eslint-disable */
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
import { CatalogEntryFromJSON, CatalogEntryToJSON, } from './CatalogEntry';
/**
 * Check if a given object implements the Catalog interface.
 */
export function instanceOfCatalog(value) {
    return true;
}
export function CatalogFromJSON(json) {
    return CatalogFromJSONTyped(json, false);
}
export function CatalogFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'entries': json['entries'] == null ? undefined : (json['entries'].map(CatalogEntryFromJSON)),
        'nextPage': json['next-page'] == null ? undefined : json['next-page'],
        'page': json['page'] == null ? undefined : json['page'],
        'pageSize': json['page-size'] == null ? undefined : json['page-size'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}
export function CatalogToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'entries': value['entries'] == null ? undefined : (value['entries'].map(CatalogEntryToJSON)),
    };
}
