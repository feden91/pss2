import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { LoginData } from "../app/entities/loginData";

@Injectable()
export class AppService {

  constructor(private http: Http, private storage: Storage) {

  }

  getToken(loginData: LoginData) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let jsonLoginData = JSON.stringify(loginData);
    return this.http.post("http://localhost:80/jwt/token", jsonLoginData, options).toPromise();
  }

  //use when you need logout to clear the user data.
  clearStorageData() {
    this.storage.clear().then(() => console.log("Storage data has been deleted"));
  }

  getPermissionsByUserRol(jwt) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("jwt", jwt);
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/permissions", options).toPromise();
  }

altaEncuest(encuesta){

 let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("Encuestas",encuesta );
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:80/jwt/Encuesta", options).toPromise();



}


  logOut(){
    this.clearStorageData();
  }
}
