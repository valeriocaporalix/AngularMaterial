import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
