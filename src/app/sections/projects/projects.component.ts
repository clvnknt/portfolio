import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  template: `
    <app-section id="projects" heading="Projects">
      <div class="lg:grid lg:grid-cols-4 lg:gap-2 grid border">
        <app-image-container
          *ngFor="let project of projects"
          [src]="project.imageUrl"
        ></app-image-container>
      </div>
    </app-section>
  `,
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
