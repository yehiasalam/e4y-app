import { Injectable } from '@angular/core';

@Injectable()
export class TranslateService {

    private en: any;
    private fa: any;

    constructor() { 
        this.en = {
			'Available Courses': 'Available Challenges',
			'Continue your 7 Week Challenge': 'Continue your 7 Week Challenge',
			'Instructor': 'Instructor',	
			'login_description': 'Join our 7 week challenge and learn creative forms of expressions, from media editing to storytelling.',

			'register_thank_you': 'Thanks for your interest in joining the program. We will get back to you shortly by email with your approval status.',
			'register_button_label': 'Join the Program',

			'home_title':'Learning Journey',
			'home_subtitle':'Featured Items',
			'start_course': 'Start Course',
			'search_title':'Searching..',
			'continue_course': 'Continue Course',
			'completed_course': 'Completed',
			'expired_course': 'Expired',
			'evaluation_course':'Under Evaluation',
			'no_reviews':'No reviews found for this challenge.',
			'year': 'year',
			'years': 'years',
			'month': 'month',
			'months': 'months',
			'week':'week',
			'weeks':'weeks',
			'day':'day',
			'days':'days',
			'hour':'hour',
			'hours':'hours',
			'minute':'minute',
			'minutes':'minutes',
			'second':'second',
			'seconds':'seconds',
			'expired':'expired',
			'completed':'completed',
			'start_quiz':'Start Quiz',
			'save_quiz':'Save Quiz',
			'submit_quiz':'Submit Quiz',
			'marks': 'Marks',
			'marks_obtained':'Marks obtained',
			'max_marks':'Maximum Marks',
			'true':'TRUE',
			'false':'FALSE',
			'checkanswer':'Check Answer',
			'score':'SCORE',
			'progress': 'PROGRESS',
			'time': 'TIME',
			'filter_options':'FILTER OPTIONS',
			'sort_options':'SORT OPTIONS',
			'popular':'Popular',
			'recent':'Recent',
			'alphabetical':'Alphabetical',
			'rated':'Highest Rated',
			'start_date':'Upcoming',
			'okay':'OKAY',
			'dismiss':'DISMISS',
			'select_category':'Select Category',
			'select_location':'Select Location',
			'select_level':'Select Level',
			'select_instructor':'Select Instructor',
			'free_paid':'Select Challenge price',
			'price':'Price',
			'apply_filters':'Apply Filters',
			'close':'Close',
			'not_found':'No challenges found matching your criteria',
			'no_courses':'No Challenges !',
			'course_directory_title':'All Challenges',
			'course_directory_sub_title':'Challenges Directory',
			'all':'All',
			'all_free':'Free',
			'all_paid':'Paid',
			'select_online_offline':'Select Challenge type',
			'online':'Online',
			'offline':'Offline',
			'after_start_date':'Starts after date',
			'before_start_date':'Starts before date',
			'instructors_page_title':'All Instructors',
			'instructors_page_description':'Instructor Directory',
			'no_instructors':'No Instructors found',
			'get_all_course_by_instructor':' View all Challenges by Instructor ',
			'profile':'Profile',
			'about':'About',
			'courses':'Challenges',
			'marked_answer':'Marked Answer',
			'correct_answer':'Correct Answer',
			'explanation': 'Explanation',
			'awaiting_results':'Awaiting Quiz Results',
			'quiz_results':'Quiz Result',
			'retake_quiz':'Retake Quiz',
			'quiz_start':'Quiz Started',
			'quiz_start_content':'You started quiz',
			'quiz_submit':'Quiz submitted',
			'quiz_submit_content':'You submitted quiz',
			'quiz_evaluate':'Quiz evaluated',
			'quiz_evaluate_content':'Quiz Evaluated',
			'certificate':'Certificate',
			'badge':'Badge',
			'no_notification_found':'No notifications found !',
			'no_activity_found' :' No Activity found !',
			'back_to_course':'Back to Challenge',
			'review_course':'Review Challenge',
			'finish_course':'Finish Challenge',
			'login_heading':'Login',
			'login_title':'Get Started',
			'login_content':'Your challenges will be available on all of your devices',
			'login_have_account':'Already have an account',
			'login_signin':'Sign In',
			'login_signup':'Sign Up',
			'login_terms_conditions':'Terms and Conditions',
			'signin_username':'Username or Email',
			'signin_password':'Password',
			'signup_username':'Username',
			'signup_email':'Email',
			'signup_password':'Password',
			'signup':'Sign Up',
			'login_back':'Back to login',
			'post_review':'Post a review for this challenge',
			'review_title':'Title for Review',
			'review_rating': 'Rating for this review',
			'review_content': 'Content for Review',
			'submit_review': 'Post Review',
			'rating1star':'Bad Challenge',
			'rating2star':'Not up to the mark',
			'rating3star':'Satisfactory',
			'rating4star':'Good Challenge',
			'rating5star':'Excellent',
			'failed':'Failed',
			'user_started_course':'You started a challenge',
			'user_submitted_quiz':'You submitted the quiz',
			'user_quiz_evaluated':'Quiz evaluated',
			'course_incomplete':'Challenge Incomplete',
			'finish_this_course':'Please mark all the units of this challenge',
			'ok':'OK',
			'update_title':'Updates',
			'update_read':'Read',
			'update_unread':'Unread',
			'no_updates':'No updates found',
			'wishlist_title': 'Wishlist',
			'no_wishlist':'No wishlist challenges found',
			'no_finished_courses':'No Finished challenges!',
			'no_results':'No results found!',
			'loadingresults':'Please wait...',
			'signup_with_email_button_label':'Signup with your email',
			'clear_cache':'Clear Offline data',
			'cache_cleared':'Offline cache cleared',
			'sync_data':'Sync Data',
			'data_synced':'Data Synced',
			'logout':'Logout',
			'loggedout':'You have successfully logged out !',
			'register_account':'Login or Create an account to continue !',
			'email_certificates':'Email certificates',
			'manage_data':'Manage Stored Data',
			'saved_information':'Saved Information',
			'client_id':'Site Key',
            'saved_quiz_results':'Saved Results',
            'timeout':'TimeOut',
			'app_quiz_results':'Results',
			'change_profile_image':'Change Profile image',
			'pick_gallery':'Set image from gallery',
			'take_photo':'Take my photo',
			'cancel':'Cancel',
			'blog_page':'Blog Page',
			'course_chart':'Challenge Statistics',
			'quiz_chart':'Quiz Statistics',
			'percentage':'Percentage',
			'scores':'Scores',
			'edit':'Edit',
			'change':'Change',
			'edit_profile_field':'Edit Profile Field',
			'pull_to_refresh':'Pull to refresh',
			'refreshing':'...refreshing',
			'contact_page':'Contact',
			'contact_name':'Name',
			'contact_email':'Email',
			'contact_message':'Message',
			'contact_follow_us':'Follow Us',
			'invalid_url':'Invalid url value',
			'read_notifications':'Read notifications',
			'unread_notifications':'Unread Notifications',
			'logout_from_device':'Are you sure you want to logout from this device?',
			'accept_continue':'Accept and Continue',
			'finished':'Finished',
			'active':'Active',
			'open_results_on_site':'Please check results for this quiz in browser.',
			'show_more':'more',
			'show_less':'less',

			'buy':'Buy',
			'pricing_options':'Pricing Options',
			'pricing_options_title':'Pricing Options (swipe to select)',
			'home_menu_title':'Home',
			'directory_menu_title':'Directory',
			'instructors_menu_title':'Instructors',
			'blog_menu_title':'Blog',
			'contact_menu_title':'Contact',
			'popular_courses_title_home_page':'Popular Challenges',
			'popular_courses_subtitle_home_page':'Popular and trending challenges',
			'categories_title_home_page':'Categories',
			'categories_subtitle_home_page':'Browse challenges via Challenge category',
			'directory_search_placeholder':'Search',
			'featured_courses':'Featured Challenges',
			'selected_courses':'Selected Challenges',
			'markallquestions':'Please mark all questions first.',

			'credit':'Credit',
			'debit':'Debit',
			'wallet_no_products':'Consult Admin to create Wallet Products !',
			'wallet_no_transactions': 'No transactions found !',
			'pay_from_wallet': 'Pay from Wallet',
			'use_wallet':'Use Wallet amount to purchase',
			'pay':'PAY',
			'login_to_buy':'Please Login to Buy this challenges',
			'login_again':'Please re-login to purchase this challenges',
			'insufficient_funds':'Insufficient funds in wallet ! Add more funds.',
			'buy_from_site': 'Buy from Site',
			'description':'description',
			'curriculum':'curriculum',
			'reviews':'reviews',
			'instructors':'instructors',
			'retakes_remaining':'Retakes Remaining',
            'open_in_new_window':'Open in New Window',
            'language': 'Language',
            'language_change': 'Please restart the application for the changes to take effect.',

            'Profile': 'Profile',
            'Settings': 'Settings',
            'Gradebook': 'Gradebook',
            'Results': 'Results',
            'Dashboard': 'Dashboard',
            'Activity': 'Activities',
            'My Courses': 'My Courses',
            'Notifications': 'Notifications',
            
            'Learn anywhere': 'Learn anywhere',
            'Get started with mobile learning': 'Get started with mobile learning',
            'Learn and Earn Skills': 'Learn and Earn Skills',
            'Get rewards, certificates & badges': 'Get rewards, certificates & badges',
            'Proceed': 'Proceed',
            'Anywhere, anytime': 'Anywhere, anytime',
            'Boost your career growth with anytime anywhere learning!': 'Boost your career growth with anytime anywhere learning!',
            'Cheshme Creative Challenges': 'Cheshme Creative Challenges',
            'Get Started Now!': 'Get Started Now!',
            'Get Started': 'Get Started',
            'Course Locked': 'Course Locked',
            'This course has not started yet. Please check back later.': 'This course has not started yet. Please check back later.'
        };
        
        this.fa = {
            'Available Courses': 'چالش های در دسترس' ,
            'Continue your 7 Week Challenge': 'ادامه چالش 7 هفته شما' ,
            'Instructor': 'مربی' ,
            'login_description': 'به چالش 7 هفته ما بپیوندید و انواع مختلف اصطلاحات خلاقانه، از ویرایش رسانه ای گرفته تا قصه گويي را یاد بگیرید.' ,
            'register_thank_you': 'از علاقه تان به پیوستن به برنامه متشکریم. ما به زودی با ایمیل با تایید وضعیتتان با شما تماس خواهیم گرفت.' ,
            'register_button_label': 'پیوستن به برنامه' ,
            'home_title': 'سفر آموزشی' ,
            'home_subtitle': 'آیتم های ویژه' ,
            'start_course': 'شروع دوره' ,
            'search_title': 'جستجوکردن..' ,
            'continue_course': 'ادامه درس' ,
            'completed_course': 'تکمیل شده' ,
            'expired_course': 'منقضی شده' ,
            'evaluation_course': 'تحت ارزیابی' ,
            'no_reviews': 'هیچ بررسی برای این چالش یافت نشد.' ,
            'year': 'سال' ,
            'years': 'سال ها' ,
            'month': 'ماه' ,
            'months': 'ماه ها' ,
            'week': 'هفته' ,
            'weeks': 'هفته ها' ,
            'day': 'روز' ,
            'days': 'روزها' ,
            'hour': 'ساعت' ,
            'hours': 'ساعت ها' ,
            'minute': 'دقیقه' ,
            'minutes': 'دقایق' ,
            'second': 'ثانیه' ,
            'seconds': 'ثانیه ها' ,
            'expired': 'منقضی شده' ,
            'completed': 'تکمیل شده' ,
            'start_quiz': 'شروع آزمون' ,
            'save_quiz': 'ذخیره آزمون' ,
            'submit_quiz': 'ارسال آزمون' ,
            'marks': 'علامت ها ' ,
            'marks_obtained': 'علائم به دست آمده' ,
            'max_marks': 'حداکثر علامتها' ,
            'TRUE': 'درست ' ,
            'FALSE': 'نادرست' ,
            'checkanswer': 'پاسخ را بررسی کنید' ,
            'score': 'نمره' ,
            'progress': 'پیشرفت' ,
            'time': 'زمان' ,
            'filter_options': 'گزینه های فیلتر' ,
            'sort_options': 'گزینه های  مرتب سازی' ,
            'popular': 'مردم پسند' ,
            'recent': 'جدید' ,
            'alphabetical': ' الفبایی' ,
            'rated': 'بالاترین رتبه' ,
            'start_date': 'در حال آمدن ' ,
            'okay': 'بسیار خوب' ,
            'dismiss': 'رد کردن' ,
            'select_category': 'رسته را انتخاب کنید' ,
            'select_location': 'محل  را انتخاب کنید' ,
            'select_level': 'سطح را انتخاب کنید' ,
            'select_instructor': 'مربی را انتخاب کنید' ,
            'free_paid': 'قیمت چالش را انتخاب کنید' ,
            'price': 'قیمت' ,
            'apply_filters': 'فیلترها را  اعمال کنید' ,
            'close': 'بستن' ,
            'not_found': 'هیچ چالشی مطابق با معیارهای شما یافت نشد' ,
            'no_courses': 'بدون چالش!' ,
            'course_directory_title': 'تمام چالش ها' ,
            'course_directory_sub_title': 'فهرست چالش ها' ,
            'all': 'همه' ,
            'all_free': 'رایگان' ,
            'all_paid': 'پرداخت شده' ,
            'select_online_offline': 'انتخاب نوع چالش' ,
            'online': 'آنلاین' ,
            'offline': 'آفلاین' ,
            'after_start_date': 'بعد از تاریخ.... شروع می شود' ,
            'before_start_date': 'قبل از تاریخ.... شروع می شود' ,
            'instructors_page_title': 'همه مربیان' ,
            'instructors_page_description': 'کتاب راهنمای   مربی' ,
            'no_instructors': 'هیچ مربیی یافت نشد' ,
            'get_all_course_by_instructor': ' مشاهده تمام چالش ها توسط مربی' ,
            'profile': 'نمایه' ,
            'about': 'در باره' ,
            'courses': 'چالش ها' ,
            'marked_answer': 'پاسخ علامت خورده' ,
            'correct_answer': 'پاسخ صحیح' ,
            'explanation': 'توضیح' ,
            'awaiting_results': 'در انتظار نتایج امتحان' ,
            'quiz_results': 'نتایج امتحان' ,
            'retake_quiz': 'امتحان را دوباره بگیرید' ,
            'quiz_start': 'امتحان شروع شد' ,
            'quiz_start_content': 'شما امتحان را شروع کردید.' ,
            'quiz_submit': 'امتحان ارسال شد' ,
            'quiz_submit_content': 'شما امتحان را  ارسال کردید.' ,
            'quiz_evaluate': 'امتحان ارزیابی شد' ,
            'quiz_evaluate_content': 'امتحان ارزیابی شد' ,
            'certificate': 'گواهی' ,
            'badge': 'نشان مخصوص' ,
            'no_notification_found': 'هیچ یاد آوریی یافت نشد' ,
            'no_activity_found': ' هیچ فعالیتی یافت نشد!' ,
            'back_to_course': 'بازگشت به چالش' ,
            'review_course': 'بررسی چالش' ,
            'finish_course': 'پایان چالش ' ,
            'login_heading': 'ورود' ,
            'login_title': 'شروع کنید' ,
            'login_content': 'چالش های شما در همه دستگاه های شما در دسترس خواهد بود' ,
            'login_have_account': 'هم اکنون یک حساب کاربری دارید' ,
            'login_signin': 'ورود' ,
            'login_signup': 'ثبت نام' ,
            'login_terms_conditions': 'شرایط و ضوابط' ,
            'signin_username': 'نام کاربری یا پست الکترونیک' ,
            'signin_password': 'کلمه عبور' ,
            'signup_username': 'نام کاربری' ,
            'signup_email': 'پست الکترونیک' ,
            'signup_password': 'کلمه عبور' ,
            'signup': 'ثبت نام' ,
            'login_back': 'بازگشت به صفحه ورود' ,
            'post_review': 'برای این چالش یک نظر بفرستید ' ,
            'review_title': 'عنوان برای بررسی' ,
            'review_rating': 'درجه  برای این بررسی' ,
            'review_content': 'محتوا برای مرور' ,
            'submit_review': 'بررسی پست' ,
            'rating1star': 'چالش بد' ,
            'rating2star': 'زیر  متوسط' ,
            'rating3star': 'رضایتبخش' ,
            'rating4star': 'چالش خوب' ,
            'rating5star': 'عالی' ,
            'failed': 'ناموفق' ,
            'user_started_course': 'شما یک چالش را آغاز کردید' ,
            'user_submitted_quiz': 'شما  امتحان را ارسال کردید' ,
            'user_quiz_evaluated': 'امتحان ارزیابی شد' ,
            'course_incomplete': 'چالش ناقص  انجام شد' ,
            'finish_this_course': 'لطفا تمام واحدهای این چالش را علامت بزنید' ,
            'ok': 'بسیار خوب' ,
            'update_title': 'به روز رسانی ها' ,
            'update_read': 'خوانده شده' ,
            'update_unread': 'خوانده نشده' ,
            'no_updates': 'هیچ به روزرسانی یافت نشد' ,
            'wishlist_title': 'لیست علاقه مندی ها' ,
            'no_wishlist': 'هیچ چالش دلخواهی یافت نشد' ,
            'no_finished_courses': 'هیچ چالش تمام شده ای یافت نشد' ,
            'no_results': 'نتیجه ای پیدا نشد!' ,
            'loadingresults': 'لطفا صبر کنید...' ,
            'signup_with_email_button_label': 'ثبت نام با ایمیل' ,
            'clear_cache': 'اطلاعات آفلاین را پاک کنید' ,
            'cache_cleared': 'حافظه آفلاین پاک شده است' ,
            'sync_data': 'داده همگام سازی' ,
            'data_synced': 'داده همگام سازی شده اند' ,
            'logout': 'خروج' ,
            'loggedout': 'شما با موفقیت خارج شدید!' ,
            'register_account': 'ورود یا ایجاد یک حساب کاربری برای ادامه!' ,
            'email_certificates': 'اسناد ایمیل' ,
            'manage_data': ' داده های ذخیره شده را مدیریت کنید' ,
            'saved_information': 'اطلاعات ذخیره شده' ,
            'client_id': 'کلید سایت' ,
            'saved_quiz_results': 'نتایج ذخیره شده،' ,
            'timeout': 'تایم اوت' ,
            'app_quiz_results': 'نتایج' ,
            'change_profile_image': 'تغییر تصویر پروفایل' ,
            'pick_gallery': 'تنظیم تصویر از گالری' ,
            'take_photo': 'عکس من را بگیر' ,
            'cancel': 'لغو' ,
            'blog_page': 'صفحه وبلاگ' ,
            'course_chart': 'آمار چالش' ,
            'quiz_chart': 'آمار  امتحان ' ,
            'percentage': 'درصد' ,
            'scores': 'نمرات' ,
            'edit': 'ویرایش' ,
            'change': 'تغییر دادن' ,
            'edit_profile_field': 'ویرایش زمینه پروفایل' ,
            'pull_to_refresh': 'برای ریفرش  کردن بکشید' ,
            'refreshing': 'درحال ریفرش کردن ' ,
            'contact_page': 'تماس' ,
            'contact_name': 'نام' ,
            'contact_email': 'پست الکترونیک' ,
            'contact_message': 'پیام' ,
            'contact_follow_us': 'ما را دنبال کنید' ,
            'invalid_url': 'یو آر ال معتبر نیست ' ,
            'read_notifications': ' اعلان ها را بخوانید' ,
            'unread_notifications': 'اعلانات خوانده نشده' ,
            'logout_from_device': 'آیا مطمئن هستید که می خواهید از این دستگاه خارج شوید؟' ,
            'accept_continue': 'پذیرفتن و ادامه دادن' ,
            'finished': 'تمام شده' ,
            'active': 'فعال' ,
            'open_results_on_site': 'لطفا نتایج این امتحان  را در مرورگر بررسی کنید.' ,
            'show_more': 'بیشتر' ,
            'show_less': 'کمتر' ,
            'buy': 'خرید' ,
            'pricing_options': 'گزینه های قیمت گذاری' ,
            'pricing_options_title': 'گزینه های قیمت گذاری (برای انتخاب تی بکشید)' ,
            'home_menu_title': 'خانه' ,
            'directory_menu_title': 'دایرکتوری' ,
            'instructors_menu_title': 'مربیان' ,
            'blog_menu_title': 'وبلاگ' ,
            'contact_menu_title': 'تماس' ,
            'popular_courses_title_home_page': 'چالش های محبوب' ,
            'popular_courses_subtitle_home_page': 'چالش های محبوب و پرطرفدار' ,
            'categories_title_home_page': 'دسته بندی ها' ,
            'categories_subtitle_home_page': 'چالش ها را از طریق دسته بندی  چالش ها مرور کنید' ,
            'directory_search_placeholder': 'جستجو کردن' ,
            'featured_courses': 'چالش های برجسته' ,
            'selected_courses': 'چالش های انتخاب شده' ,
            'markallquestions': 'لطفا ابتدا همه سوالات را علامت بزنید' ,
            'credit': 'اعتبار' ,
            'debit': 'بدهی' ,
            'wallet_no_products': 'برای ایجاد  محصولات کیف پول با مدیریت مشورت کنید !' ,
            'wallet_no_transactions': 'هیچ تبادل مالی  یافت نشد' ,
            'pay_from_wallet': 'پرداخت از کیف پول' ,
            'use_wallet': 'از مبلغ کیف پول برای خرید استفاده کنید' ,
            'pay': 'پرداخت' ,
            'login_to_buy': 'لطفا برای خرید این چالشها وارد شوید' ,
            'login_again': 'لطفا برای خرید این چالش ها مجددا وارد شوید' ,
            'insufficient_funds': 'بودجه کافی در کیف پول وجود  ندارد ! مبلغ بیشتری اضافه کنید' ,
            'buy_from_site': 'خرید از سایت' ,
            'description': 'جزئیات' ,
            'curriculum': 'برنامه آموزشی' ,
            'reviews': 'بررسی ها' ,
            'instructors': 'مربیان' ,
            'retakes_remaining': 'باقی مانده  پس گرفته  شده ها' ,
            'open_in_new_window': 'در پنجره جدید باز کنید' ,
            'language': 'زبان' ,
            'language_change': 'لطفا درخواست را دوباره شروع کنید تا تغییرات اعمال شود.' ,
            'Profile': 'نمایه ' ,
            'Settings': 'تنظیمات' ,
            'Gradebook': 'جدول نمرات ' ,
            'Results': 'نتایج' ,
            'Dashboard': 'داشبورد' ,
            'Activity': 'فعالیتها' ,
            'My Courses': 'دوره های  آموزشی من' ,
            'Notifications': 'اعلانات',
            'Learn anywhere': 'در هر جا یاد بگیرید',
            'Get started with mobile learning': 'با یادگیری موبایل شروع کنید',
            'Learn and Earn Skills': 'یاد بگیرید و مهارت پیدا کنید',
            'Get rewards, certificates & badges': 'پاداش، گواهینامه، مدرک و کارت نشان  بگیرید ',
            'Proceed': 'اقدام کنید ',
            'Anywhere, anytime': 'هر مکان،هر زمان',
            'Boost your career growth with anytime anywhere learning!': 'مقام و موقعیت خود را با یادگیری در هر زمان و هر مکان بالا ببرید',
            'Cheshme Creative Challenges': 'چالشهای خلاق چشمه ',
            'Get Started Now!': 'همین الان شروع کنید',
            'Get Started': 'شروع کنید',
            'Course Locked': 'دوره بسته شد',
            'This course has not started yet. Please check back later.': 'دوره هنوز شروع نشده است. لطفا بعدا چک کنید '
        };
    }

    get(key: string, lang:string = "en") {

        if (lang === "en"){
            return this.en[key];
        } else {
            return this.fa[key]
        }
    }

}