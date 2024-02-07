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
    instance = new CwmsRadar.TimeSeriesExtents();
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

  describe('TimeSeriesExtents', function() {
    it('should create an instance of TimeSeriesExtents', function() {
      // uncomment below and update the code to test TimeSeriesExtents
      //var instance = new CwmsRadar.TimeSeriesExtents();
      //expect(instance).to.be.a(CwmsRadar.TimeSeriesExtents);
    });

    it('should have the property earliestTime (base name: "earliest-time")', function() {
      // uncomment below and update the code to test the property earliestTime
      //var instance = new CwmsRadar.TimeSeriesExtents();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "last-update")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instance = new CwmsRadar.TimeSeriesExtents();
      //expect(instance).to.be();
    });

    it('should have the property latestTime (base name: "latest-time")', function() {
      // uncomment below and update the code to test the property latestTime
      //var instance = new CwmsRadar.TimeSeriesExtents();
      //expect(instance).to.be();
    });

    it('should have the property versionTime (base name: "version-time")', function() {
      // uncomment below and update the code to test the property versionTime
      //var instance = new CwmsRadar.TimeSeriesExtents();
      //expect(instance).to.be();
    });

  });

}));