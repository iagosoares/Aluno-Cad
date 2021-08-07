import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/alunos.service';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  constructor(private alunos: AlunosService) { }

  alunoData = <any>[];

  ngOnInit(): void {
    this.alunos.getAllAlunos().subscribe((allData)=>{
      console.log(allData);
      this.alunoData =  allData;


    });
  }

}
