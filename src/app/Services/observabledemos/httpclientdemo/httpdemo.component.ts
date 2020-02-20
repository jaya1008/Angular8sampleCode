import { NgModule, Component } from "@angular/core";

import {
 
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";


@Component({
  selector: "app-http",
  template: `
 <div class="row">
  <div class="m-t-1">
  	<button class="btn btn-primary" (click)="doGET()">GET</button>
  	<button class="btn btn-primary" (click)="doPOST()">POST</button>
  	<button class="btn btn-primary" (click)="doPUT()">PUT</button>
  	<button class="btn btn-primary" (click)="doDELETE()">DELETE</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-secondary" (click)="doGETAsPromise()">As Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsPromiseError()">Error as Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsObservableError()">Error as Observable</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-danger" (click)="doGETWithHeaders()">With Headers</button>
	</div>
</div>
 `
})
export class HttpDemo
{
    apiRoot: string = "https://httpbin.org";

  constructor(private http: HttpClient) {}

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    console.log(url);
   let url1= "https://httpbin.org/get";
    const httpOptions = {
      params: new HttpParams().set("name", "Jayshree").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(res => console.log(res));
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set("name", "Jayshree").set("limit", "25")
    };
    this.http
      .post(url, { cname: "SM", location: "FC Road" }, httpOptions)
      .subscribe(res => console.log(res));
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set("name", "Jayshree C").set("limit", "25")
    };
    this.http
      .put(url, { cname: "CDAC", location: "Pashan" }, httpOptions)
      .subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("name", "Madhura").set("limit", "25")
    };
    this.http.delete(url, httpOptions).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa("username:password")
      })
    };

    let url = `${this.apiRoot}/get`;

    this.http
      .get(url, httpOptions)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
 /**HTTP headers are bits of meta-data which the browser attaches to your HTTP requests when it sends them to the server.
  * We covert username:password to a base64 string and pass that to the server via a header called Authorization
  */
}