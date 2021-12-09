import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { RouterModule, RouterOutlet } from '@angular/router';
import {ROUTES} from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
