import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPostPage } from './mypost';
import { PostsProvider } from '../../providers/posts/posts';

@NgModule({
    declarations: [
        MyPostPage,
    ],
    imports: [
        IonicPageModule.forChild(MyPostPage),
    ],
    providers: [
        PostsProvider
    ]
})
export class MyPostPageModule { }
