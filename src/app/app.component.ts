import {Component, OnInit} from '@angular/core';
import {Person} from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  person: Person;

  ngOnInit() {
    this.person = new Person();
    this.person.sex = true;
  }

  submit() {
    console.log(JSON.stringify(this.person));
  }
}
