@echo off
setlocal EnableDelayedExpansion

if not exist "doc" mkdir "doc"

for /f %%v in ('npm info . version') do set "FULL_VERSION=v%%v"

for /f "tokens=1,2 delims=v" %%a in ("!FULL_VERSION!") do (
  set "MAJOR_VERSION=v%%a"
)

npm run compile

:: List the files one by one in the order you want them to appear in the docs
node_modules\.bin\jsdoc -c jsdoc.conf.json dist\cwms.js

:: Create bundle files, e.g. 'cwms-v1.2.3.js' and ''cwms-v1.2.3.min.js'
node_modules\.bin\browserify dist\snoowrap.js -o "doc\snoowrap-!FULL_VERSION!.js"

:: Exclude snoowrap's class names from mangling.
:: This is necessary due to a bug in Safari with ES6 classes and variable scoping.
:: https://gist.github.com/not-an-aardvark/657578882bb1e68ef3458193228d9fe7
node_modules\.bin\uglifyjs "doc\cwms-!FULL_VERSION!.js" -o "doc\cwms-!FULL_VERSION!.min.js" 

:: Create Major versioned files
copy "doc\cwms-!FULL_VERSION!.min.js" "doc\cwms-!MAJOR_VERSION!.min.js"
copy "doc\cwms-!FULL_VERSION!.js" "doc\cwms-!MAJOR_VERSION!.js"
