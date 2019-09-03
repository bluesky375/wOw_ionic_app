import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestPage } from './request';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        RequestPage,
    ],
    imports: [
        IonicPageModule.forChild(RequestPage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class RequestPageModule { }
