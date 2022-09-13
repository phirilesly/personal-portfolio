import { Component, OnInit } from '@angular/core';
import { Layout } from 'app/layout/layout.types';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

   var typed = new Typed(".input", {
      strings:["Software Engineer.","Backend Developer."],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true
  });
  


  }





}
