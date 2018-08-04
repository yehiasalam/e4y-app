import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device'; 

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { CourseStatusPage } from '../course-status/course-status';
import { ProfilePage } from '../profile/profile';
import { DirectoryPage } from '../directory/directory';
import { WalletPage } from '../wallet/wallet';

import { WishlistPage } from '../wishlist/wishlist';
import { UpdatesPage } from '../updates/updates';
import { ConfigService } from '../../services/config';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  myIndex:number;
  home: any = HomePage;
  profileTab: any = ProfilePage;
  courseStatus: any = CourseStatusPage;
  stats: any = ContactPage;
  wishlist: any = WishlistPage;
  directoryPage: any = DirectoryPage;
  updates:any = UpdatesPage;
  wallet:any =WalletPage;
  color_tab: string = 'transparent';

  page:any;
  user: any;
  userdata: any;
  coursetatusdata: any;

  constructor(
    private nav: NavController, 
    private navParams: NavParams,
    private config:ConfigService,
    private app:App,
    private storage:Storage,
    private device: Device,
    private iab: InAppBrowser,
    private appAvailability: AppAvailability) {
    
    this.myIndex = 0;
    if (navParams.data.index){
      this.myIndex = navParams.data.index;
    }

    this.device = device;
    this.iab = iab;
    this.appAvailability = appAvailability;

    this.app.viewDidEnter.subscribe((evt) => {
      // this is a super retarded way to identify the curret view
      // figure something else later
      if (evt.instance.hasOwnProperty('currentTab') ){ 
        console.log('Entered Profile Tba');
        this.color_tab = 'secondary';
      } else if ( evt.instance.hasOwnProperty('showSpinner') ){
        // do nothing, keep same color
      } else {
        this.color_tab = 'transparent';
      }
      
   });

  }

  twitter(){
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', 'bbc');
  }

  instagram(){
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', 'bbc');
  }

  email(){
    let browser = this.iab.create('mailto:hello@e4y.org.uk?subject=Hi there', '_system');
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.iab.create(httpUrl + username, '_system');
      return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
        let browser = this.iab.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.iab.create(httpUrl + username, '_system');
      }
    );
  }

}
