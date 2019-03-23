export class Quote {
    public showQuoteDetails:boolean;
    constructor(public id:number, public name:string, public quote:string, public completeDate:Date){
        this.showQuoteDetails = false;
    }
}
