import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdNewPage } from '././adnew';
import { RegisterProvider } from './../../providers/register/register';

@NgModule({
    declarations: [
        AdNewPage,
    ],
    imports: [
        IonicPageModule.forChild(AdNewPage),
    ],
    providers: [
        RegisterProvider
    ]
})
export class AdNewPageModule { }
