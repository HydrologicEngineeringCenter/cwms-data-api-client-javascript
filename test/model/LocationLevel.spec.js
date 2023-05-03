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
    instance = new CwmsRadar.LocationLevel();
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

  describe('LocationLevel', function() {
    it('should create an instance of LocationLevel', function() {
      // uncomment below and update the code to test LocationLevel
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be.a(CwmsRadar.LocationLevel);
    });

    it('should have the property locationLevelId (base name: "location-level-id")', function() {
      // uncomment below and update the code to test the property locationLevelId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property seasonalTimeSeriesId (base name: "seasonal-time-series-id")', function() {
      // uncomment below and update the code to test the property seasonalTimeSeriesId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property seasonalValues (base name: "seasonal-values")', function() {
      // uncomment below and update the code to test the property seasonalValues
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property specifiedLevelId (base name: "specified-level-id")', function() {
      // uncomment below and update the code to test the property specifiedLevelId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property parameterTypeId (base name: "parameter-type-id")', function() {
      // uncomment below and update the code to test the property parameterTypeId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property parameterId (base name: "parameter-id")', function() {
      // uncomment below and update the code to test the property parameterId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property constantValue (base name: "constant-value")', function() {
      // uncomment below and update the code to test the property constantValue
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property levelUnitsId (base name: "level-units-id")', function() {
      // uncomment below and update the code to test the property levelUnitsId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property levelDate (base name: "level-date")', function() {
      // uncomment below and update the code to test the property levelDate
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property levelComment (base name: "level-comment")', function() {
      // uncomment below and update the code to test the property levelComment
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property intervalOrigin (base name: "interval-origin")', function() {
      // uncomment below and update the code to test the property intervalOrigin
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property intervalMonths (base name: "interval-months")', function() {
      // uncomment below and update the code to test the property intervalMonths
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property intervalMinutes (base name: "interval-minutes")', function() {
      // uncomment below and update the code to test the property intervalMinutes
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property interpolateString (base name: "interpolate-string")', function() {
      // uncomment below and update the code to test the property interpolateString
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property durationId (base name: "duration-id")', function() {
      // uncomment below and update the code to test the property durationId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeValue (base name: "attribute-value")', function() {
      // uncomment below and update the code to test the property attributeValue
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeUnitsId (base name: "attribute-units-id")', function() {
      // uncomment below and update the code to test the property attributeUnitsId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeParameterTypeId (base name: "attribute-parameter-type-id")', function() {
      // uncomment below and update the code to test the property attributeParameterTypeId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeParameterId (base name: "attribute-parameter-id")', function() {
      // uncomment below and update the code to test the property attributeParameterId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeDurationId (base name: "attribute-duration-id")', function() {
      // uncomment below and update the code to test the property attributeDurationId
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

    it('should have the property attributeComment (base name: "attribute-comment")', function() {
      // uncomment below and update the code to test the property attributeComment
      //var instance = new CwmsRadar.LocationLevel();
      //expect(instance).to.be();
    });

  });

}));
