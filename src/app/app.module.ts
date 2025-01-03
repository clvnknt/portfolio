import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/main-layout/navbar/navbar.component';
import { ContainerComponent } from './common/main-layout/container/container.component';
import { HeadingComponent } from './common/main-layout/heading/heading.component';
import { HrComponent } from './common/main-layout/hr/hr.component';
import { FooterComponent } from './common/main-layout/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ImageContainerComponent } from './common/projects/image-container/image-container.component';
import { TimelapseComponent } from './common/about/timelapse/timelapse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    IntroComponent,
    ContainerComponent,
    HrComponent,
    CertificationsComponent,
    HeadingComponent,
    ImageContainerComponent,
    TimelapseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
