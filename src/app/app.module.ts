import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpModule} from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
//import { CacheModule } from "ionic-cache"; 
//import { Transfer } from '@ionic-native/transfer';

import { LazyImgComponent }   from '../components/lazy-img/lazy-img';
import { LazyLoadDirective }   from '../directives/lazy-load.directive';
import { PressDirective }   from '../directives/longPress.directive';
import { PinchZoomDirective } from '../directives/pinch-zoom.directive';
import { BackgroundImageDirective }   from '../directives/background-image.directive';
import { ColorDirective }   from '../directives/color.directive';

import { ImgcacheService } from "../services/imageCache";

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
//import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { File } from '@ionic-native/file';
//import { PhotoViewer } from '@ionic-native/photo-viewer';

//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//End Social Logins

import { Intro } from '../pages/intro/intro';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { BlogPage } from '../pages/blog/blog';
import { PostPage } from '../pages/post/post';
import { BlogService } from '../services/blog';
import { TranslateService } from '../services/translate';

import { UpdatesPage } from '../pages/updates/updates';
import { WishlistPage } from '../pages/wishlist/wishlist';
//import { WalletPage } from '../pages/wallet/wallet';

import { CoursePage } from '../pages/course/course';
import { CourseStatusPage } from '../pages/course-status/course-status';
import { ReviewCoursePage } from '../pages/reviewcourse/reviewcourse';

import { TabsPage } from '../pages/tabs/tabs';

import { ProfilePage } from '../pages/profile/profile';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { SearchPage } from '../pages/search/search';
import { DirectoryPage } from '../pages/directory/directory';
import { InstructorsPage } from '../pages/instructors/instructors';
import { InstructorPage } from '../pages/instructor/instructor';
import { ResultPage } from '../pages/result/result';


import { ElasticHeader } from '../components/elastic-header/elastic-header';
import { FixedScrollHeader } from '../components/fixed-scroll-header/fixed-scroll-header';
import { StarRatingComponent } from '../components/star-rating/star-rating';
import { AvatarScrollZoomout } from '../components/avatarscrollzoomout/avatarscrollzoomout';
import { CallbackPipe } from '../components/pipefilters';
import { OrderPipe } from '../pipes/orderby';
import { SafeHtmlPipe } from '../pipes/orderby';
import { SafePipe } from '../pipes/orderby';

import { Coursecard } from '../components/coursecard/coursecard';
import { Courseblock } from '../components/courseblock/courseblock';
import { InstructorBlock } from '../components/instructorblock/instructorblock';



import { HomePage } from '../pages/home/home';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { FriendlytimeComponent } from '../components/friendlytime/friendlytime';
import { QuestionComponent } from '../components/question/question';
import { TimerComponent } from '../components/timer/timer';
import { MatchAnswers } from '../components/match/match';
import { Fillblank } from '../components/fillblank/fillblank';
import { Select } from '../components/select/select';
import { AbsoluteDrag } from '../components/absolute-drag/absolute-drag';

import { CourseService } from '../services/course';
import { AuthenticationService } from '../services/authentication';


import { UserService } from '../services/users';
import { ConfigService } from '../services/config';
import { CourseStatusService } from '../services/status';
import { QuizService } from '../services/quiz';
import { ActivityService } from '../services/activity';
import { UpdatesService } from '../services/updates';
import { WishlistService } from '../services/wishlist';
//import { WalletService } from '../services/wallet';

import { DragulaModule,DragulaService} from "../../node_modules/ng2-dragula/ng2-dragula"

import {enableProdMode} from '@angular/core';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

// Required for push notifications
import { Push } from '@ionic-native/push';

// These are all imports required for Pro Client with Monitoring & Deploy
import { Pro } from '@ionic/pro';
import { Injectable, Injector } from '@angular/core';

Pro.init('703b839f', {
  appVersion: '1.0.0'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    Intro,
    AboutPage,
    BlogPage,
    PostPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    SearchPage,
    DirectoryPage,
    InstructorsPage,
    InstructorPage,
    ResultPage,
    CoursePage,
    CourseStatusPage,
    ReviewCoursePage,
    StarRatingComponent,
    ElasticHeader,
    FixedScrollHeader,
    AvatarScrollZoomout,
    CallbackPipe,
    OrderPipe,
    SafeHtmlPipe,
    SafePipe,
    ProgressBarComponent,
    FriendlytimeComponent,
    QuestionComponent,
    TimerComponent,
    MatchAnswers,
    Fillblank,
    Select,
    UpdatesPage,
    WishlistPage,
    //WalletPage,
    Coursecard,
    Courseblock,
    InstructorBlock,
    LazyImgComponent,
    LazyLoadDirective,
    PressDirective,
    AbsoluteDrag,
    PinchZoomDirective,
    BackgroundImageDirective,
    ColorDirective
  ],
  imports: [
    DragulaModule,
    BrowserModule,
    HttpModule,
    //CacheModule.forRoot(),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Intro,
    AboutPage,
    BlogPage,
    PostPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    DirectoryPage,
    InstructorsPage,
    InstructorPage,
    SearchPage,
    CoursePage,
    CourseStatusPage,
    ResultPage,
    ReviewCoursePage,
    UpdatesPage,
    WishlistPage,
    //WalletPage,
    LazyImgComponent
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  DragulaService,
  InAppBrowser,
  AppAvailability,
  //InAppPurchase,
  Camera,
  Device,
  File,
  //Facebook,
  //GooglePlus,
  //Transfer,
  Storage,//PhotoViewer,
  Push,
  ConfigService,
  AuthenticationService,
  UserService,
  CourseService,
  CourseStatusService,
  QuizService,
  ActivityService,
  UpdatesService, 
  WishlistService,
  //WalletService,
  ImgcacheService,
  BlogService,
  TranslateService,
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
