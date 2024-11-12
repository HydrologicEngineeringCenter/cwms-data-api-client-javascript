#!/usr/bin/env bash

# Add default servers to spec
npx node-jq '.servers = inputs.servers' cwms-swagger-raw.json scripts/spec-updates/servers.json |

# Add BaseRatingMetadata to fix typing issues
npx node-jq --slurpfile base scripts/spec-updates/BaseRatingMetadata.json '.components.schemas.BaseRatingMetadata = $base[0].BaseRatingMetadata' |
sed 's/"\$ref": "#\/components\/schemas\/AbstractRatingMetadata"/"\$ref": "#\/components\/schemas\/BaseRatingMetadata"/g' |

# Fix typing of TimeSeries response values
npx node-jq --slurpfile tsItems scripts/spec-updates/tsArrayItems.json '.components.schemas.TimeSeries.properties.values.items.items = $tsItems[0].items' |

# Remove "CwmsData" from method names
sed -r 's/"(get|post|patch|put|delete)CwmsData(\w*)"/"\1\2"/g' |

# Standardize the casing of TimeSeries in method names
sed -r 's/"(get|post|patch|put|delete)Timeseries(\w*)"/"\1TimeSeries\2"/g' |

# Fix casing of "Timeseries Groups"
sed -r 's/"Timeseries Groups"/"TimeSeries Groups"/g' |

# Write to file
cat > cwms-swagger-mod.json