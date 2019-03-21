import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  name = new FormControl();
  constructor() { }

  ngOnInit() {
    this.name.setValue("");
  }

  updateName() {
    this.name.setValue('Nico');
  }

}
