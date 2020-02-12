import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  intervenant: any;
  public donnees = [];
  link_url = "http://app.joinpuzzle.com/public/uploads/images/intervenant/";
  api = "http://app.joinpuzzle.com/public/api/intervenants.json";

  constructor(public http: HttpClient) {
    console.log('Ici la connexion à l\'api tous passe nickel');
    this.getIntervenant()
  }
  getIntervenant() {
    return new Promise(resolve => {
      this.http.get(this.api).subscribe(data => {
        resolve(data);
        this.donnees = data
        console.log(this.donnees);
      }, err => {
        console.log(err);
      });
    });
  }

  doRefresh(event) {
    setTimeout(() =>{
      this.getIntervenant(this.api, 1, false)
        .then(() => {
          event.target.complete();
        })
        .catch(() => {
          event.target.complete();
        });
    },3000)
    
  }

  // getIntervenant() {
  //   setTimeout(() => {
  //     return new Promise(resolve => {
  //       this.http.get(this.api).subscribe(data => {
  //         resolve(data);
  //         this.donnees = data
  //         console.log(this.donnees);
  //       }, err => {
  //         console.log(err);
  //       });
  //     });
  //   }, 5000);
  // }
}
