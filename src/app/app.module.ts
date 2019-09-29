import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';

const routes:Routes=[
  
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home', component:AppComponent},
  {path:'menu', component:MenuComponent},
  {path:'services', component:ServicesComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
