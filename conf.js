/**
 * Created by sushi on 02/02/16.
 */

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare () {
        "use strict";

        global.dv = browser.driver;
        global.EC = protractor.ExpectedConditions;
        browser.driver.manage().window().maximize();
        dv.manage().timeouts().implicitlyWait(10000);
    },
    suites: {
        helloangular: 'helloangular/calculator.spec.js',
        hybris: 'hybris/*.spec.js'
    }
};
