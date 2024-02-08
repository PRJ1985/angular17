import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-example',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css'
})
export class DirectiveExampleComponent {
  isBlue =true;
  styleObject = {
    // borderBottom: '3px solid lightgreen'
    ['border-bottom']: '3px solid lightgreen'
  };
}
