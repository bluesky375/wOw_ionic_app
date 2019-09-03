import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class HomePageModule { }
