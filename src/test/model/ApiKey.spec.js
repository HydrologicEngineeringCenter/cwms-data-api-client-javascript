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
    instance = new cwmsjs.ApiKey();
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

  describe('ApiKey', function() {
    it('should create an instance of ApiKey', function() {
      // uncomment below and update the code to test ApiKey
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be.a(cwmsjs.ApiKey);
    });

    it('should have the property userId (base name: "user-id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property keyName (base name: "key-name")', function() {
      // uncomment below and update the code to test the property keyName
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property apiKey (base name: "api-key")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instance = new cwmsjs.ApiKey();
      //expect(instance).to.be();
    });

  });

}));
