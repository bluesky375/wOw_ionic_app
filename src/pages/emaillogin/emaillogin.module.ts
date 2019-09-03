import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailLoginPage } from './emaillogin';
import { LoginProvider } from '../../providers/login/login';

@NgModule({
    declarations: [
        EmailLoginPage,
    ],

    imports: [
        IonicPageModule.forChild(EmailLoginPage),
    ],
    
    providers: [
        LoginProvider
    ]
})
export class EmailLoginPageModule { }
