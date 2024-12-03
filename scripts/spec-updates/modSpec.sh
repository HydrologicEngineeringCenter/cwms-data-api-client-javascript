#!/usr/bin/env bash

# Set date variable for use in version
printf -v date '%(%Y.%m.%d)T'

# Add default servers to spec
npx node-jq '.servers = inputs.servers' cwms-swagger-raw.json scripts/spec-updates/servers.json |

# Write version as genVer-todaysDate
# This will be used until CDA itself exposes an official CalVer version
npx node-jq --arg date "$date" --slurpfile root package.json '.info.version = ($root[0].version + "-" + $date)' |

# Add BaseRatingMetadata to fix typing issues
npx node-jq --slurpfile base scripts/spec-updates/BaseRatingMetadata.json '.components.schemas.BaseRatingMetadata = $base[0].BaseRatingMetadata' |
sed 's/"\$ref": "#\/components\/schemas\/AbstractRatingMetadata"/"\$ref": "#\/components\/schemas\/BaseRatingMetadata"/g' |

# Fix typing of TimeSeries response values
npx node-jq --slurpfile tsItems scripts/spec-updates/tsArrayItems.json '.components.schemas.TimeSeries.properties.values.items.items = $tsItems[0].items' |

# Remove uniqueItems designations (is bugged in generator)
npx node-jq 'del(.. | .uniqueItems?)' |

# Remove "CwmsData" from method names
sed -r 's/"(get|post|patch|put|delete)CwmsData(\w*)"/"\1\2"/g' |

# Standardize the casing of TimeSeries in method names
sed -r 's/"(get|post|patch|put|delete)Timeseries(\w*)"/"\1TimeSeries\2"/g' |

# Fix casing of "Timeseries Groups"
sed -r 's/"Timeseries Groups"/"TimeSeries Groups"/g' |

# Write to file
cat > cwms-swagger-mod.json