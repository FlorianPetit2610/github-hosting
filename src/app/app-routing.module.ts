import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/medecin/admission/admission.component';
import { AtcdFamComponent } from './pages/medecin/atcd-fam/atcd-fam.component';
import { ContexteFamilialComponent } from './pages/Soignant/contexte-familial/contexte-familial.component';
import { CroissanceComponent } from './pages/Soignant/croissance/croissance.component';
import { KineEtOrtoComponent } from './pages/Soignant/kine-et-orto/kine-et-orto.component';
import { PrepaSortieComponent } from './pages/Soignant/prepa-sortie/prepa-sortie.component';
import { PsychoComponent } from './pages/Soignant/psycho/psycho.component';
import { AutorisationDeSoinComponent } from './pages/Soignant/autorisation-de-soin/autorisation-de-soin.component';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';
import { GrosssessePeriodeNeonatComponent } from './pages/medecin/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
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
    path: "grosssessePeriodeNeonat",
    component: GrosssessePeriodeNeonatComponent
  },
  {
    path: "croissance",
    component: CroissanceComponent
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
  {
    path: "atcdFam",
    component: AtcdFamComponent
  },
  {
    path: "contexteFamilial",
    component: ContexteFamilialComponent
  },
  {
    path: "croissance",
    component: CroissanceComponent
  },
  {
    path: "KineEtOrto",
    component: KineEtOrtoComponent
  },
  {
    path: "PreparationALaSortie",
    component: PrepaSortieComponent
  },
  {
    path: "psycho",
    component: PsychoComponent
  },
  {
    path: "AutoSoins",
    component: AutorisationDeSoinComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
