import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  OriginalUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    SubscriptionType: 'Lifetime',
    notes: 'Im Notes'
  };

  UserSettings: UserSettings = {...this.OriginalUserSettings};
  constructor() { }

  ngOnInit(): void {
  }

}
