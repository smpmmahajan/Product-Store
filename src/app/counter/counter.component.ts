import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterAction from '../state/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter$:Observable<number> = this.store.select('counter'); 
  constructor(private store:Store<{counter:number}>)
  {
        
  }
  Increment(){
    this.store.dispatch(counterAction.increment());
  }
  Decrement(){
    this.store.dispatch(counterAction.decrement());
  }
  Reset(){
    this.store.dispatch(counterAction.reset());
  }
}
