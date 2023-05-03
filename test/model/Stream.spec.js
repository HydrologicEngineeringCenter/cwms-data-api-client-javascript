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
    instance = new CwmsRadar.Stream();
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

  describe('Stream', function() {
    it('should create an instance of Stream', function() {
      // uncomment below and update the code to test Stream
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be.a(CwmsRadar.Stream);
    });

    it('should have the property streamName (base name: "streamName")', function() {
      // uncomment below and update the code to test the property streamName
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property tributaries (base name: "tributaries")', function() {
      // uncomment below and update the code to test the property tributaries
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamReaches (base name: "streamReaches")', function() {
      // uncomment below and update the code to test the property streamReaches
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property divertingStreamId (base name: "divertingStreamId")', function() {
      // uncomment below and update the code to test the property divertingStreamId
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property receivingStreamId (base name: "receivingStreamId")', function() {
      // uncomment below and update the code to test the property receivingStreamId
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property confluenceBank (base name: "confluenceBank")', function() {
      // uncomment below and update the code to test the property confluenceBank
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property diversionBank (base name: "diversionBank")', function() {
      // uncomment below and update the code to test the property diversionBank
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamLength (base name: "streamLength")', function() {
      // uncomment below and update the code to test the property streamLength
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property confluenceStation (base name: "confluenceStation")', function() {
      // uncomment below and update the code to test the property confluenceStation
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property diversionStation (base name: "diversionStation")', function() {
      // uncomment below and update the code to test the property diversionStation
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamLocations (base name: "streamLocations")', function() {
      // uncomment below and update the code to test the property streamLocations
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

    it('should have the property averageSlope (base name: "averageSlope")', function() {
      // uncomment below and update the code to test the property averageSlope
      //var instance = new CwmsRadar.Stream();
      //expect(instance).to.be();
    });

  });

}));
