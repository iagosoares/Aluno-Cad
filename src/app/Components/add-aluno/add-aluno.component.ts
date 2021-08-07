import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlunosService } from 'src/app/alunos.service';


@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css'],
})
export class AddAlunoComponent implements OnInit {
  constructor(private aluno : AlunosService) {}

  addAluno = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    contato: new FormControl(),
  });

  ngOnInit(): void {}

  SaveData() {

    this.aluno.saveAlunoData(this.addAluno.value).subscribe((resultado)=>{
      console.log(resultado)
    });
  }
}
