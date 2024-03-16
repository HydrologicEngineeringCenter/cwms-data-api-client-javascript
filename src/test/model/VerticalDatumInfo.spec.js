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
    factory(root.expect, root.cwmsjs);
  }
}(this, function(expect, cwmsjs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new cwmsjs.VerticalDatumInfo();
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

  describe('VerticalDatumInfo', function() {
    it('should create an instance of VerticalDatumInfo', function() {
      // uncomment below and update the code to test VerticalDatumInfo
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be.a(cwmsjs.VerticalDatumInfo);
    });

    it('should have the property office (base name: "office")', function() {
      // uncomment below and update the code to test the property office
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

    it('should have the property nativeDatum (base name: "native-datum")', function() {
      // uncomment below and update the code to test the property nativeDatum
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

    it('should have the property elevation (base name: "elevation")', function() {
      // uncomment below and update the code to test the property elevation
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

    it('should have the property offsets (base name: "offsets")', function() {
      // uncomment below and update the code to test the property offsets
      //var instance = new cwmsjs.VerticalDatumInfo();
      //expect(instance).to.be();
    });

  });

}));
