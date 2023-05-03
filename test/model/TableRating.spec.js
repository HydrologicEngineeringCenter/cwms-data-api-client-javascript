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
    instance = new CwmsRadar.TableRating();
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

  describe('TableRating', function() {
    it('should create an instance of TableRating', function() {
      // uncomment below and update the code to test TableRating
      //var instance = new CwmsRadar.TableRating();
      //expect(instance).to.be.a(CwmsRadar.TableRating);
    });

    it('should have the property inRangeMethod (base name: "in-range-method")', function() {
      // uncomment below and update the code to test the property inRangeMethod
      //var instance = new CwmsRadar.TableRating();
      //expect(instance).to.be();
    });

    it('should have the property outRangeLowMethod (base name: "out-range-low-method")', function() {
      // uncomment below and update the code to test the property outRangeLowMethod
      //var instance = new CwmsRadar.TableRating();
      //expect(instance).to.be();
    });

    it('should have the property outRangeHighMethod (base name: "out-range-high-method")', function() {
      // uncomment below and update the code to test the property outRangeHighMethod
      //var instance = new CwmsRadar.TableRating();
      //expect(instance).to.be();
    });

  });

}));
