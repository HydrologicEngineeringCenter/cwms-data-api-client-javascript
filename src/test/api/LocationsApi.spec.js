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
    instance = new cwmsjs.LocationsApi();
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

  describe('LocationsApi', function() {
    describe('deleteCwmsDataLocationsWithLocationId', function() {
      it('should call deleteCwmsDataLocationsWithLocationId successfully', function(done) {
        //uncomment below and update the code to test deleteCwmsDataLocationsWithLocationId
        //instance.deleteCwmsDataLocationsWithLocationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCwmsDataLocations', function() {
      it('should call getCwmsDataLocations successfully', function(done) {
        //uncomment below and update the code to test getCwmsDataLocations
        //instance.getCwmsDataLocations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCwmsDataLocationsWithLocationId', function() {
      it('should call getCwmsDataLocationsWithLocationId successfully', function(done) {
        //uncomment below and update the code to test getCwmsDataLocationsWithLocationId
        //instance.getCwmsDataLocationsWithLocationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCwmsDataLocationsWithLocationId', function() {
      it('should call patchCwmsDataLocationsWithLocationId successfully', function(done) {
        //uncomment below and update the code to test patchCwmsDataLocationsWithLocationId
        //instance.patchCwmsDataLocationsWithLocationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCwmsDataLocations', function() {
      it('should call postCwmsDataLocations successfully', function(done) {
        //uncomment below and update the code to test postCwmsDataLocations
        //instance.postCwmsDataLocations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));