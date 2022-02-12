import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
})
export class RechercheComponent implements OnInit {
  name = '';
  constructor(private route: Router) {}

  ngOnInit(): void {}

  submitForm() {
    this.name.trim() == ''
      ? this.route.navigate(['/home'])
      : this.route.navigate(['/ecole', this.name]);
  }
}
