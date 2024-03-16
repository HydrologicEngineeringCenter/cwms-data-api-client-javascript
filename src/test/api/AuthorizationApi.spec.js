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
    instance = new cwmsjs.AuthorizationApi();
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

  describe('AuthorizationApi', function() {
    describe('deleteCwmsDataAuthKeysWithKeyName', function() {
      it('should call deleteCwmsDataAuthKeysWithKeyName successfully', function(done) {
        //uncomment below and update the code to test deleteCwmsDataAuthKeysWithKeyName
        //instance.deleteCwmsDataAuthKeysWithKeyName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCwmsDataAuthKeys', function() {
      it('should call getCwmsDataAuthKeys successfully', function(done) {
        //uncomment below and update the code to test getCwmsDataAuthKeys
        //instance.getCwmsDataAuthKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCwmsDataAuthKeysWithKeyName', function() {
      it('should call getCwmsDataAuthKeysWithKeyName successfully', function(done) {
        //uncomment below and update the code to test getCwmsDataAuthKeysWithKeyName
        //instance.getCwmsDataAuthKeysWithKeyName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCwmsDataAuthKeys', function() {
      it('should call postCwmsDataAuthKeys successfully', function(done) {
        //uncomment below and update the code to test postCwmsDataAuthKeys
        //instance.postCwmsDataAuthKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
