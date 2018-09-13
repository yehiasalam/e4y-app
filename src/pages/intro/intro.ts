import { Component,ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ConfigService } from '../../services/config';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {
  @ViewChild('IntroTabs') introTabs: Slides;
  tabsPage = TabsPage;
  private config: ConfigService;

  	constructor(
  		public navCtrl: NavController,
      private conf:ConfigService,
  		private storage:Storage) {
        this.config = conf;
  	}
  ngOnInit(){
    console.log(this.config);
  }
  goToHome(){
  	this.storage.set('introShown', true);
    this.navCtrl.setRoot(this.tabsPage);
  }
  proceed(){
    let index = this.introTabs.getActiveIndex();
    index++;
    this.introTabs.slideTo(index, 500);
  }
}