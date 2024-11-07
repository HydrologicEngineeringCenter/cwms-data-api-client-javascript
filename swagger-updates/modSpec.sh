#!/usr/bin/env bash

# Add default servers to spec
npx node-jq '.servers = inputs.servers' cwms-swagger-raw.json swagger-updates/servers.json |

# Write to file
cat > cwms-swagger-mod.json