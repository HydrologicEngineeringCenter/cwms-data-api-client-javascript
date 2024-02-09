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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CwmsDataApi);
  }
}(this, function(expect, CwmsDataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
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

  describe('TimeSeriesIdentifierDescriptor', function() {
    it('should create an instance of TimeSeriesIdentifierDescriptor', function() {
      // uncomment below and update the code to test TimeSeriesIdentifierDescriptor
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be.a(CwmsDataApi.TimeSeriesIdentifierDescriptor);
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property timeSeriesId (base name: "time-series-id")', function() {
      // uncomment below and update the code to test the property timeSeriesId
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property timezoneName (base name: "timezone-name")', function() {
      // uncomment below and update the code to test the property timezoneName
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property intervalOffsetMinutes (base name: "interval-offset-minutes")', function() {
      // uncomment below and update the code to test the property intervalOffsetMinutes
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new CwmsDataApi.TimeSeriesIdentifierDescriptor();
      //expect(instance).to.be();
    });

  });

}));
