@REM Run scripts from windows
docker run --rm -v %cd%:/scripts -w /scripts node:lts bash -c "npm install -g node-jq && npm run buildSpec"