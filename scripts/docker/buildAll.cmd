@REM runs all scripts start to finish, using docker where windows might be an issue
echo Fetching and Manipulating spec...
.\scripts\docker\buildSpec.cmd && npm run openapi && .\scripts\docker\runPkg.cmd && cd cwmsjs && npm install && npm run build && cd ..
echo Done.
