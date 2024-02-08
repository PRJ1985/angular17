import { Component, ViewEncapsulation } from '@angular/core';
import { ViewEncapsulationChildComponent } from '../view-encapsulation-child/view-encapsulation-child.component';

@Component({
  selector: 'app-view-encapsulation-parent',
  standalone: true,
  imports: [ViewEncapsulationChildComponent ],
  templateUrl: './view-encapsulation-parent.component.html',
  styleUrl: './view-encapsulation-parent.component.css',
  
})
export class ViewEncapsulationParentComponent {

}
