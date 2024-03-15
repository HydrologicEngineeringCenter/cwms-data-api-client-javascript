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

import { mapValues } from "../runtime";
import type { TimeSeriesColumn } from "./TimeSeriesColumn";
import {
  TimeSeriesColumnFromJSON,
  TimeSeriesColumnFromJSONTyped,
  TimeSeriesColumnToJSON,
} from "./TimeSeriesColumn";
import type { TimeSeriesInterval } from "./TimeSeriesInterval";
import {
  TimeSeriesIntervalFromJSON,
  TimeSeriesIntervalFromJSONTyped,
  TimeSeriesIntervalToJSON,
} from "./TimeSeriesInterval";
import type { TimeSeriesValuesInnerInner } from "./TimeSeriesValuesInnerInner";
import {
  TimeSeriesValuesInnerInnerFromJSON,
  TimeSeriesValuesInnerInnerFromJSONTyped,
  TimeSeriesValuesInnerInnerToJSON,
} from "./TimeSeriesValuesInnerInner";
import type { VerticalDatumInfo } from "./VerticalDatumInfo";
import {
  VerticalDatumInfoFromJSON,
  VerticalDatumInfoFromJSONTyped,
  VerticalDatumInfoToJSON,
} from "./VerticalDatumInfo";

/**
 *
 * @export
 * @interface TimeSeries
 */
export interface TimeSeries {
  /**
   * The requested start time of the data, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
   * @type {Date}
   * @memberof TimeSeries
   */
  readonly begin?: Date;
  /**
   * The requested end time of the data, in ISO-8601 format with offset and timezone ('yyyy-MM-dd'T'HH:mm:ssZ'['VV']'')
   * @type {Date}
   * @memberof TimeSeries
   */
  readonly end?: Date;
  /**
   *
   * @type {TimeSeriesInterval}
   * @memberof TimeSeries
   */
  interval?: TimeSeriesInterval;
  /**
   * Offset from top of interval
   * @type {number}
   * @memberof TimeSeries
   */
  readonly intervalOffset?: number;
  /**
   * Time-series name
   * @type {string}
   * @memberof TimeSeries
   */
  name?: string;
  /**
   * The cursor to the next page of data; null if there is no more data
   * @type {string}
   * @memberof TimeSeries
   */
  readonly nextPage?: string;
  /**
   * Office ID that owns the time-series
   * @type {string}
   * @memberof TimeSeries
   */
  officeId?: string;
  /**
   * The cursor to the current page of data
   * @type {string}
   * @memberof TimeSeries
   */
  readonly page?: string;
  /**
   * The number of records fetched per-page; this may be larger than the number of records actually retrieved
   * @type {number}
   * @memberof TimeSeries
   */
  readonly pageSize?: number;
  /**
   * Only on 21.1.1 Database. The timezone the Interval Offset is from.
   * @type {string}
   * @memberof TimeSeries
   */
  readonly timeZone?: string;
  /**
   * The total number of records retrieved; null or not present if not supported or unknown
   * @type {number}
   * @memberof TimeSeries
   */
  readonly total?: number;
  /**
   * The units of the time series data
   * @type {string}
   * @memberof TimeSeries
   */
  units: string;
  /**
   *
   * @type {Array<TimeSeriesColumn>}
   * @memberof TimeSeries
   */
  readonly valueColumns?: Array<TimeSeriesColumn>;
  /**
   *
   * @type {Array<Array<TimeSeriesValuesInnerInner>>}
   * @memberof TimeSeries
   */
  values?: Array<Array<TimeSeriesValuesInnerInner>>;
  /**
   *
   * @type {VerticalDatumInfo}
   * @memberof TimeSeries
   */
  verticalDatumInfo?: VerticalDatumInfo;
}

/**
 * Check if a given object implements the TimeSeries interface.
 */
export function instanceOfTimeSeries(value: object): boolean {
  if (!("units" in value)) return false;
  return true;
}

export function TimeSeriesFromJSON(json: any): TimeSeries {
  return TimeSeriesFromJSONTyped(json, false);
}

export function TimeSeriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TimeSeries {
  if (json == null) {
    return json;
  }
  return {
    begin: json["begin"] == null ? undefined : new Date(json["begin"]),
    end: json["end"] == null ? undefined : new Date(json["end"]),
    interval:
      json["interval"] == null
        ? undefined
        : TimeSeriesIntervalFromJSON(json["interval"]),
    intervalOffset:
      json["interval-offset"] == null ? undefined : json["interval-offset"],
    name: json["name"] == null ? undefined : json["name"],
    nextPage: json["next-page"] == null ? undefined : json["next-page"],
    officeId: json["office-id"] == null ? undefined : json["office-id"],
    page: json["page"] == null ? undefined : json["page"],
    pageSize: json["page-size"] == null ? undefined : json["page-size"],
    timeZone: json["time-zone"] == null ? undefined : json["time-zone"],
    total: json["total"] == null ? undefined : json["total"],
    units: json["units"],
    valueColumns:
      json["value-columns"] == null
        ? undefined
        : (json["value-columns"] as Array<any>).map(TimeSeriesColumnFromJSON),
    values: json["values"] == null ? undefined : json["values"],
    verticalDatumInfo:
      json["vertical-datum-info"] == null
        ? undefined
        : VerticalDatumInfoFromJSON(json["vertical-datum-info"]),
  };
}

export function TimeSeriesToJSON(value?: TimeSeries | null): any {
  if (value == null) {
    return value;
  }
  return {
    interval: TimeSeriesIntervalToJSON(value["interval"]),
    name: value["name"],
    "office-id": value["officeId"],
    units: value["units"],
    values: value["values"],
    "vertical-datum-info": VerticalDatumInfoToJSON(value["verticalDatumInfo"]),
  };
}
