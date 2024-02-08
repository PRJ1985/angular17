import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-encapsulation-child',
  standalone: true, 
  imports: [  ],
  templateUrl: './view-encapsulation-child.component.html',
  styleUrl: './view-encapsulation-child.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapsulationChildComponent {
  mode = new FormControl('over');
}
