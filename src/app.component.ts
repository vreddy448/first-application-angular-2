import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'hello-world',
  template: `<h3>Angular 2</h3>
                <button (click)="getDataOnClick()">Get Data</button>
                <p>{{getData}}</p>
                <button (click)="postDataOnClick()">Post Data</button>
                <p>{{postData}}</p>`,
    providers : [AppService]
})
export class AppComponent {
    getData:string;
    postData:string;

  constructor(private service:AppService){}


    getDataOnClick() {
     this.service.getSampleServiceResponse().subscribe( data => this.getData = JSON.stringify(data));
  }

    postDataOnClick() {
        this.service.postData().subscribe( data => this.postData = JSON.stringify(data));
    }
}