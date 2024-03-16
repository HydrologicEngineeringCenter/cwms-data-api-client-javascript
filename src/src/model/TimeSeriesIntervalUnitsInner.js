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
 *
 */

import ApiClient from '../ApiClient';
import TimeSeriesIntervalUnitsInnerDuration from './TimeSeriesIntervalUnitsInnerDuration';

/**
 * The TimeSeriesIntervalUnitsInner model module.
 * @module model/TimeSeriesIntervalUnitsInner
 * @version 1.4.0
 */
class TimeSeriesIntervalUnitsInner {
    /**
     * Constructs a new <code>TimeSeriesIntervalUnitsInner</code>.
     * @alias module:model/TimeSeriesIntervalUnitsInner
     */
    constructor() { 
        
        TimeSeriesIntervalUnitsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeSeriesIntervalUnitsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesIntervalUnitsInner} obj Optional instance to populate.
     * @return {module:model/TimeSeriesIntervalUnitsInner} The populated <code>TimeSeriesIntervalUnitsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeSeriesIntervalUnitsInner();

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = TimeSeriesIntervalUnitsInnerDuration.constructFromObject(data['duration']);
            }
            if (data.hasOwnProperty('durationEstimated')) {
                obj['durationEstimated'] = ApiClient.convertToType(data['durationEstimated'], 'Boolean');
            }
            if (data.hasOwnProperty('dateBased')) {
                obj['dateBased'] = ApiClient.convertToType(data['dateBased'], 'Boolean');
            }
            if (data.hasOwnProperty('timeBased')) {
                obj['timeBased'] = ApiClient.convertToType(data['timeBased'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimeSeriesIntervalUnitsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimeSeriesIntervalUnitsInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `duration`
        if (data['duration']) { // data not null
          TimeSeriesIntervalUnitsInnerDuration.validateJSON(data['duration']);
        }

        return true;
    }


}



/**
 * @member {module:model/TimeSeriesIntervalUnitsInnerDuration} duration
 */
TimeSeriesIntervalUnitsInner.prototype['duration'] = undefined;

/**
 * @member {Boolean} durationEstimated
 */
TimeSeriesIntervalUnitsInner.prototype['durationEstimated'] = undefined;

/**
 * @member {Boolean} dateBased
 */
TimeSeriesIntervalUnitsInner.prototype['dateBased'] = undefined;

/**
 * @member {Boolean} timeBased
 */
TimeSeriesIntervalUnitsInner.prototype['timeBased'] = undefined;






export default TimeSeriesIntervalUnitsInner;

