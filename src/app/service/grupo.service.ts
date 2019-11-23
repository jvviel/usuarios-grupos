import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../model/grupo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    urlPadrao = 'http://localhost:8080/grupos/';

    constructor(private http: HttpClient) { }

    public listarTodos(): Observable<any> {
        return this.http.get<any>(this.urlPadrao);
    }

    public salvar(grupo: Grupo): Observable<any> {
        return this.http.post<any>(this.urlPadrao, grupo);
    }

    public buscarPorId(id: number): Observable<any> {
        return this.http.get<any>(this.urlPadrao + 'busca/' + id);
    }

    public excluir(id: number): Observable<any> {
        return this.http.delete<any>(this.urlPadrao + id);
    }
}