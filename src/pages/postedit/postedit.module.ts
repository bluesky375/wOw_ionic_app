import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostEditPage } from './postedit';
import { SettingsProvider } from './../../providers/settings/settings';
import { PostsProvider } from '../../providers/posts/posts';

@NgModule({
    declarations: [
        PostEditPage,
    ],
    imports: [
        IonicPageModule.forChild(PostEditPage),
    ],
    providers: [
        SettingsProvider,
        PostsProvider
    ]
})
export class PosteditPageModule { }
