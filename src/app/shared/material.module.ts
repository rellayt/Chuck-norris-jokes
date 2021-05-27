import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    MatRippleModule,
    MaterialComponents,
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
