import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailOptionPage } from './emailoption';

@NgModule({
    declarations: [
        EmailOptionPage,
    ],
    imports: [
        IonicPageModule.forChild(EmailOptionPage),
    ],
})
export class EmailOptionPageModule {}
