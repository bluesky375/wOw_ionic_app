import { SettingsProvider } from '../../providers/settings/settings';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeListPage } from './noticelist';

@NgModule({
    declarations: [
        NoticeListPage,
    ],
    imports: [
        IonicPageModule.forChild(NoticeListPage),
    ],
    providers: [
        SettingsProvider
    ]
})
export class NoticeListPageModule { }
