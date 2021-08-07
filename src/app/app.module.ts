import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoComponent } from './Components/add-aluno/add-aluno.component';
import { EditAlunoComponent } from './Components/edit-aluno/edit-aluno.component';
import { DeleteAlunoComponent } from './Components/delete-aluno/delete-aluno.component';
import { ListAlunoComponent } from './Components/list-aluno/list-aluno.component';
import { RegistroAlunoComponent } from './Components/registro-aluno/registro-aluno.component';
import { LoginAlunoComponent } from './Components/login-aluno/login-aluno.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddAlunoComponent,
    EditAlunoComponent,
    DeleteAlunoComponent,
    ListAlunoComponent,
    RegistroAlunoComponent,
    LoginAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
