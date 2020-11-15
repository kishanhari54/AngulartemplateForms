import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  putsReq = 'https://putsreq.com/7Sx5EMRdkAxbngH03Fac';

  constructor(private Http: HttpClient ) { }

  /* PostUserSettingsData(userSettings: UserSettings): Observable<UserSettings>  {
    return this.Http.post<UserSettings>('url', userSettings);
    //return of(userSettings);
  } */
  httpParams: {} =  { params: new HttpParams().set('name', 'Test') };
  PostUserSettingsData(userSettings: UserSettings): Observable<any>  {
    return this.Http.post<any>(this.putsReq, userSettings, this.httpParams);
  }

  getOptions(): Observable<string[]> {
    return of(['One', 'two', 'three']);
    /* throw new Error('Method not implemented.'); */
  }

}
