import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    isError = false;
    ErrMessage = '';
  OriginalUserSettings: UserSettings =   {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    SubscriptionType: null,
    notes: null
    /* name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    SubscriptionType: 'Lifetime',
    notes: 'Im Notes'  */
  };
  UserSettings: UserSettings = {...this.OriginalUserSettings};

SubscriptionTypes: Observable<string[]>;

  constructor( private DataServices: DataService ) { }

  ngOnInit(): void {

 this.SubscriptionTypes = this.DataServices.getOptions();

  }

  HttpError(error: any): void {
  this.isError = true;
  this.ErrMessage = error.error.errMessage;
}

  submit(form: NgForm): void {
    if (form.valid) {
      this.DataServices.PostUserSettingsData(this.UserSettings).subscribe (
        result => {  this.isError = false; console.log(result); /*  this.UserSettings = result  */ },
        error => { console.log(error); this.HttpError(error);
        }
      );
  }
  else {
    this.isError = true;
    this.ErrMessage = `Check your inputs`;
  }
  }

}
