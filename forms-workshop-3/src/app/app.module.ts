import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { WelcomeComponent } from './welcome/welcome.component';
// import { AppEmailDirective } from './shared/validators/app-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    PostsListComponent,
    HomeComponent,
    WelcomeComponent,
    // AppEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
