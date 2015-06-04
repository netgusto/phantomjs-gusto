var os = require('os');
var fs = require('fs');
var path = require('path');

module.exports = {
    build: function() {
        var rootdir = __dirname;
        var version = '2.0.0';
        var system = os.platform() + '-' + os.arch();

        var binpath = path.join(rootdir, 'phantomjs-2.0.0-' + system, 'bin', 'phantomjs');

        if(fs.existsSync(binpath)) {
            return {
                system: system,
                path: binpath,
                version: version
            };
        } else {
            throw new Error('No phantomjs build available for your system (%s).', build);
        }
    }
};
