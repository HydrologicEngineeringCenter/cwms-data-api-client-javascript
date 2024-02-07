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
    instance = new CwmsDataApi.RatingMetadata();
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

  describe('RatingMetadata', function() {
    it('should create an instance of RatingMetadata', function() {
      // uncomment below and update the code to test RatingMetadata
      //var instance = new CwmsDataApi.RatingMetadata();
      //expect(instance).to.be.a(CwmsDataApi.RatingMetadata);
    });

    it('should have the property ratingSpec (base name: "rating-spec")', function() {
      // uncomment below and update the code to test the property ratingSpec
      //var instance = new CwmsDataApi.RatingMetadata();
      //expect(instance).to.be();
    });

    it('should have the property ratings (base name: "ratings")', function() {
      // uncomment below and update the code to test the property ratings
      //var instance = new CwmsDataApi.RatingMetadata();
      //expect(instance).to.be();
    });

  });

}));
