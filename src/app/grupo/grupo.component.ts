import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Grupo } from '../model/grupo';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  myForm: FormGroup;
  grupos = new Array<Grupo>();
  sideBarForm;

  constructor(private fb: FormBuilder,
              private service: GrupoService) {
    this.myForm = fb.group({
      id: [null],
      descricao: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  setFormSalvar() {
    const grupo = new Grupo();
    grupo.id = this.myForm.get('id').value ? this.myForm.get('id').value : null;
    grupo.descricao = this.myForm.get('descricao').value;
    this.salvar(grupo);
  }

  salvar(grupo) {
    this.service.salvar(grupo).subscribe(
      response => {
        this.pesquisar();
        this.fecharSidebar();
      }
    );
  }

  pesquisar() {
    this.service.listarTodos().subscribe(
      (response) => {
        this.grupos = response;
      }
    );
  }

  editar(id: number) {
    this.sideBarForm = true;
    let grupo = new Grupo();
    this.service.buscarPorId(id).subscribe(
      (response) => {
        grupo = response;
        this.myForm.get('id').setValue(grupo.id);
        this.myForm.get('descricao').setValue(grupo.descricao);
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

}
