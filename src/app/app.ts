import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:[FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list-angular');
  task="";
  taskList:{id:number, task:string}[]=[];

  addTask(){
    this.taskList.push({id:this.taskList.length+1, task:this.task});

    console.log(this.taskList);
  }
}
