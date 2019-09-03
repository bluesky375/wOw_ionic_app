import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdDetailPage } from './addetail';

@NgModule({
    declarations: [
        AdDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(AdDetailPage),
    ],
})
export class AdDetailPageModule {}
