import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './services/video.service';
import { ViewOneComponent } from './view-one/view-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/videos', pathMatch: 'full'},
  {path: 'video/:id', component: ViewOneComponent},
  {path: 'videos', component: VideoListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent,
    ViewOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
