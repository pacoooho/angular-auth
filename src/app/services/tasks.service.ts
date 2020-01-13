import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
// private URL = `https://api-pac.herokuapp.com/api`
private URL = `http://localhost:4000/api`

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
