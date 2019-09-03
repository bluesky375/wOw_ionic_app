import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        SettingPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingPage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class SettingPageModule { }
