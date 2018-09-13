import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config';
import { CoursePage } from '../../pages/course/course';
import { WishlistService } from '../../services/wishlist';
import { isPresent } from 'ionic-angular/umd/util/util';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'coursecard',
  templateUrl: 'coursecard.html'
})
export class Coursecard implements OnInit{

    coursePage= CoursePage;
    active:string='';
	@Input('course') course;
	url_image: string =  '';
	private config: ConfigService;

    constructor(
		private wishlistService:WishlistService,
		private conf:ConfigService,
		public alertCtrl: AlertController,
		public navCtrl: NavController) {
			this.config = conf;
			this.url_image = conf.settings.url;		
		}

    ngOnInit(){
    	if(this.wishlistService.checkInWishList(this.course)){
    		
    		this.active = 'active';
    	}else{
    		this.active = '';
		}
		
		var now = (new Date).getTime() / 1000;
		this.course.locked = ((this.course.start_date === false) || 
							(this.course.start_date > now));

    }

    addToWishlist(){
    	console.log('clicked -'+this.course.name);
    	if(this.active == 'active'){
    		this.wishlistService.removeFromWishList(this.course);
    		this.active='';
    	}else{
    		this.wishlistService.addToWishlist(this.course);
    		this.active='active';
    	}
	}
	
	show_course( course ){

		if (this.course.locked) {
			let alert = this.alertCtrl.create({
				title: this.config.get_translation('Course Locked'),
				subTitle: this.config.get_translation('This course has not started yet. Please check back later.'),
				buttons: [this.config.get_translation('ok')]
			  });	
	
			  alert.present();
		} else {
			this.navCtrl.push(this.coursePage, course);	
		}
	}



}
