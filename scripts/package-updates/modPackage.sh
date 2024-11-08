#!/usr/bin/env bash

# Add any manual package.json updates from updates.json
npx node-jq '. * input' cwmsjs/package.json scripts/package-updates/updates.json |

# Copy selected fields from root package.json
npx node-jq --slurpfile root package.json \
'. * {author: $root[0].author, generatorVersion: $root[0].version, keywords: $root[0].keywords, repository: $root[0].repository}' |

# Write to file
cat > temp.json
mv temp.json cwmsjs/package.json