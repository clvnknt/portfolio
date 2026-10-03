import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <h1 class="text-base font-bold dark:text-white md:text-2xl md:font-bold lg:text-4xl lg:font-extrabold">
  <ng-content></ng-content>
</h1>
  `,

})
export class HeadingComponent {

}
