import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ingresaJapon() {
    this.router.navigate(['/japan']);

   }

   ingresaChina() {
    this.router.navigate(['/china']);

   }

   ingresaCanada() {
    this.router.navigate(['/canada']);

   }

   ingresaFinlandia() {
    this.router.navigate(['/finlandia']);

   }

}
