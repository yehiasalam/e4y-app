import { Component, OnInit, ViewChild } from '@angular/core';
import { App, Platform, NavController, MenuController,LoadingController } from 'ionic-angular';

//import { StatusBar, Splashscreen } from 'ionic-native';

import { SplashScreen } from '@ionic-native/splash-screen';
import { Intro } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { BlogPage } from '../pages/blog/blog';
import { DirectoryPage } from '../pages/directory/directory';
import { InstructorsPage } from '../pages/instructors/instructors';
import { ConfigService } from '../services/config';
import { Storage } from '@ionic/storage';
import { ImgcacheService } from '../services/imageCache';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  styles:any;
  tabsPage = TabsPage;
  intro:Intro;
  pages:any[]=[];

  rootPage: any = 'Tabs';
  loader: any;

  @ViewChild('nav') nav:NavController;
  
    constructor(private config:ConfigService,
        private platform: Platform, 
        private menuCtrl: MenuController,
        private loadingCtrl:LoadingController,
        private app:App,
        private storage:Storage,
        private imgcacheService:ImgcacheService,
        public splashScreen: SplashScreen,
        private push: Push) {


        this.presentLoading();

        platform.ready().then(() => {
            
            if(this.config.settings.rtl){
               platform.setDir('rtl', true);
            }
            
            this.storage.get('introShown').then((result) => {
                this.splashScreen.hide();
                if(result){

                    imgcacheService.initImgCache().subscribe(() => {
                      this.rootPage = TabsPage;
                      this.loader.dismiss();
                    });
                    
                    
                } else {
                    this.rootPage = Intro;
                    
                    let nav = this.app.getRootNav();
                    imgcacheService.initImgCache().subscribe(() => {
                      nav.setRoot(this.rootPage);
                      this.loader.dismiss();
                    });
                    
                }
            });

            // initialize the push notification
            let push_options: PushOptions = {
                android: {
                    senderID: "714054100116"
                },
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {}
             };
             const pushObject: PushObject = this.push.init(push_options);  
             
             pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

             pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
             
             pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));             


        });

        //Tracker
        
        this.pages =[
          { title: config.get_translation('home_menu_title'), component: TabsPage, index: 0, hide:false},
          { title: config.get_translation('directory_menu_title'), component: DirectoryPage, index: 2, hide:false},
          { title: config.get_translation('instructors_menu_title'), component: InstructorsPage, index: 3, hide:false},
          { title: config.get_translation('blog_menu_title'), component: BlogPage, index: 1, hide:false},
          { title: config.get_translation('contact_menu_title'), component: ContactPage, index: 4, hide:false},
        ];
        
    }

    ngOnInit(){
        this.config.initialize();
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            //content: "Loading..."
        });
        this.loader.present();
    }

    onLoad(page: any){
        let nav = this.app.getRootNav();

        nav.setRoot(page.component,{index:page.index});
        //nav.push(page);
        //this.app.getRootNav().push(page);
        //this.nav.push(page);
        //this.nav.setRoot(page);
        this.menuCtrl.close();
    }
}
