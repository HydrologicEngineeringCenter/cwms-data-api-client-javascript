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
    instance = new cwmsjs.Stream();
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
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be.a(cwmsjs.Stream);
    });

    it('should have the property officeId (base name: "office-id")', function() {
      // uncomment below and update the code to test the property officeId
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamName (base name: "stream-name")', function() {
      // uncomment below and update the code to test the property streamName
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property tributaries (base name: "tributaries")', function() {
      // uncomment below and update the code to test the property tributaries
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamReaches (base name: "stream-reaches")', function() {
      // uncomment below and update the code to test the property streamReaches
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property divertingStreamId (base name: "diverting-stream-id")', function() {
      // uncomment below and update the code to test the property divertingStreamId
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property receivingStreamId (base name: "receiving-stream-id")', function() {
      // uncomment below and update the code to test the property receivingStreamId
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property confluenceBank (base name: "confluence-bank")', function() {
      // uncomment below and update the code to test the property confluenceBank
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property diversionBank (base name: "diversion-bank")', function() {
      // uncomment below and update the code to test the property diversionBank
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamLength (base name: "stream-length")', function() {
      // uncomment below and update the code to test the property streamLength
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property confluenceStation (base name: "confluence-station")', function() {
      // uncomment below and update the code to test the property confluenceStation
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property diversionStation (base name: "diversion-station")', function() {
      // uncomment below and update the code to test the property diversionStation
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property streamLocations (base name: "stream-locations")', function() {
      // uncomment below and update the code to test the property streamLocations
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

    it('should have the property averageSlope (base name: "average-slope")', function() {
      // uncomment below and update the code to test the property averageSlope
      //var instance = new cwmsjs.Stream();
      //expect(instance).to.be();
    });

  });

}));
