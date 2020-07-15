import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxBottomNavModule, IgxAvatarModule, IgxIconModule, IgxRippleModule, IgxListModule,
  IgxInputGroupModule, IgxFilterModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
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
    FormsModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
