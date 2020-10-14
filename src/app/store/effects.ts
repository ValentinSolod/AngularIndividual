import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { FlowersService } from '../flowers.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadFlowers$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.flowersService.getAll().pipe(
        map(flowers => {
          return { type: ActionTypes.LoadSuccess, payload: flowers };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flowersService: FlowersService
  ) { }
}
