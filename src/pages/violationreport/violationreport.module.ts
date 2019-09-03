import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolationReportPage } from './violationreport';
import { SettingsProvider } from './../../providers/settings/settings';

@NgModule({
    declarations: [
        ViolationReportPage,
    ],
    imports: [
        IonicPageModule.forChild(ViolationReportPage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class ViolationReportPageModule {}
