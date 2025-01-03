import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { CardFolderComponent } from './common/card-folder/card-folder.component';
import { ContainerComponent } from './common/container/container.component';
import { HrComponent } from './common/hr/hr.component';
import { MainHeadingComponent } from './common/main-heading/main-heading.component';
import { CertificationsComponent } from './components/certifications/certifications.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    IntroComponent,
    CardFolderComponent,
    ContainerComponent,
    HrComponent,
    MainHeadingComponent,
    CertificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
