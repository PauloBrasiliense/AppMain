import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PessoaProvider {

  private API_URL: string = 'http://localhost:3000/pessoa/';

  constructor(public http: HttpClient) {
    console.log('Hello PessoaProvider Provider');
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}
