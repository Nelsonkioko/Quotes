export class Quote {
    public upvote:number;
    public downvote:number;
    public showQuoteDetails:boolean;
    constructor(public id:number, public name:string, public quote:string, public completeDate:Date){
        this.showQuoteDetails = false;
        this.upvote=0;
        this.downvote=0;
    }
  
}
