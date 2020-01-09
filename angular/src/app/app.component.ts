import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  obs: Observable<object>;

  constructor(public http: HttpClient)
  {}

  pressami()
  {
    this.obs = this.http.get('https://3000-dee88a54-ff53-48b2-ae67-2146a6646213.ws-eu01.gitpod.io/users');
    this.obs.subscribe(this.leggiDati)
  }

  leggiDati = (dati:object) => {this.datiSalvati = dati};
}
