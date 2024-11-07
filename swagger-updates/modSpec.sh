#!/usr/bin/env bash

# Add default servers to spec
npx node-jq '.servers = inputs.servers' cwms-swagger-raw.json swagger-updates/servers.json |

# Add BaseRatingMetadata to fix typing issues
npx node-jq --slurpfile base swagger-updates/BaseRatingMetadata.json '.components.schemas.BaseRatingMetadata = $base[0].BaseRatingMetadata' |
sed 's/"\$ref": "#\/components\/schemas\/AbstractRatingMetadata"/"\$ref": "#\/components\/schemas\/BaseRatingMetadata"/g' |

# Write to file
cat > cwms-swagger-mod.json