import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
 
private URL = process.env.URL;

constructor(
    private http: HttpClient
    ) { }

getTasks(){
return this.http.get(this.URL + `/tasks`);
// .subscribe(
//   res=> console.log(res),
//   er=>console.log(er)
// )
}
getPrivateTasks(){
  return this.http.get(this.URL + `/private-tasks`);
  // .subscribe(
  //   res=> console.log(res),
  //   er=>console.log(er)
  // )
  }
}
