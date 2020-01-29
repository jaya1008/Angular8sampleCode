export class Product
{
    pid:number;
    pname:string;
    price:number;
    qty:number;
    desc:string;
    discount:number;
    constructor(p:number,pnm:string,pr:number,q:number,d:string,di:number)
    {
        this.pid=p;
        this.pname=pnm;
        this.price=pr;
        this.qty=q;
        this.desc=d;
        this.discount=di;
    }
}