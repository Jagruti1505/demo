// iOS Suite: Login and Logout Suite
const deepmerge = require('deepmerge')
const androidconfig = require('froth-webdriverio-framework/config/android.conf.js');

const specconfig = deepmerge.all([androidconfig, {
    specs: [[ "../android/testdata for web001.js" ]]
}
]);

module.exports.config = specconfig;

iyyyuyyuyuyu