import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from './Components/add-aluno/add-aluno.component';
import { EditAlunoComponent } from './Components/edit-aluno/edit-aluno.component';
import { DeleteAlunoComponent } from './Components/delete-aluno/delete-aluno.component';
import { RegistroAlunoComponent } from './Components/registro-aluno/registro-aluno.component';
import { ListAlunoComponent } from './Components/list-aluno/list-aluno.component';
import { LoginAlunoComponent } from './Components/login-aluno/login-aluno.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddAlunoComponent,
  },
  {
    path: 'edit',
    component: EditAlunoComponent,
  },
  {
    path: 'delete',
    component: DeleteAlunoComponent,
  },
  {
    path: 'registro',
    component: RegistroAlunoComponent,
  },
  {
    path: 'list',
    component: ListAlunoComponent,
  },
  {
    path: 'login',
    component: LoginAlunoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
