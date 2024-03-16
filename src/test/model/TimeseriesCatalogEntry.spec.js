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
    instance = new cwmsjs.TimeseriesCatalogEntry();
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

  describe('TimeseriesCatalogEntry', function() {
    it('should create an instance of TimeseriesCatalogEntry', function() {
      // uncomment below and update the code to test TimeseriesCatalogEntry
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be.a(cwmsjs.TimeseriesCatalogEntry);
    });

    it('should have the property office (base name: "office")', function() {
      // uncomment below and update the code to test the property office
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property intervalOffset (base name: "intervalOffset")', function() {
      // uncomment below and update the code to test the property intervalOffset
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property timeZone (base name: "timeZone")', function() {
      // uncomment below and update the code to test the property timeZone
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

    it('should have the property extents (base name: "extents")', function() {
      // uncomment below and update the code to test the property extents
      //var instance = new cwmsjs.TimeseriesCatalogEntry();
      //expect(instance).to.be();
    });

  });

}));
