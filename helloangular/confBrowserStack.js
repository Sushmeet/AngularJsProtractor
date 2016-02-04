/**
 * Created by sushi on 02/02/16.
 */

exports.config = {

    capabilities : {
        'browserName' : 'firefox',
        'browserstack.user' : 'raguyad1',
        'browserstack.key' : 'YVJWsyg57sxqztqqgVyp'
    },

    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: ['todo-spec.js']
};