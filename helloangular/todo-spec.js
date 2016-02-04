/**
 * Created by sushi on 02/02/16.
 */
describe ('angularjs goes to the myvmfix.com page',function() {

    var eulaErrorId = element(by.id('EulaAcceptValidator'));

    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

    it ('should go to the myvmfix page', function() {
        browser.get('http://myvmfix.com');
        expect(browser.getTitle()).toEqual('Get Help Now');
       // element(by.id('EulaAccept').select());
        element(by.linkText('Download123'))
       // expect(eulaErrorId.getText()).toEqual('Please accept the EULA, Privacy Policy and the Terms of Service by putting a check in the box above.')
    });

})