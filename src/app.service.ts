import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private http:Http){}

    getSampleServiceResponse() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/2').map(res => res.json());
    }

    postData() {
        return this.http.post('https://reqres.in/api/users', {
            "name": "venkat",
            "job": "leader"
        }).map(res => res.json());
    }
}