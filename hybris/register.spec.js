var RegisterPage = require('./register.page.js');

describe('Register Page', function () {
    "use strict";

    var page;

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        page = RegisterPage();
    });

    it('should do register a user.', function () {

        expect(browser.getTitle()).toEqual('YaaS - SAP Hybris as a Service');

        //dv.wait(EC.visibilityOf(page.cookieText));
        //page.cookieText.getText();

        expect($('.yg-cookie-bar.ui-widget-header').getText()).toEqual('We use cookies to make using our' +
            ' websites and services easy and meaningful for you, and to better understand how they are used by' +
            ' our customers. By using our websites and services, you are agreeing to our Privacy Statement.\nx');

        $('.yg-cookie-bar__close').click();
        $('a[href="register"]').click();

        expect( dv.getCurrentUrl() ).toEqual('https://www.yaas.io/register/');

        // fill up registration form
        var email = 'nancyPickwell@gmail.com';
        $('#InputEmail1').sendKeys(email);
        $('#InputPassword1').sendKeys('Sushi123');
        $('#InputPassword2').sendKeys('Sushi123');
        $('label[for=termsAndConditionsCheckbox]').click();

        expect( $('#signupBtn').getText() ).toEqual('REGISTER');
        $('#signupBtn').click();

        $$('.success-box').then(function(list) {
            expect( list.length ).toBe(1);
            expect( list[0].getText() ).toBe('An Email has been sent to ' + email + '.' + '\nCheck your inbox to complete registration.');
        });

        dv.sleep(4000);
    })
});
