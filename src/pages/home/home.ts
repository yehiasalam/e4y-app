import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//import {StatusBar} from 'ionic-native';
import { StatusBar } from '@ionic-native/status-bar';
import { Content } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';

import { DirectoryPage } from '../directory/directory';
import { CoursePage } from '../course/course';

import { CourseService } from '../../services/course';
import { ConfigService } from '../../services/config';
//import { WalletService } from '../../services/wallet';

import { WishlistService } from '../../services/wishlist';

import { UserService } from '../../services/users';

import { User } from '../../models/user';
import { Course } from '../../models/course';
import { CourseCategory } from '../../models/course';
import { Quote } from '../../models/quote';

import { FixedScrollHeader } from '../../components/fixed-scroll-header/fixed-scroll-header';
import { Coursecard } from '../../components/coursecard/coursecard';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
	
	isLoggedIn: boolean = false;
	user: User;
	featured: Course[] = [];
	popular: Course[] = [];
	categories: CourseCategory[] = [];
	categoryPage = DirectoryPage;
	profilePage=ProfilePage;
	coursePage= CoursePage;
	grid: Array<Array<Course>> = [];
	animate_arrow: boolean =  false;
	quote: Quote;

	constructor(public navCtrl: NavController,
		private courseService: CourseService, 
		private modalCtrl: ModalController,
		public loadingController: LoadingController,
		public userService:UserService,
		private config:ConfigService,
		private wishlistService:WishlistService,
		public splashscreen: SplashScreen,
		public iab: InAppBrowser
		/*private walletService:WalletService*/ 
	) {
		this.splashscreen = splashscreen;
	}

	ionViewDidEnter(){
		setTimeout(() => {
			this.animate_arrow = true;	
		}, 6000);
	}

	ngOnInit() {
		console.log('waiting to be loaded');
		
		this.quote = this.getRandomQuote();

		let loading = this.loadingController.create({
            content: '<img src="assets/images/bubbles.svg">',
            duration: 15000,//this.config.get_translation('loadingresults'),
            spinner:'hide',
            showBackdrop:true,
        });

        loading.present();

		this.config.isLoading().then(res=>{
			if(res){
				this.config.track = res;
			}

			this.courseService.getFeaturedCourses().subscribe(featured =>{
				if(featured){
					this.featured = featured;
				}
			});

			this.courseService.getPopularCourses().subscribe(popular =>{
				if(popular){
					this.popular = popular;
					this.fill_grid(popular);
				}
				loading.dismiss();
				this.splashscreen.hide();
			});

			this.courseService.getAllCourseCategory().subscribe(cats =>{
				if(cats){
					this.categories = cats;
				}
			});
			
		});
    	this.wishlistService.getWishList();
	}

	fill_grid(courses: any){
		let rowNum = 0; //counter to iterate over the rows in the grid

		for (let i = 0; i < courses.length; i+=2) { //iterate courses
	  
			this.grid[rowNum] = Array(2); //declare two elements per row  
			if (courses[i]) this.grid[rowNum][0] = courses[i]; //insert image
			if (courses[i+1]) this.grid[rowNum][1] = courses[i+1];

			rowNum++; //go on to the next row
		}
	}

	getRandomQuote(){

		let min = 0,
			max = this.config.quotes_library.length - 1;
		
		return this.config.quotes_library[ this.getRandomInt(min,max) ];

	}

	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	openSearch(){
		let modal = this.modalCtrl.create(SearchPage);
    	modal.present();
	}

	gotoPrivacy(){
		let browser = this.iab.create('http://cheshmecreativechallenges.com/privacy-policy', '_system');

	}

}