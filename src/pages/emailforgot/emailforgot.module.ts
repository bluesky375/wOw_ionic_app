import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailForgotPage } from './emailforgot';
import { RegisterProvider } from '../../providers/register/register';

@NgModule({
    declarations: [
        EmailForgotPage,
    ],
    
    imports: [
        IonicPageModule.forChild(EmailForgotPage),
    ],
  
    providers: [
        RegisterProvider
    ]
})
export class EmailForgotPageModule { }
