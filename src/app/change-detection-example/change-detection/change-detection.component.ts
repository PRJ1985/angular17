import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../detection-parent/detection-parent.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  @Input() productList:Product[] = [];

}
