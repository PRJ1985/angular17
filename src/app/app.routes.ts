import { Routes } from '@angular/router';
import { DirectiveExampleComponent } from './directive-sample/directive-example/directive-example.component';
import { DetectionParentComponent } from './change-detection-example/detection-parent/detection-parent.component';
import { ParentComponent } from './DataCommunicationBS/parent/parent.component';
import { PipeExampleComponent } from './PipeExample/pipe-example/pipe-example.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { canActivateChangeDetectionGuard } from './common/route-guards/can-activate-change-detection.guard';
import { canDeactivateChangeDetectionGuard } from './common/route-guards/can-deactivate-change-detection.guard';
import { ActivateChangeDetectionResolverResolver } from './common/resolvers/activate-change-detection-resolver.resolver';
export const routes: Routes = [
  { path: 'life-cycle-hook', component: LifeCycleHooksComponent },
  { path: 'directives-example', component: DirectiveExampleComponent },
  {
    path: 'change-detection',
    component: DetectionParentComponent,
    canActivate: [canActivateChangeDetectionGuard],
    canDeactivate: [canDeactivateChangeDetectionGuard],
    resolve:[ActivateChangeDetectionResolverResolver]
  },
  { path: 'data-communication', component: ParentComponent },
  { path: 'pipe-example', component: PipeExampleComponent },
];
