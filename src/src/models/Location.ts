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
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * Owning office of object.
     * @type {string}
     * @memberof Location
     */
    officeId: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    longitude?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    publicName?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    longName?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    timezoneName?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    locationType?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    locationKind?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    nation?: LocationNationEnum;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    stateInitial?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    countyName?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    nearestCity?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    horizontalDatum?: string;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    publishedLongitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    publishedLatitude?: number;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    verticalDatum?: string;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    elevation?: number;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    mapLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    boundingOfficeId?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    elevationUnits?: string;
}


/**
 * @export
 */
export const LocationNationEnum = {
    Us: 'US',
    Canada: 'CANADA',
    Mexico: 'MEXICO'
} as const;
export type LocationNationEnum = typeof LocationNationEnum[keyof typeof LocationNationEnum];


/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): boolean {
    if (!('officeId' in value)) return false;
    if (!('name' in value)) return false;
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
        'officeId': json['office-id'],
        'name': json['name'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'active': json['active'] == null ? undefined : json['active'],
        'publicName': json['public-name'] == null ? undefined : json['public-name'],
        'longName': json['long-name'] == null ? undefined : json['long-name'],
        'description': json['description'] == null ? undefined : json['description'],
        'timezoneName': json['timezone-name'] == null ? undefined : json['timezone-name'],
        'locationType': json['location-type'] == null ? undefined : json['location-type'],
        'locationKind': json['location-kind'] == null ? undefined : json['location-kind'],
        'nation': json['nation'] == null ? undefined : json['nation'],
        'stateInitial': json['state-initial'] == null ? undefined : json['state-initial'],
        'countyName': json['county-name'] == null ? undefined : json['county-name'],
        'nearestCity': json['nearest-city'] == null ? undefined : json['nearest-city'],
        'horizontalDatum': json['horizontal-datum'] == null ? undefined : json['horizontal-datum'],
        'publishedLongitude': json['published-longitude'] == null ? undefined : json['published-longitude'],
        'publishedLatitude': json['published-latitude'] == null ? undefined : json['published-latitude'],
        'verticalDatum': json['vertical-datum'] == null ? undefined : json['vertical-datum'],
        'elevation': json['elevation'] == null ? undefined : json['elevation'],
        'mapLabel': json['map-label'] == null ? undefined : json['map-label'],
        'boundingOfficeId': json['bounding-office-id'] == null ? undefined : json['bounding-office-id'],
        'elevationUnits': json['elevation-units'] == null ? undefined : json['elevation-units'],
    };
}

export function LocationToJSON(value?: Location | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'office-id': value['officeId'],
        'name': value['name'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'active': value['active'],
        'public-name': value['publicName'],
        'long-name': value['longName'],
        'description': value['description'],
        'timezone-name': value['timezoneName'],
        'location-type': value['locationType'],
        'location-kind': value['locationKind'],
        'nation': value['nation'],
        'state-initial': value['stateInitial'],
        'county-name': value['countyName'],
        'nearest-city': value['nearestCity'],
        'horizontal-datum': value['horizontalDatum'],
        'published-longitude': value['publishedLongitude'],
        'published-latitude': value['publishedLatitude'],
        'vertical-datum': value['verticalDatum'],
        'elevation': value['elevation'],
        'map-label': value['mapLabel'],
        'bounding-office-id': value['boundingOfficeId'],
        'elevation-units': value['elevationUnits'],
    };
}

