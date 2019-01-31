import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { IgxGridModule, IgxBottomNavModule, IgxAvatarModule, IgxIconModule, IgxRippleModule,
   IgxListModule, IgxInputGroupModule, IgxFilterModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
    WelcomeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxBottomNavModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxRippleModule,
    CommonModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxFilterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
