// iOS Suite: Login and Logout Suite
const deepmerge = require('deepmerge')
const androidconfig = require('froth-webdriverio-framework/config/android.conf.js');

const specconfig = deepmerge.all([androidconfig, {
    specs: [[ "../android/Agent_login.js" ]]
}
]);

module.exports.config = specconfig;

