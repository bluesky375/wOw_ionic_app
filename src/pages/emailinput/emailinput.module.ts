import { RegisterProvider } from '../../providers/register/register';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailInputPage } from './emailinput';

@NgModule({
    declarations: [
        EmailInputPage,
    ],
    imports: [
        IonicPageModule.forChild(EmailInputPage),
    ],
    providers: [
        RegisterProvider
    ]
})
export class EmailInputPageModule { }
