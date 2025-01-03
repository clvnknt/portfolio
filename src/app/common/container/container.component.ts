import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ml-2 mr-2 mb-6 border border-black">
    <ng-content></ng-content>
  </div>
  `,
})
export class ContainerComponent {

}
