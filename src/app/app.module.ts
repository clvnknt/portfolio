import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContainerComponent } from './shared/container/container.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { HrComponent } from './shared/hr/hr.component';
import { SectionComponent } from './shared/section/section.component';
import { IntroComponent } from './sections/intro/intro.component';
import { AboutComponent } from './sections/about/about.component';
import { TimelineItemComponent } from './sections/about/timeline-item/timeline-item.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ImageContainerComponent } from './sections/projects/image-container/image-container.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { ContactComponent } from './sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    // layout
    NavbarComponent,
    FooterComponent,
    // shared
    ContainerComponent,
    HeadingComponent,
    HrComponent,
    SectionComponent,
    // sections
    IntroComponent,
    AboutComponent,
    TimelineItemComponent,
    ProjectsComponent,
    ImageContainerComponent,
    CertificationsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
