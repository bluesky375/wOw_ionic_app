import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './userprofile';
import { RegisterProvider } from '../../providers/register/register';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        UserProfilePage,
    ],
    imports: [
        IonicPageModule.forChild(UserProfilePage),
    ],
    providers: [
        RegisterProvider,
        SettingsProvider
    ]
})
export class UserProfilePageModule { }
