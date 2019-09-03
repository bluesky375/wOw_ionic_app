import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailNewPassPage } from './emailnewpass';
import { RegisterProvider } from '../../providers/register/register';

@NgModule({
    declarations: [
        EmailNewPassPage,
    ],
    
    imports: [
        IonicPageModule.forChild(EmailNewPassPage),
    ],
    
    providers: [
        RegisterProvider
    ]
})
export class EmailNewPassPageModule { }
