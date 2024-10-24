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
import { AliasFromJSON, AliasToJSON, } from './Alias';
/**
 * Check if a given object implements the LocationCatalogEntry interface.
 */
export function instanceOfLocationCatalogEntry(value) {
    return true;
}
export function LocationCatalogEntryFromJSON(json) {
    return LocationCatalogEntryFromJSONTyped(json, false);
}
export function LocationCatalogEntryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'office': json['office'] == null ? undefined : json['office'],
        'name': json['name'] == null ? undefined : json['name'],
        'nearestCity': json['nearest-city'] == null ? undefined : json['nearest-city'],
        'publicName': json['public-name'] == null ? undefined : json['public-name'],
        'longName': json['long-name'] == null ? undefined : json['long-name'],
        'description': json['description'] == null ? undefined : json['description'],
        'kind': json['kind'] == null ? undefined : json['kind'],
        'type': json['type'] == null ? undefined : json['type'],
        'timeZone': json['time-zone'] == null ? undefined : json['time-zone'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'publishedLatitude': json['published-latitude'] == null ? undefined : json['published-latitude'],
        'publishedLongitude': json['published-longitude'] == null ? undefined : json['published-longitude'],
        'horizontalDatum': json['horizontal-datum'] == null ? undefined : json['horizontal-datum'],
        'elevation': json['elevation'] == null ? undefined : json['elevation'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'verticalDatum': json['vertical-datum'] == null ? undefined : json['vertical-datum'],
        'nation': json['nation'] == null ? undefined : json['nation'],
        'state': json['state'] == null ? undefined : json['state'],
        'county': json['county'] == null ? undefined : json['county'],
        'boundingOffice': json['bounding-office'] == null ? undefined : json['bounding-office'],
        'mapLabel': json['map-label'] == null ? undefined : json['map-label'],
        'active': json['active'] == null ? undefined : json['active'],
        'aliases': json['aliases'] == null ? undefined : (json['aliases'].map(AliasFromJSON)),
    };
}
export function LocationCatalogEntryToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'office': value['office'],
        'name': value['name'],
        'nearest-city': value['nearestCity'],
        'public-name': value['publicName'],
        'long-name': value['longName'],
        'description': value['description'],
        'kind': value['kind'],
        'type': value['type'],
        'time-zone': value['timeZone'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'published-latitude': value['publishedLatitude'],
        'published-longitude': value['publishedLongitude'],
        'horizontal-datum': value['horizontalDatum'],
        'elevation': value['elevation'],
        'unit': value['unit'],
        'vertical-datum': value['verticalDatum'],
        'nation': value['nation'],
        'state': value['state'],
        'county': value['county'],
        'bounding-office': value['boundingOffice'],
        'map-label': value['mapLabel'],
        'active': value['active'],
        'aliases': value['aliases'] == null ? undefined : (value['aliases'].map(AliasToJSON)),
    };
}
