import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlPadrao = 'http://localhost:8080/usuarios/';

  constructor(private http: HttpClient) { }

  public listarTodos(): Observable<any> {
    return this.http.get<any>(this.urlPadrao);
  }

  public salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.urlPadrao, usuario);
  }

  public buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(this.urlPadrao + 'busca/' + id);
  }

  public excluir(id: number): Observable<any> {
    return this.http.delete<any>(this.urlPadrao + id);
  }
}
