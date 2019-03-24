export class Quote {
    public vote1:number;
    public vote2:number;
    public showQuoteDetails:boolean;
    constructor(public id:number, public name:string, public quote:string, public completeDate:Date){
        this.showQuoteDetails = false;
       
    }
}
