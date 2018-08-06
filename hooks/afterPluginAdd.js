module.exports = function (ctx) {
    var execSync = require('child_process').execSync;

    var cordovaCLI = "cordova";
    try {
        execSync(cordovaCLI);
    } catch (e) {
        try {
            cordovaCLI = "phonegap";
            execSync(cordovaCLI);
        } catch (e) {
            deferral.reject("An error occured. Please ensure that either the Cordova or PhoneGap CLI is installed.");
        }
    }
};
