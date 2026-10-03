import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/certifications';

@Component({
  selector: 'app-certifications',
  template: `
    <app-section id="certifications" heading="Certifications">
      <ul class="space-y-2">
        <li *ngFor="let cert of certifications" class="dark:text-white">
          <span class="font-semibold">{{ cert.name }}</span>
          <span *ngIf="cert.issuer"> | {{ cert.issuer }}</span>
          <span *ngIf="cert.date" class="text-sm text-gray-500 dark:text-gray-400"> ({{ cert.date }})</span>
        </li>
      </ul>
    </app-section>
  `,
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
}
