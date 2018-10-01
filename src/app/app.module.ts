import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegListComponent } from './reg-list/reg-list.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginComponent } from './login/login.component';
import { MsgboxComponent } from './msgbox/msgbox.component';

const appRoutes: Routes = [
  { path: '', component: RegListComponent },
  { path: 'new', component: RegFormComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegListComponent,
    RegFormComponent,
    LoginComponent,
    MsgboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
