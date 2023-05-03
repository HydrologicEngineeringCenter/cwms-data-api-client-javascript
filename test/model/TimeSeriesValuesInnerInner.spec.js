/**
 * CWMS Radar
 * CWMS REST API for Data Retrieval
 *
 * The version of the OpenAPI document: 2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CwmsRadar);
  }
}(this, function(expect, CwmsRadar) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CwmsRadar.TimeSeriesValuesInnerInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TimeSeriesValuesInnerInner', function() {
    it('should create an instance of TimeSeriesValuesInnerInner', function() {
      // uncomment below and update the code to test TimeSeriesValuesInnerInner
      //var instance = new CwmsRadar.TimeSeriesValuesInnerInner();
      //expect(instance).to.be.a(CwmsRadar.TimeSeriesValuesInnerInner);
    });

    it('should have the property dateTime (base name: "date-time")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instance = new CwmsRadar.TimeSeriesValuesInnerInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CwmsRadar.TimeSeriesValuesInnerInner();
      //expect(instance).to.be();
    });

    it('should have the property qualityCode (base name: "quality-code")', function() {
      // uncomment below and update the code to test the property qualityCode
      //var instance = new CwmsRadar.TimeSeriesValuesInnerInner();
      //expect(instance).to.be();
    });

  });

}));
