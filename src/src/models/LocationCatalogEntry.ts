/* tslint:disable */
/* eslint-disable */
/**
 * CWMS Data API
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Alias } from './Alias';
import {
    AliasFromJSON,
    AliasFromJSONTyped,
    AliasToJSON,
} from './Alias';

/**
 * 
 * @export
 * @interface LocationCatalogEntry
 */
export interface LocationCatalogEntry {
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    office?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    nearestCity?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    publicName?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    timeZone?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCatalogEntry
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCatalogEntry
     */
    longitude?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCatalogEntry
     */
    publishedLatitude?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationCatalogEntry
     */
    publishedLongitude?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    horizontalDatum?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationCatalogEntry
     */
    elevation?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    verticalDatum?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    nation?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    county?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    boundingOffice?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationCatalogEntry
     */
    mapLabel?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationCatalogEntry
     */
    active?: boolean;
    /**
     * 
     * @type {Array<Alias>}
     * @memberof LocationCatalogEntry
     */
    aliases?: Array<Alias>;
}

/**
 * Check if a given object implements the LocationCatalogEntry interface.
 */
export function instanceOfLocationCatalogEntry(value: object): boolean {
    return true;
}

export function LocationCatalogEntryFromJSON(json: any): LocationCatalogEntry {
    return LocationCatalogEntryFromJSONTyped(json, false);
}

export function LocationCatalogEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationCatalogEntry {
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
        'aliases': json['aliases'] == null ? undefined : ((json['aliases'] as Array<any>).map(AliasFromJSON)),
    };
}

export function LocationCatalogEntryToJSON(value?: LocationCatalogEntry | null): any {
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
        'aliases': value['aliases'] == null ? undefined : ((value['aliases'] as Array<any>).map(AliasToJSON)),
    };
}

