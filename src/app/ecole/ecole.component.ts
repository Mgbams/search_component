import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css'],
})
export class EcoleComponent implements OnInit {
  title = 'Etudiant info';
  name!: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let studentName = params.get('NOM_ETUDIANT');
      this.name = studentName ? studentName : '';
    });

    this._snackBar.open(`Bienvenue ${this.name}`, 'Dismiss!', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar-success'],
    });
  }
}
