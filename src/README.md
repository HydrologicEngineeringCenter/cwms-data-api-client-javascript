# CWMS.js internal layout/building instructions

These instructions are intended for folks that want to contribute to CWMS.js.  
The guide that follows is for people that want to help and/or get an idea of how the CWMS.js SDK works. 

If you are just looking to use CWMS.js in your project look here:
[readme](https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript/blob/master/README.md) 
or  
the [documentation](https://HydrologicEngineeringCenter.github.io/cwms-data-api-client-javascript/) instead.


## Getting Started

1. Clone CWMS.js

    ```bash
    git clone https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript.git
    cd cwms-data-api-client-javascript/
    npm install
    ```

2. **NOT IMPLEMENTED**:  Setup Authentication
Unit tests run against the CWMS Data API directly.  
You need to generate a CDA token to run the tests on your test system. The can be done **PLACEHOLDER**  


2. Run the tests with `npm test` to run the JSLint tests

    **NOT IMPLEMENTED** [Note]  
    Tests may or may not run depending on what tests you perform and the permissions you have assigned to the token


3. Developer Scripts:

    ```bash
    # Runs a browser version of the tests
    npm run test:browser 
    # Run the JSLint only
    npm run lint
    # Runs a test without actually trying to login where applicable
    npm run dry
    # Runs just the build setup/minification steps
    npm run build
    # Builds documentation for /doc folder
    npm run build-docs
    ```

## Build tools
* CWMS.js is written in ES7 code syntax using TypeScript.  
* It is transpiled to JavaScript and placed in the `dist/` folder from the `src/` folder.  
* When you install the module with npm the contents that are generated in the `/dist` folder are what you receive. 


* Comments in the source (JSDoc) are generated using [ink-docstrap](https://github.com/docstrap/docstrap).

## Source Code

### Request handling

* This library exclusively works with JSON endpoints. Currently there are no plans to work with other formats. Submit a [github issue](https://github.com/HydrologicEngineeringCenter/cwms-data-api-client-javascript/issues) if you have thoughts about this.
* Rate limiting
* Auth handling 
* Version control
  
### Base requester

The base class for a snoowrap requester is found in `snoowrap.js`. There are a few convenient helper functions to be aware of:


### Endpoint Objects
*As of CDA v2.5*
1. Timeseries
2. Location
3. Basin
4. Office
5. Unit
6. Parameter
7. TimeZone
8. Level
9. Rating
10. Blob/Clob
11. Pool


## Release Cycle

Creating your own release:

1. Pick a version number i.e. X.Y.Z
2. Prepare the package for the release:
    * Update `version` in `package.json`
    * Add a new entry to `CHANGELOG.md` describing the release
3. Run `npm test` and/or make sure latest build is passing on GitHub.
4. Push the released to GitHub (`git commit` followed by `git push`)
5. Run `npm publish` and the package will publish to NPM
7. Make a release tag with `git tag v##.##.##`
8. Push tag to GitHub with `git push --tag`
9. Update the both the documentation website and the browser source with `scripts/deploy/docs.sh`. This script pushes it to github as well. 