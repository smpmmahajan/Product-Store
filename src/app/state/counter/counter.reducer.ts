import {  createReducer,on } from "@ngrx/store";
import * as CounterActions from './counter.action'
import { state } from "@angular/animations";


export const InitialStateCounter = 0;

export const counterReducer=createReducer(
    InitialStateCounter,
    on(CounterActions.increment,(state: number)=>state+1),
    on(CounterActions.decrement,(state: number)=>state-1),
    on(CounterActions.reset,()=>0),
);



