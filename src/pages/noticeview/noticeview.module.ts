import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeViewPage } from './noticeview';

@NgModule({
    declarations: [
        NoticeViewPage,
    ],
    
    imports: [
        IonicPageModule.forChild(NoticeViewPage),
    ],
})
export class NoticeViewPageModule {}
