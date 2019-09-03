import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import { PostsProvider } from '../../providers/posts/posts';

@NgModule({
    declarations: [
        FavoritePage,
    ],
    imports: [
        IonicPageModule.forChild(FavoritePage),
    ],
    providers: [
        PostsProvider
    ]
})
export class FavoritePageModule { }
