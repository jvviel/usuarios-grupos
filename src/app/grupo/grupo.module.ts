import { GrupoComponent } from './grupo.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      GrupoComponent
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
      GrupoComponent
    ]
  })

  export class GrupoModule {}
