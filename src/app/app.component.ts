import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstComponent } from './DataCommunicationBS/first/first.component';
import { SecondComponent } from './DataCommunicationBS/second/second.component';
import { ParentComponent } from './DataCommunicationBS/parent/parent.component';
import { PipeExampleComponent } from './PipeExample/pipe-example/pipe-example.component';
import { DirectiveExampleComponent } from './directive-sample/directive-example/directive-example.component';
import { DetectionParentComponent } from './change-detection-example/detection-parent/detection-parent.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEncapsulationParentComponent } from './view-encapsulations/view-encapsulation-parent/view-encapsulation-parent.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {
  MatTabNavPanel,
  MatTabsModule,
  matTabsAnimations,
} from '@angular/material/tabs';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSpinner,
} from '@angular/material/progress-spinner';
import { NgxSliderModule } from 'ngx-slider-v2';
import { GalleryModule } from 'ng-gallery';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { ngSkipHydration: 'true' },
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    ParentComponent,
    PipeExampleComponent,
    DirectiveExampleComponent,
    DetectionParentComponent,
    ViewEncapsulationParentComponent,
    MatTabsModule,
    MatIconModule,
    MatIcon,
    MatTabNavPanel,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    GalleryModule,
    MatButtonModule,
  ],
})
export class AppComponent {
  title = 'First-App';

  events = [];
}
