import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesComponent } from './components/games/games.component';
import { UsersComponent } from './components/users/users.component';
import { GamesService } from './services/games.service';
import { UsersService}  from './services/users.service';
import { MyMaterialModule } from './material.module';

import { LaunchComponent } from './components/launch/launch.component';
import { NewUsersComponent } from './components/newUsers/newUsers.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/errors/error.component';
import { MatRadioModule } from  '@angular/material/radio';


const appRoutes: Routes = [
  {path: 'home', component: LaunchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GamesComponent},
  {path: 'newuser', component: NewUsersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    UsersComponent,
    NewUsersComponent,
    ErrorComponent,
    LoginComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MyMaterialModule,
    MatRadioModule,
    FlexLayoutModule
  ],
  entryComponents: [ErrorComponent],
  providers: [GamesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
