/**
 * Created by sushi on 2016-05-14.
 */
// "use strict";

var RegisterPage = function () {
    browser.get(RegisterPage.pageUrl);

    this.cookieText = $('.yg-cookie-bar.ui-widget-header');
   // this.cookieBar = $('.yg-cookie-bar__close');
   // this.cookieBar = element(by.css('.yg-cookie-bar__close'));


  //  this.registerForFree = $('a[href="register"]');
   // this.registerButton = $('.btn.btn-default');
};

RegisterPage.pageUrl = 'https://www.yaas.io/';

module.exports = RegisterPage;