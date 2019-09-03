import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpPassPage } from './otppass';
import { RegisterProvider } from '../../providers/register/register';

@NgModule({
    declarations: [
        OtpPassPage,
    ],
    imports: [
        IonicPageModule.forChild(OtpPassPage),
    ],
    providers: [
        RegisterProvider
    ]
})
export class OtpPassPageModule { }
