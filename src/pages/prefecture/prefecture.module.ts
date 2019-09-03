import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrefecturePage } from './prefecture';

@NgModule({
    declarations: [
        PrefecturePage,
    ],
    
    imports: [
        IonicPageModule.forChild(PrefecturePage),
    ],
})
export class PrefecturePageModule {}
