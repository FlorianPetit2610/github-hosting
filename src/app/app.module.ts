import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';



import { AdmissionComponent } from './pages/medecin/admission/admission.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import { ToolbarMedComponent } from './partials/toolbar-med/toolbar-med.component';
import { AtcdFamComponent } from './pages/medecin/atcd-fam/atcd-fam.component';
import { CroissanceMedComponent } from './pages/medecin/croissance-med/croissance-med.component';
import { EvolMedComponent } from './pages/medecin/evol-med/evol-med.component';
import { ExamInitialComponent } from './pages/medecin/exam-initial/exam-initial.component';
import { GrosssessePeriodeNeonatComponent } from './pages/medecin/grosssesse-periode-neonat/grosssesse-periode-neonat.component';
import { SortieComponent } from './pages/medecin/sortie/sortie.component';
import { VaccinComponent } from './pages/medecin/vaccin/vaccin.component';
import { ContexteFamilialComponent } from './pages/Soignant/contexte-familial/contexte-familial.component';
import { CroissanceComponent } from './pages/Soignant/croissance/croissance.component';
import { KineEtOrtoComponent } from './pages/Soignant/kine-et-orto/kine-et-orto.component';
import { PsychoComponent } from './pages/Soignant/psycho/psycho.component';
import { ReceuilDeDonnesPiedatriquesComponent } from './pages/Soignant/receuil-de-donnes-piedatriques/receuil-de-donnes-piedatriques.component';
import { KinesComponent } from './pages/Soignant/kines/kines.component';
import { OrthophonisteComponent } from './pages/Soignant/orthophoniste/orthophoniste.component';
import { PrepaSortieComponent } from './pages/Soignant/prepa-sortie/prepa-sortie.component';
import { AutorisationDeSoinComponent } from './pages/Soignant/autorisation-de-soin/autorisation-de-soin.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    ToolbarComponent,
    ToolbarMedComponent,
    AtcdFamComponent,
    CroissanceMedComponent,
    EvolMedComponent,
    ExamInitialComponent,
    GrosssessePeriodeNeonatComponent,
    SortieComponent,
    VaccinComponent,
    ContexteFamilialComponent,
    CroissanceComponent,
    KineEtOrtoComponent,
    PsychoComponent,
    ReceuilDeDonnesPiedatriquesComponent,
    KinesComponent,
    OrthophonisteComponent,
    PrepaSortieComponent,
    AutorisationDeSoinComponent,
    AcceuilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
