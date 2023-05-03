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
    instance = new CwmsRadar.RatingTemplate();
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

  describe('RatingTemplate', function() {
    it('should create an instance of RatingTemplate', function() {
      // uncomment below and update the code to test RatingTemplate
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be.a(CwmsRadar.RatingTemplate);
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property dependentParameter (base name: "dependent-parameter")', function() {
      // uncomment below and update the code to test the property dependentParameter
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property independentParameterSpecs (base name: "independent-parameter-specs")', function() {
      // uncomment below and update the code to test the property independentParameterSpecs
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

    it('should have the property ratingIds (base name: "rating-ids")', function() {
      // uncomment below and update the code to test the property ratingIds
      //var instance = new CwmsRadar.RatingTemplate();
      //expect(instance).to.be();
    });

  });

}));
