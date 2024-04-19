const path = require('path');

module.exports = {
    entry: './dist/index.js', 
    output: {
        filename: 'bundle.js', // This will be the bundled file
        path: path.resolve(__dirname, 'dist'), // Output directory
        library: 'cwmsjs', 
        libraryTarget: 'umd' 
    },
    mode: 'production' 
};