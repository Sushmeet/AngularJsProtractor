/**
 * Created by sushi on 03/02/16.
 */

describe('lets look at a calculator', function() {
    it('enters two integer values', function() {
       browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(5);
        element(by.model('operator')).sendKeys('*');
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
            toEqual('10');
    });
});