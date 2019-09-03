import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguageSettingPage } from './languagesetting';

@NgModule({
    declarations: [
        LanguageSettingPage,
    ],
    imports: [
        IonicPageModule.forChild(LanguageSettingPage),
    ],
})
export class LanguageSettingPageModule {}
