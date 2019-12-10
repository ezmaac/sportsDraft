import { NgModule } from  '@angular/core';
import { MatToolbarModule,
         MatTabsModule,
         MatDialogModule,
         MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatIconModule,
         MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatTableModule,
         MatSortModule,
         MatProgressSpinnerModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatSnackBarModule } from '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatSliderModule,
    MatTabsModule,
    MatRadioModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class MyMaterialModule { }
