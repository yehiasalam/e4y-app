import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController,ToastController,LoadingController,AlertController, Platform, Slides } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';

import { CourseService } from '../../services/course';
import { CourseStatusService } from '../../services/status';
import { FullCourse } from '../../models/course';
import { Course } from '../../models/course';
import { Profile } from '../../models/user';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Storage } from '@ionic/storage';
import { ConfigService } from '../../services/config';
import { UserService } from '../../services/users';
import { CourseStatusPage } from '../course-status/course-status';

//import { WalletService } from '../../services/wallet';

import { LazyImgComponent }   from '../components/lazy-img/lazy-img';
import { LazyLoadDirective }   from '../directives/lazy-load.directive';
import { ImgcacheService } from "../services/imageCache";

import { SafeHtmlPipe } from "../../pipes/orderby";

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage implements OnInit{

    isLoggedIn:false;
    message:string;
    fullCourse: FullCourse;
    course:Course;
    user: any;
    activateBuyPopup:boolean=false;
    browser: any;
    myCourse:boolean=false;
    myCoursestatus:number=0;
    coursetabs: string[]=[];
    courseStatusPage = CourseStatusPage;
    url_image: string =  '';
    profile: Profile;
    user_course_status: any;
    user_course_progress: any;
    user_course:any;

    @ViewChild('CourseTabs') courseTabs: Slides;
    @ViewChild('CourseSlides') courseSlides: Slides;

    public coursePriceSelected:any=[];

    public indicator = null;

    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public modalCtrl:ModalController,
      private courseService: CourseService,
      public platform: Platform,
      private config:ConfigService,
      public userService:UserService,
      private storage:Storage,
      private toastCtrl:ToastController,
      private loadingCtrl:LoadingController,
      private iab:InAppBrowser,
      //private walletService: WalletService,
      private alertCtrl: AlertController){
        this.url_image = config.settings.url;
      }

      ngOnInit(){      
        
          this.course = this.navParams.data;
          this.user = this.config.user;

          if('message' in this.navParams.data){
            this.message = this.navParams.get('message');
          }
          this.getCourse(this.course, true);

          if (this.config.isLoggedIn){

            this.userService.getProfile(this.config.user).subscribe(res=>{
                
              this.profile = res;  
              this.userService.getProfileTab(this.config.user.id, 'courses', true).subscribe( r=>{
                this.profile = this.userService.profile;
                
                let id = this.course.id
                let c = r.find(course => course.id == id );
                this.user_course_status = c.user_status;
                this.user_course_progress = c.user_progress;
                this.user_course = c;
              });
              
          });


          }


      }

      getCourse(course,force:boolean=false){
         let loading = this.loadingCtrl.create({
            content: '<img src="assets/images/bubbles.svg">',
            duration: 15000,//this.config.get_translation('loadingresults'),
            spinner:'hide',
            showBackdrop:true,

        });

        loading.present();

          this.courseService.getFullCourse(course,force).subscribe(res=>{

              this.fullCourse = res;

              loading.dismiss();
              for(var k in this.fullCourse){
                  if(k != 'course' && k != 'purchase_link' && k != 'reviews'){
                    if ((k == 'curriculum') && (!this.config.isLoggedIn)) continue;
                    this.coursetabs.push(k);
                  
                  }
              }

              // head to the curriculum part
              if (this.config.isLoggedIn) {
                setTimeout(() => {
                  this.selectedTab(1)   
                }, 300);
              };
          });


      }

      showPricing(fullCourse){
        console.log(fullCourse.course.price_html);
        if(fullCourse){
          this.activateBuyPopup = true;
        } 
      }

      closePp(){
        this.activateBuyPopup = false;
      }

      showExtras(pricing){
        if(pricing.extras){
          pricing.extras.open =!pricing.extras.open;
        }

        return pricing;
      }

    
      selectedTab(index){
          this.courseSlides.slideTo(index, 500);
      }

      onTabChanged() {
          let index = this.courseTabs.getActiveIndex();
          this.courseSlides.slideTo(index, 500);
      }

      onSlideChanged() {
          let index = this.courseSlides.getActiveIndex();
          this.courseTabs.slideTo(index,500);
      }

      openProfile(){
        let modal = this.modalCtrl.create(ProfilePage,{'isLoggedIn':this.isLoggedIn,'User':this.user});
        modal.present();
      }

      openSearch(){
          let modal = this.modalCtrl.create(SearchPage);
          modal.present();
      }

      show_course_status(){
        if(this.user_course_status == 1){
            return this.config.get_translation('start_course');
        }
        if(this.user_course_status == 2){
            return this.config.get_translation('continue_course');
        }
        if(this.user_course_status == 3){
            return this.config.get_translation('evaluation_course');
        }
        if(this.user_course_status == 4){
            return this.config.get_translation('completed_course');
        }
      }


}
