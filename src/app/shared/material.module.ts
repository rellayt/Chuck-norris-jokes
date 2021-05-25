import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
];

@NgModule({
  imports: [
    MatRippleModule,
    MaterialComponents,
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
