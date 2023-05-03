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
    instance = new CwmsRadar.RatingSpec();
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

  describe('RatingSpec', function() {
    it('should create an instance of RatingSpec', function() {
      // uncomment below and update the code to test RatingSpec
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be.a(CwmsRadar.RatingSpec);
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property ratingId (base name: "rating-id")', function() {
      // uncomment below and update the code to test the property ratingId
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "template-id")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property locationId (base name: "location-id")', function() {
      // uncomment below and update the code to test the property locationId
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property sourceAgency (base name: "source-agency")', function() {
      // uncomment below and update the code to test the property sourceAgency
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property inRangeMethod (base name: "in-range-method")', function() {
      // uncomment below and update the code to test the property inRangeMethod
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property outRangeLowMethod (base name: "out-range-low-method")', function() {
      // uncomment below and update the code to test the property outRangeLowMethod
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property outRangeHighMethod (base name: "out-range-high-method")', function() {
      // uncomment below and update the code to test the property outRangeHighMethod
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property autoUpdate (base name: "auto-update")', function() {
      // uncomment below and update the code to test the property autoUpdate
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property autoActivate (base name: "auto-activate")', function() {
      // uncomment below and update the code to test the property autoActivate
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property autoMigrateExtension (base name: "auto-migrate-extension")', function() {
      // uncomment below and update the code to test the property autoMigrateExtension
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property independentRoundingSpecs (base name: "independent-rounding-specs")', function() {
      // uncomment below and update the code to test the property independentRoundingSpecs
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property dependentRoundingSpec (base name: "dependent-rounding-spec")', function() {
      // uncomment below and update the code to test the property dependentRoundingSpec
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

    it('should have the property effectiveDates (base name: "effective-dates")', function() {
      // uncomment below and update the code to test the property effectiveDates
      //var instance = new CwmsRadar.RatingSpec();
      //expect(instance).to.be();
    });

  });

}));
