import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';





import { AdmissionComponent } from './pages/medecin/admission/admission.component';
import { ToolbarMedComponent } from './partials/toolbar-med/toolbar-med.component';
import { AtcdFamComponent } from './pages/medecin/atcd-fam/atcd-fam.component';
import { CroissanceMedComponent } from './pages/medecin/croissance-med/croissance-med.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';

import { SortieComponent } from './pages/medecin/sortie/sortie.component';
import { VaccinComponent } from './pages/medecin/vaccin/vaccin.component';



@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    ToolbarMedComponent,
    AtcdFamComponent,
    CroissanceMedComponent,
    EvolMedComponent,
    ExamInitialComponent,
    SortieComponent,
    VaccinComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
