import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuSettingPage } from './menusetting';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        MenuSettingPage,
    ],
    imports: [
        IonicPageModule.forChild(MenuSettingPage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class MenuSettingPageModule { }
