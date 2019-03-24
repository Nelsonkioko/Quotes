import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  
  //deleting
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  
  vote1=0;
  vote2=0;
 
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote(index){
    this.quote.vote1=0;
 
    
    this.quote[index].vote1 = ++this.quote[index].vote1

  }
  downVote(index){
    this.quote.vote2=0;
    this.quote[index].vote2 = ++this.quote[index].vote2

  }
  

  constructor() { }

  ngOnInit() {
  }

}
