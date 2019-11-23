import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    declarations: [
      UsuarioComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      PaginatorModule,
      TableModule,
      SidebarModule,
      FormsModule,
      DialogModule,
      DropdownModule,
      PasswordModule,
      ReactiveFormsModule,
    ],
    exports: [
      UsuarioComponent
    ]
  })
  export class UsuarioModule { }
