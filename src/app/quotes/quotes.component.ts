import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  Quotes = [ 
    new Quote(1, `Nelson Kioko`, `Never give up on someone miracles happen everyday`, new Date(2019,2,21)),
    new Quote(1, `Nelson Kioko`, `Never give up on someone miracles happen everyday`, new Date(2019,2,21))
  ]
  
  toogleDetails(index){
    this.Quotes[index].showQuoteDetails = !this.Quotes[index].showQuoteDetails;
  }

  deleteGoal(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
        
        if(toDelete){
            this.Quotes.splice(index,1)
        }
    }
    
  }

  

  constructor() { }

  ngOnInit() {
  }

}
