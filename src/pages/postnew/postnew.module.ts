import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostNewPage } from './postnew';

@NgModule({
    declarations: [
        PostNewPage,
    ],
    imports: [
        IonicPageModule.forChild(PostNewPage),
    ],
})
export class PostNewPageModule {}
