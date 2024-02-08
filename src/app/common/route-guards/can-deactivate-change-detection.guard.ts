import { CanActivateFn } from '@angular/router';

export const canDeactivateChangeDetectionGuard: CanActivateFn = (route, state) => {
  return true;
};
