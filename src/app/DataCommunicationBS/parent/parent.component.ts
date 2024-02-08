import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FirstComponent,SecondComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
