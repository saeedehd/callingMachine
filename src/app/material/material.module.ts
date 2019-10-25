import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSnackBarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatMenuModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatTooltipModule,
  MatSortModule
} from '@angular/material';

const MaterialComponents = [
  MatSidenavModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatTooltipModule,
  MatSortModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
