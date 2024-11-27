import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter/counter.reducer';
import { CounterComponent } from './counter.component';
import { CounterRoutingModule } from './counter.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,  
    CounterRoutingModule,
    ReactiveFormsModule ,  
    StoreModule.forFeature('counter',counterReducer),
  ]
})
export class CounterModule { }
