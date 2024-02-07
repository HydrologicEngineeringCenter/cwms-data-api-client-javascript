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
    instance = new CwmsDataApi.AbstractRatingMetadata();
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

  describe('AbstractRatingMetadata', function() {
    it('should create an instance of AbstractRatingMetadata', function() {
      // uncomment below and update the code to test AbstractRatingMetadata
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be.a(CwmsDataApi.AbstractRatingMetadata);
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property ratingSpecId (base name: "rating-spec-id")', function() {
      // uncomment below and update the code to test the property ratingSpecId
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property unitsId (base name: "units-id")', function() {
      // uncomment below and update the code to test the property unitsId
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property effectiveDate (base name: "effective-date")', function() {
      // uncomment below and update the code to test the property effectiveDate
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create-date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property transitionDate (base name: "transition-date")', function() {
      // uncomment below and update the code to test the property transitionDate
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property verticalDatumInfo (base name: "vertical-datum-info")', function() {
      // uncomment below and update the code to test the property verticalDatumInfo
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property ratingType (base name: "rating-type")', function() {
      // uncomment below and update the code to test the property ratingType
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property inRangeMethod (base name: "in-range-method")', function() {
      // uncomment below and update the code to test the property inRangeMethod
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property outRangeLowMethod (base name: "out-range-low-method")', function() {
      // uncomment below and update the code to test the property outRangeLowMethod
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property outRangeHighMethod (base name: "out-range-high-method")', function() {
      // uncomment below and update the code to test the property outRangeHighMethod
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property sourceRatings (base name: "source-ratings")', function() {
      // uncomment below and update the code to test the property sourceRatings
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property expression (base name: "expression")', function() {
      // uncomment below and update the code to test the property expression
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property evaluations (base name: "evaluations")', function() {
      // uncomment below and update the code to test the property evaluations
      //var instance = new CwmsDataApi.AbstractRatingMetadata();
      //expect(instance).to.be();
    });

  });

}));