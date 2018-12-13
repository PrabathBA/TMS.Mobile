import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public inAppBrowser: InAppBrowser) {
    const options: InAppBrowserOptions = {};
    this.inAppBrowser.create('https://www.google.com','_self',options);
  }

}
