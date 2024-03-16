import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class CwmsAAACacAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "CwmsAAACacAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.addCookie("JSESSIONIDSSO", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class ApiKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "ApiKey";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "CwmsAAACacAuth"?: SecurityAuthentication,
    "ApiKey"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "CwmsAAACacAuth"?: ApiKeyConfiguration,
    "ApiKey"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["CwmsAAACacAuth"]) {
        authMethods["CwmsAAACacAuth"] = new CwmsAAACacAuthAuthentication(
            config["CwmsAAACacAuth"]
        );
    }

    if (config["ApiKey"]) {
        authMethods["ApiKey"] = new ApiKeyAuthentication(
            config["ApiKey"]
        );
    }

    return authMethods;
}