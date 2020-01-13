import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

tasks = [];

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
this.tasksService.getTasks()
.subscribe(
  res=>{
    console.log("res");
    console.log(res);
    //this.tasks = res.tasks; 
  },
  er => {console.log("eeeeeeeeeeeeeeee");
  // console.log(er.error.er.message);
    
      this.authService.logout();
      this.router.navigate(['/signin'])
   
  }
)

  }

}
