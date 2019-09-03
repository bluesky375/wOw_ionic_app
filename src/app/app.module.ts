import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Push } from '@ionic-native/push';
import { Base64 } from '@ionic-native/base64';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpClientModule } from "@angular/common/http";
import { TwitterConnect } from "@ionic-native/twitter-connect";
import { Geolocation } from '@ionic-native/geolocation';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';



import { MyApp } from './app.component';



import { AdDetailPage } from '../pages/addetail/addetail';
import { AdNewPage } from '../pages/adnew/adnew';
import { AdsPage } from '../pages/ads/ads';
import { AdViewPage } from '../pages/adview/adview';
import { AdSubmitViewPage } from '../pages/adsubmitview/adsubmitview';

import { CategoryPage } from '../pages/category/category';
import { CityPage } from '../pages/city/city';
import { CommentModalPage } from './../pages/comment-modal/comment-modal';
import { ContinentPage } from './../pages/continent/continent';
import { CountryPage } from './../pages/country/country';

import { EmailForgotPage } from '../pages/emailforgot/emailforgot';
import { EmailInputPage } from "../pages/emailinput/emailinput";
import { EmailLoginPage } from '../pages/emaillogin/emaillogin';
import { EmailNewPassPage } from '../pages/emailnewpass/emailnewpass';
import { EmailOptionPage } from '../pages/emailoption/emailoption';

import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';

import { LanguageSettingPage } from '../pages/languagesetting/languagesetting';
import { MenuSettingPage } from '../pages/menusetting/menusetting';

import { MyPostPage } from '../pages/mypost/mypost';

import { NoticeListPage } from '../pages/noticelist/noticelist';
import { NoticeViewPage } from '../pages/noticeview/noticeview';

import { OtpPassPage } from "../pages/otppass/otppass";

import { PostNewPage } from '../pages/postnew/postnew';
import { PostDetailPage } from './../pages/postdetail/postdetail';
import { PostEditPage } from '../pages/postedit/postedit';

import { PrefecturePage } from './../pages/prefecture/prefecture';
import { PrivacyPage } from './../pages/privacy/privacy';

import { RegisterPage } from "../pages/register/register";
import { RegisterCompletePage } from '../pages/registercomplete/registercomplete';

import { RequestPage } from '../pages/request/request';
import { SettingPage } from '../pages/setting/setting';

import { TabsPage } from '../pages/tabs/tabs';
import { TermsPage } from './../pages/terms/terms';

import { UserProfilePage } from '../pages/userprofile/userprofile';
import { ViolationReportPage } from '../pages/violationreport/violationreport';



import { WelcomePageModule } from "../pages/welcome/welcome.module";



import { AdsProvider } from '../providers/ads/ads';
import { LoginProvider } from '../providers/login/login';
import { PostsProvider } from '../providers/posts/posts';
import { RegisterProvider } from '../providers/register/register';
import { SettingsProvider } from '../providers/settings/settings';

import { DirectivesModule } from "../directives/directives.module";
import { ShrinkingSegmentHeader } from '../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
    declarations: [
        MyApp,
        EmailOptionPage,
        EmailLoginPage,
        EmailForgotPage,
        EmailNewPassPage,
        OtpPassPage,
        EmailInputPage,
        RegisterCompletePage,
        RegisterPage,
        CategoryPage,
        CityPage,
        TabsPage,
        HomePage,
        PostDetailPage,
        AdDetailPage,
        ViolationReportPage,
        MyPostPage,
        PostEditPage,
        PostNewPage,
        FavoritePage,
        AdsPage,
        UserProfilePage,
        SettingPage,
        MenuSettingPage,
        NoticeListPage,
        NoticeViewPage,
        LanguageSettingPage,
        AdViewPage,
        AdNewPage,
        AdSubmitViewPage,
        RequestPage,
        ContinentPage,
        CountryPage,
        PrefecturePage,
        CommentModalPage,
        PrivacyPage,
        TermsPage,

        ShrinkingSegmentHeader
    ],
    imports: [
        BrowserModule,
        IonicImageViewerModule,
        WelcomePageModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        // IonicStorageModule.forRoot()
        IonicStorageModule.forRoot({
            name: '__wow',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        DirectivesModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,

        EmailOptionPage,
        EmailLoginPage,
        EmailForgotPage,
        EmailNewPassPage,
        OtpPassPage,
        EmailInputPage,
        RegisterCompletePage,
        AdDetailPage,
        ViolationReportPage,
        RegisterPage,
        CategoryPage,
        CityPage,
        TabsPage,
        HomePage,
        PostDetailPage,
        MyPostPage,
        PostEditPage,
        PostNewPage,
        FavoritePage,
        AdsPage,
        UserProfilePage,
        SettingPage,
        MenuSettingPage,
        NoticeListPage,
        NoticeViewPage,
        LanguageSettingPage,
        AdViewPage,
        AdNewPage,
        AdSubmitViewPage,
        RequestPage,        
        ContinentPage,
        CountryPage,
        PrefecturePage,
        
        CommentModalPage,
        PrivacyPage,
        TermsPage
    ],
    providers: [
        StatusBar,
        Geolocation,
        SplashScreen,
        TwitterConnect,
        Camera,
        LaunchNavigator,
        { 
            provide: ErrorHandler, 
            useClass: IonicErrorHandler 
        },
        
        AdsProvider,
        LoginProvider,
        PostsProvider,
        RegisterProvider,
        SettingsProvider,

        NativeGeocoder,
        SocialSharing,
        Push,
        Base64,

        Facebook,
        GooglePlus
    ]
})
export class AppModule { }
