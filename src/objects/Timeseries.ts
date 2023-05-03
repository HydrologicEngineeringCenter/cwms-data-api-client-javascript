'use strict';



/**
 * Base class for a CWMS Timeseries. 
 * 
 */
export default class Timeseries {
    private _values: Array<Number> = [];
    private _dates: Array<Date> = [];
    private _office: string = "";
    private _tsid: string = "";
    private _begin: string | number = "";
    private _end: string | number = "";
    // What version the endpoint should use
    private _version = 2;

    constructor(options: Object) {
        Object.assign(this, options)

    }

    public fetch() {

    }

    public refresh() {

    }

    public for() {

    }

    public office(office: string): Timeseries {
        // TODO: Check if office ID is valid i.e. length
        this._office = office.toUpperCase()
        return this
    }

    public tsid(tsid: string): Timeseries {
        // TODO: Check if TSID is valid
        this._tsid = tsid
        return this
    }

    public begin(begin: string | number): Timeseries {
        // TODO: Check if begin is valid iso string and/or number
        this._begin = begin
        return this
    }

    public end(end: string | number): Timeseries {
        // TODO: Check if begin is valid iso string and/or number
        this._end = end
        return this
    }

    public get values(): Array<Number> {
        return this._values;
    }

    public get dates(): Array<Date> {
        return this._dates
    }

    public get version(): Number {
        return this._version;
    }

} 
