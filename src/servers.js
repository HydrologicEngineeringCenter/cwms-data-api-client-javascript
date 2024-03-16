"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.server4 = exports.server3 = exports.server2 = exports.server1 = exports.ServerConfiguration = void 0;
var http_1 = require("./http/http");
/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
var ServerConfiguration = /** @class */ (function () {
    function ServerConfiguration(url, variableConfiguration) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    /**
     * Sets the value of the variables of this server. Variables are included in
     * the `url` of this ServerConfiguration in the form `{variableName}`
     *
     * @param variableConfiguration a partial variable configuration for the
     * variables contained in the url
     */
    ServerConfiguration.prototype.setVariables = function (variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    };
    ServerConfiguration.prototype.getConfiguration = function () {
        return this.variableConfiguration;
    };
    ServerConfiguration.prototype.getUrl = function () {
        var replacedUrl = this.url;
        for (var key in this.variableConfiguration) {
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    };
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */
    ServerConfiguration.prototype.makeRequestContext = function (endpoint, httpMethod) {
        return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
    };
    return ServerConfiguration;
}());
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration("https://waters.usace.army.mil", {});
exports.server2 = new ServerConfiguration("https://cwms-data.usace.army.mil", {});
exports.server3 = new ServerConfiguration("https://cwms.sec.usace.army.mil", {});
exports.server4 = new ServerConfiguration("https://cwms-data.usace.army.mil", {});
exports.servers = [exports.server1, exports.server2, exports.server3, exports.server4];
