import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContinentPage } from './continent';

@NgModule({
    declarations: [
        ContinentPage,
    ],

    imports: [
        IonicPageModule.forChild(ContinentPage),
    ],
})
export class ContinentpagePageModule {}
