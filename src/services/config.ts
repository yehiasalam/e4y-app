import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Storage } from '@ionic/storage';

import { Quote } from '../models/quote';

import { TranslateService } from './translate';

@Injectable()
export class ConfigService{  
	
	loading:boolean;
	timestamp:number;
	lastaccess: number; //Last access datetime with website
	fetchedResources:any;
	user:any;
	isLoggedIn:boolean=false;

	homePage:any;

	baseUrl:string;
	oAuthUrl:string;

	lastCourse:any;
	environment:any;
	settings:any;

	defaultMenu:any;
	per_view:number=10;
	//translations: any;
	directoryFilters:any;

	quotes_library: Quote[];
	bgs: [string, string][];
	bg: string;
	color: string;

	/*
		IMPORTANT DO NOT TOUCH
	*/
	defaultTrack:any;
	track:any;
	trackSync:any;
	contactinfo:any;
	terms_conditions:any;
	unread_notifications_count:number=0;
	wallet:any=[];
	/*== END == */

	translate: TranslateService;

	constructor(
		private storage:Storage,
		private http:Http,
		private translate_service: TranslateService)
	{

		this.translate = translate_service;
		this.loading=true;
		this.timestamp =  Math.floor(new Date().getTime() / 1000);
		this.environment ={
			'cacheDuration':86400,
		};

		this.lastaccess = 0;
		this.storage.get('lastccess').then(res=>{
			if(res){
				this.lastaccess = res;	
			}			
		});

		this.per_view = 5;
		this.settings = {
			'version':2,
			//'url':'http://localhost/wplms/',
			//'client_id':'X8bmmV0UE1AvZbnS7Rl7pCU',
			'url':'https://cheshmecreativechallenges.com/',
			'client_id':'JUUY8FXlszqEtuI3bahWpco',
			'client_secret':'', //Fetched from API call
			'state':'', // FETCHED from Site
			'access_token':'', // FETCHED on Login 
			'registration':'app',//'app' or 'site' or false
			'login':'app',//Select from 'app' or 'site' or false
			'facebook':{
				'enable':false,
				'app_id':491338181212175
			},
			'google':{
				'enable':false,
			},
			'per_view':20,
			'force_mark_all_questions':false,
			'wallet':false,					// <<----------REQUIRES WPLMS version 3.4
			'inappbrowser_purchases':false, // <<----------REQUIRES WPLMS version 3.4
			'rtl': true,
			'units_in_inappbrowser': false,
			'lang': 'fr'
		};

		this.baseUrl = this.settings.url+'wp-json/wplms/v1/';
		this.oAuthUrl = this.settings.url+'wplmsoauth/';

		this.defaultMenu = {
			'home': 'Home',
			'about':'About',
			'courses':'Challenges',
			'instructors':'Instructors',
			'contact':'Contact'
		};
		
		this.homePage = {
			'featuredCourseSlider':1,
			'categories':1,
			'popular':1,
			'featured':1,
		};

		this.directoryFilters = {
			'categories':1,
			'instructors':1,
			'locations':1,
			'levels':1,
			'free_paid':1,
			'online_offline':0,
			'start_date':0,
		};


		/* WALLET RECHARGE : in APP PRODUCT IDS */
		
		this.wallet = [
			{'product_id':'wplms_r_50','points':50},
			{'product_id':'sample','points':50},
		];


		/* TRACKS LOADED COMPONENTS 
			STATUS : 
				0 NOT LOADED
				1 LOADED
				In array : Loaded
		*/
		this.defaultTrack = {
			'version'				:1,
			'counter'				:0,
			'user'					:0,
			'featured'				:0,// Check if there is any change in featured courses 
			'popular'				:0,// Check if there is any change in popular courses 
			'allcoursecategories'	:0,
			'allcourselocations'	:0,
			'allcourselevels'		:0,
			'allcourses'			:0,
			'allposts'				:0,
			'transactions'			:0,
			'posts'					:[],
			'dashboardCharts'       :[],
			'courses'				:[], // if loaded it exists here
			'stats'  				:0, // Check if any need to reload student statistics
			'notifications'			:0, // Check if any new notifications are added.
			'announcements'			:0, // Check if any new announcements are added for user
			'allinstructors'		:0,//track if new instructor is added in site
			'instructors'			:[], //if loaded it exists here
			'profile'				:0,
			'profiletabs'			:[],//if loaded it exists here
			'reviews'				:[],
			'course_status'			:[], //load course curriclum & statuses
			'statusitems'			:[], 
			'saved_results'			:[],
		};
		this.track = this.defaultTrack;
		this.unread_notifications_count=0;

		this.quotes_library = [
			{ quote: "ما انسان‌ها  جانشین و امانت‌دار خداوند بر زمین هستیم. ازطبیعت که از  امانت‌های خداست  با دقت مراقبت کنیم، آن را برای آیندگان محافظت کنیم. ", author: "برگرفته از سوره‌های بقره، نمل، نسا و اعراف"},
			{ quote: "همه موجودات، آسمان‌ها و زمین و جنبندگان نشانه و یادگار خداوند هستند.", author: "برگرفته از سوره شوری"},
			{ quote: "زمین را نوازش کنید و از آن برکت بگیرید؛ زیرا او مادر شماست ،مادری که به فرزندانش مهربان است. ", author: "برگرفته از توصیه‌های پیامبر اسلام"},
			{ quote: "در جهان‌بینی قرآن، هستی یک سیستم و نظام درهم تنیده است که همه اجزای آن هماهنگ و هم‌ساز هستند. ", author: ""},
			{ quote: "اگر رستاخیز هم  بر پا شد و نهالی در دست یکی از شما است ؛ اگر می‌توانید آن را بکارید.", author: "برگرفته از توصیه‌های پیامبر اسلام"},
			{ quote: " انسان در قبال آنچه به او ارزانی شده مسئول است چرا که امانت الهی است و بدین معنی نیست که او آزاد است هر گونه مایل است با آن رفتار نماید .", author: "برگرفته از توصیه‌های پیامبر اسلام"}	
		];

		this.bgs = [
			['bg-home-03', '#29534f' ],
			['bg-home-04', '#99cb34'],
			['bg-home-05', '#3aafa9' ],
			['bg-home-06', '#2b7a77'],
			['bg-home-07', '#18252b'],
			['bg-home-08', '#fb8f2d' ],
			['bg-home-09', '#bf6d23' ],
			['bg-home-10', '#8d501a'],
			['bg-home-11', '#ff912f' ],
			['bg-home-12', '#99cb34'],
			['bg-home-13', '#729926' ],
			['bg-home-14', '#55731d' ],
			['bg-home-15', '#ffe603' ],
			['bg-home-16',  '#ccb702']
		];
		let rnd = this.getRandomInt(0,this.bgs.length - 1);
		this.bg = this.bgs[rnd][0];
		this.color = this.bgs[rnd][1];

		//this.translations = 

		this.contactinfo={
			'title':'Contact Us',
			'message':'Welcome to WPLMS App contact form. This is some message which is displayed on contact page. It supports HTML as well.',
			'address':'4 Pennsylvania Plaza, New York, NY 10001, USA',
			'email':'vibethemes@gmail.com',
			'phone':'9999999999',
			'twitter':'vibethemes',
			'facebook':'vibethemes',
		};

		this.terms_conditions = 'These are app terms and conditions. Any user using this app must have\
		an account on site YouRSite.com. You must not distribute videos in this app to third parties.';
	}

	get_translation(key:string){

		if( this.translate.get(key, this.settings['lang']) ){
			return this.translate.get(key, this.settings['lang']);
		}
	}

	trackComponents(key:string){
		return this.track[key];
	}

	updateComponents(key,value){
		if(Array.isArray(this.track[key]) ){
			this.track[key].push(value);
			this.storage.set('track',this.track);
		}else{
			this.track[key]=value;
			this.storage.set('track',this.track);
		}
	}

	//Only for arrays
	removeFromTracker(key,value){
		if(Array.isArray(this.track[key])){
			if(this.track[key].length){
				if(this.track[key].indexOf(value) != -1){
					let k = this.track[key].indexOf(value);
					this.track[key].splice(k,1);
					this.storage.set('track',this.track);
				}
			}
		}
	}
	addToTracker(key,value){
		if(Array.isArray(this.track[key]) ){
			if(this.track[key].indexOf(value) == -1){
				console.log('in add to tracker array');
				this.track[key].push(value);
			}
		}else{
			console.log('in add to tracker single value');
			this.track[key] = value;
		}
		console.log(this.track);
		this.storage.set('track',this.track);
	}

	public set_settings(key,value){
		this.settings[key]=value;
		this.storage.set('settings',this.settings);
	}
	save_settings(){
		this.storage.set('settings',this.settings);
	}

	initialize(){
		this.storage.get('track').then(res=>{
			if(res){
				this.track = res;
				
			}
			this.getTracker();
		});

		this.storage.get('settings').then(res=>{
			if(res){
				this.settings = res;
			}
		});
		
		this.storage.get('user').then(res=>{
			if(res){
				this.user = res;
				if('id' in this.user){
					this.isLoggedIn = true;
					this.getTracker();
				}
			}
		});

		this.storage.get('lastcourse').then((d) => {
            this.lastCourse = d;
        });
	}

	isLoading(){
		return this.storage.get('track');
	}

	updateUser(){
		this.storage.get('user').then(res=>{
			if(res){
				this.user = res;
				if('id' in this.user){
					this.isLoggedIn = true;
				}
			}else{
				this.isLoggedIn = false;
				this.user = 0;
				this.storage.remove('user');
			}
		});
	}
	getLastCourse(){
		this.storage.get('lastcourse').then((d) => {
            this.lastCourse = d;
        });
	}
	matchObj(big:any,small:any){

		for(let i=0;i<big.length;i++){
			if(big[i].time == small.time && big[i].content == small.content){
				return true;
			}
		}
		return false;
	}

	getTracker(){
		console.log('FETCH STORED TRACKER');
		console.log(this.track);

		if(this.isLoggedIn){

			console.log('TRACKING ->'+this.isLoggedIn+' = '+this.user.id);
			console.log(this.user);

			this.http.get(`${this.baseUrl}track/`+this.user.id+`?access=`+this.lastaccess)
            .map(response =>{
            	return response.json();
            }).subscribe(res=>{
            	if(res){
            		console.log('Version compare : '+res.version+' == '+this.track.version);
            		if(res.version != this.track.version){
            			//Re-record all cached data.
            			this.defaultTrack.version  = res.version;
            			this.track = this.defaultTrack;
            		}else{
            			
            			var keys = Object.keys(res);
            			console.log('keys');
            			console.log(keys);
            			if(keys.length){
	            			for(let i=0;i<keys.length;i++){
	            				if(keys[i] in this.track){
	            					if(Array.isArray(this.track[keys[i]]) && Array.isArray(res[keys[i]])){
	            						let missing = this.track[keys[i]].filter(item => res[keys[i]].indexOf(item) < 0);
	            						
	            						this.track[keys[i]] = missing;

	            					}else{
	            						if(res[keys[i]] && keys[i] != 'version'){
	            							console.log( keys[i]+ '= '+res[keys[i]]);
	            							if(!isNaN(res[keys[i]]) && res[keys[i]] > 1){
	            								
            									this.track[keys[i]] = res[keys[i]]; //reset recorded set
	            							}else{
	            								
	            								if(Array.isArray(res[keys[i]])){
	            									let sudothis = this;
	            									res[keys[i]].map(function(r,ind){
	            										sudothis.removeFromTracker(keys[i],r);
	            										return r;
	            									});
	            								}else{
	            									console.log('track item set to 0'+'->'+this.track[keys[i]]);
	            									//Ensure Data is not corrupted by Tracker
	            									if(Array.isArray(this.track[keys[i]])){
	            										this.track[keys[i]] = [];
	            										console.log('Array.isArray track item set to 0'+'->'+this.track[keys[i]]);
	            									}else if(typeof res[keys[i]] === 'object'){
	            										let rk = Object.keys(res[keys[i]]);
	            										let sudothis = this;
	            										rk.map(function(r,ind){
		            										sudothis.removeFromTracker(keys[i],r);
		            										return r;
		            									});
	            									}else{
	            										this.track[keys[i]] = 0; //reset recorded set	
	            									}
	            								}
	            							}
	            						}

	            					}
	            				}
	            				if(keys[i] == 'updates'){
	            					this.storage.get('updates').then(storedupdates=>{
	            						if(!storedupdates){storedupdates=[];}
	            						if(res[keys[i]] && res[keys[i]].length){
	            							for(let k=0;k<res[keys[i]].length;k++){
	            								if(!this.matchObj(storedupdates,res[keys[i]][k])){
	            									storedupdates.push(res[keys[i]][k]);
	            								}
		            						}
		            						this.storage.set('updates',storedupdates);

	            						}
	            					});
	            				}
	            			}
	            			console.log(this.track);
	            			this.storage.set('track',this.track);
	            			this.storage.set('lastccess',this.timestamp);
	            			
	            		}

        			}
        			this.storage.get('updates').then(storedupdates=>{	
						if(storedupdates && storedupdates.length){
							this.unread_notifications_count = storedupdates.length;
							this.storage.get('readupdates').then(readupdates=>{
								if(readupdates){
						            this.unread_notifications_count = storedupdates.length-readupdates.length;
						        }
							});
							console.log('unread_notifications_count in config -> '+this.unread_notifications_count);
						}
					});
            	}
            });
		}else{
			console.log('TRACKING');
			
			var url = `${this.baseUrl}track/?access=`+this.lastaccess;

			if(!this.settings.client_secret.length){
				url = `${this.baseUrl}track/?client_id=`+this.settings.client_id;
			}


			this.http.get(url)
            .map(response =>{ return response.json();
            }).subscribe(res=>{
            	console.log('GET SITE TRACKER');
            	if(res){
            		if(res.version != this.track.version){
            			//Re-record all cached data.
            			this.defaultTrack.version  = res.version;
            			this.track = this.defaultTrack;

            		}else{

            			if(res.counter != this.track.counter || !res.counter){
	            			var keys = Object.keys(res);
	            			
	            			if(keys.length){
		            			for(let i=0;i<keys.length;i++){
		            				if(keys[i] in this.track){
		            					if(Array.isArray(this.track[keys[i]]) && Array.isArray( res[keys[i]])){
		            						let missing = this.track[keys[i]].filter(item => res[keys[i]].indexOf(item) < 0);
		            						this.track[keys[i]] = missing;
		            					}else{

		            						if(res[keys[i]] && keys[i] != 'version'){
		            							if(!isNaN(res[keys[i]]) && res[keys[i]] > 1){
	            									this.track[keys[i]] = res[keys[i]]; //reset recorded set
		            							}else{
		            								if(Array.isArray(res[keys[i]])){
		            									let sudothis = this;
		            									res[keys[i]].map(function(r,ind){
		            										sudothis.removeFromTracker(keys[i],r);
		            										return r;
		            									});
		            								}else{
		            									console.log('track item set to 0'+'->'+this.track[keys[i]]);
		            									//Ensure Data is not corrupted by Tracker
		            									if(Array.isArray(this.track[keys[i]])){
		            										this.track[keys[i]] = [];
		            										console.log('Array.isArray track item set to 0'+'->'+this.track[keys[i]]);
		            									}else if(typeof res[keys[i]] === 'object'){
		            										let rk = Object.keys(res[keys[i]]);
		            										let sudothis = this;
		            										rk.map(function(r,ind){
			            										sudothis.removeFromTracker(keys[i],r);
			            										return r;
			            									});
		            									}else{
		            										this.track[keys[i]] = 0; //reset recorded set	
		            									}
		            								}
		            							}
		            							
		            						}
		            					}
		            				}
		            				if(keys[i] == 'updates'){
		            					console.log('updates key');
		            					this.storage.get('updates').then(storedupdates=>{
		            						if(!storedupdates){storedupdates=[];}

            								for(let k=0;k<res[keys[i]].length;k++){
	            								if(!this.matchObj(storedupdates,res[keys[i]][k])){
	            									storedupdates.push(res[keys[i]][k]);
	            								}
		            						}
		            						this.storage.set('updates',storedupdates);
		            					});
		            				}
		            			}
		            			this.storage.set('track',this.track);
		            			this.storage.set('lastccess',this.timestamp);
		            		}
		            	}
        			}
            		
            		if('client_secret' in res){
            			console.log('Fetching client_secret');
            			this.settings.client_secret = res.client_secret;
            			this.settings.state = res.state;
            			this.save_settings();
            		}
            		
            		
	            		this.storage.get('updates').then(storedupdates=>{		            			
							if(storedupdates){
								this.unread_notifications_count = storedupdates.length;
								this.storage.get('readupdates').then(readupdates=>{
									if(readupdates){
							            this.unread_notifications_count = storedupdates.length-readupdates.length;
							        }
								});
							}
						});
					
            	}
            });
                    
		}
	}
	isString(val) { return typeof val === 'string'; }
	isArray(obj: any): boolean {return Array.isArray(obj);}


	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 * Using Math.round() will give you a non-uniform distribution!
	 */
	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
