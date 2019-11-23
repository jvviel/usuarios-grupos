import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { GrupoService } from '../service/grupo.service';
import { Grupo } from '../model/grupo';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  myForm: FormGroup;
  idGrupo: Grupo;
  public users = new Array<Usuario>();
  sideBarForm;
  grupos: SelectItem[] = [];
  gruposResponse: Array<Grupo> = [];

  constructor(
    private service: UsuarioService,
    private fb: FormBuilder,
    private serviceGrupo: GrupoService
  ) {
    this.myForm = fb.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  ngOnInit() {

    this.pesquisar();
    this.buscarGrupos();
  }


  setFormSalvar() {
    const usuario = new Usuario();
    usuario.id = this.myForm.get('id').value ? this.myForm.get('id').value : null;
    usuario.nome = this.myForm.get('nome').value;
    usuario.email = this.myForm.get('email').value;
    usuario.login = this.myForm.get('login').value;
    usuario.senha = this.myForm.get('senha').value;
    usuario.grupo = this.idGrupo;
    this.salvar(usuario);
  }

  salvar(usuario) {
    this.service.salvar(usuario).subscribe(
      response => {
        this.pesquisar();
        this.fecharSidebar();
      }
    );
  }

  pesquisar() {
    this.service.listarTodos().subscribe(
      (response) => {
        this.users = response;
      }
    );
  }

  editar(id: number) {
    this.sideBarForm = true;
    let usuario = new Usuario();
    this.service.buscarPorId(id).subscribe(
      (response) => {
        usuario = response;
        this.myForm.get('id').setValue(usuario.id);
        this.myForm.get('nome').setValue(usuario.nome);
        this.myForm.get('email').setValue(usuario.email);
        this.myForm.get('login').setValue(usuario.login);
        this.myForm.get('senha').setValue(usuario.senha);
        this.idGrupo = usuario.grupo;
      }
    );
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(
      (resp) => {
        this.pesquisar();
      }
    );
  }

  abrirSidebar() {
    this.sideBarForm = true;
    this.limpar();
  }

  fecharSidebar() {
    this.sideBarForm = false;
    this.limpar();
  }

  limpar() {
    this.myForm.reset();
  }

  buscarGrupos() {
    this.serviceGrupo.listarTodos().subscribe(
      (response) => {
        this.gruposResponse = response;
        this.gruposResponse.forEach(grupo => {
          this.grupos.push({value: grupo.id, label: grupo.descricao});
        });
        console.log(this.grupos);
      }
    );
  }
}
