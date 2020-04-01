import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresaHome() {
    this.router.navigate(['/dashboard']);

   }

}
