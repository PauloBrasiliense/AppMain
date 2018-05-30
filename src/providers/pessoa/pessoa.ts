import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPessoa } from 'interfaces/iIPessoa';

@Injectable()
export class PessoaProvider {

  private API_URL: string = 'http://localhost:3000/pessoa/';

  constructor(private _http: HttpClient) {
    console.log('Hello PessoaProvider Provider');
  }

  lista(){

    return this._http.get<IPessoa[]>('http://localhost:3000/pessoa/')
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + id;
 
      this._http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}
