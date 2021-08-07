import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  url = 'http://localhost:3000/Alunos';
  constructor(private http: HttpClient) {}

  getAllAlunos() {

    return this.http.get(this.url);
  }

  saveAlunoData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
}
