import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCompletePage } from './registercomplete';
import { RegisterProvider } from './../../providers/register/register';

@NgModule({
    declarations: [
        RegisterCompletePage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterCompletePage),
    ],
    providers: [
        RegisterProvider
    ]
})
export class RegisterCompletePageModule { }
