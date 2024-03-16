"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.ApiKeyAuthentication = exports.CwmsAAACacAuthAuthentication = void 0;
/**
 * Applies apiKey authentication to the request context.
 */
var CwmsAAACacAuthAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function CwmsAAACacAuthAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    CwmsAAACacAuthAuthentication.prototype.getName = function () {
        return "CwmsAAACacAuth";
    };
    CwmsAAACacAuthAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.addCookie("JSESSIONIDSSO", this.apiKey);
    };
    return CwmsAAACacAuthAuthentication;
}());
exports.CwmsAAACacAuthAuthentication = CwmsAAACacAuthAuthentication;
/**
 * Applies apiKey authentication to the request context.
 */
var ApiKeyAuthentication = /** @class */ (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function ApiKeyAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    ApiKeyAuthentication.prototype.getName = function () {
        return "ApiKey";
    };
    ApiKeyAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("Authorization", this.apiKey);
    };
    return ApiKeyAuthentication;
}());
exports.ApiKeyAuthentication = ApiKeyAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["CwmsAAACacAuth"]) {
        authMethods["CwmsAAACacAuth"] = new CwmsAAACacAuthAuthentication(config["CwmsAAACacAuth"]);
    }
    if (config["ApiKey"]) {
        authMethods["ApiKey"] = new ApiKeyAuthentication(config["ApiKey"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
