import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/medecin/admission/admission.component';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';

import { VaccinComponent } from './pages/medecin/vaccin/vaccin.component';
import { CroissanceMedComponent } from './pages/medecin/croissance-med/croissance-med.component';
import { SortieComponent } from './pages/medecin/sortie/sortie.component';
const routes: Routes = [
  {
    path: "Admission",
    component: AdmissionComponent
  },
  {
    path: "Sortie",
    component: SortieComponent
  },
  {
    path: "CroissanceMed",
    component: CroissanceMedComponent
  },
  {
    path: "vaccin",
    component: VaccinComponent
  },


  {
    path: "EvolutionMedical",
    component: EvolMedComponent
  },
  {
    path: "ExamenCliniqueInitial",
    component: ExamInitialComponent
  },
  {
    path: "",
    component: AdmissionComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
