import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  getAllAlunos(){
    var url = "http://localhost:3000/Alunos";
    return this.http.get(url);
  }
}
