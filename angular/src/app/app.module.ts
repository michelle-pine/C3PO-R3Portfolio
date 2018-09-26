import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { TreeModule } from "angular-tree-component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination'
import { ChartsModule } from 'ng2-charts';



import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BackgroundComponent } from "./components/background/background.component";
import { SitesComponent } from "./components/sites/sites.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LoginComponent } from "./components/login/login.component";
import { C3poComponent } from "./components/background/c3po/c3po.component";
import { C3poQiComponent } from "./components/background/c3po-qi/c3po-qi.component";
import { C3poR3Component } from "./components/background/c3po-r3/c3po-r3.component";
import { UserMenuComponent } from "./components/user/user-menu/user-menu.component";
import { LoginService } from "./components/user/login.service";
import { HttpClient } from "selenium-webdriver/http";
import { AppComponent } from "./app.component";
import { AddCaseComponent } from "./components/user/add-case/add-case.component";
import { CaseLookupComponent } from "./components/user/case-lookup/case-lookup.component";
import { ManageReportsComponent } from "./components/user/manage-reports/manage-reports.component";
import { PreCalcComponent } from "./components/user/add-case/pre-calc/pre-calc.component";
import { CaseIdComponent } from "./components/user/add-case/case-id/case-id.component";
import { ClinicalCharacteristicsComponent } from "./components/user/add-case/clinical-characteristics/clinical-characteristics.component";
import { ProcedureCharacteristicsComponent } from "./components/user/add-case/procedure-characteristics/procedure-characteristics.component";
import { HemodynamicsComponent } from "./components/user/add-case/hemodynamics/hemodynamics.component";
import { CaseTypesComponent } from "./components/user/add-case/case-types/case-types.component";
import { AdverseEventsComponent } from "./components/user/add-case/adverse-events/adverse-events.component";
import { IndicatorsComponent } from "./components/user/add-case/indicators/indicators.component";
import { EocComponent } from "./components/user/add-case/eoc/eoc.component";
import { C3poCharmComponent } from "./components/background/c3po-charm/c3po-charm.component";

import { CalculatorService } from "./components/calculator/calculator.service";
import { CalcCharacteristicsComponent } from "./components/calculator/calc-characteristics/calc-characteristics.component";
import { CaseTypesEntryComponent } from "./components/shared-data-entry/case-types-entry/case-types-entry.component";

import { ModalComponent } from "./components/modal/modal.component";
import { HemosComponent } from "./components/shared-data-entry/hemos/hemos.component";
import { HemoModalComponent } from "./components/modal/hemo-modal/hemo-modal.component";
import { StsModalComponent } from "./components/modal/sts-modal/sts-modal.component";
import { HemosService } from "./components/shared-data-entry/hemos/hemos.service";
import { CaseTypesEntryService } from "./components/shared-data-entry/case-types-entry/case-types-entry.service";
import { CrispCatComponent } from "./components/shared-data-entry/hemos/crisp-cat/crisp-cat.component";
import { CrispCatSelectService } from "./components/shared-data-entry/hemos/crisp-cat/crisp-cat-select.service";

import { NgSelectModule } from "@ng-select/ng-select";
import { StsTreeComponent } from "./components/modal/sts-tree/sts-tree.component";
import { InfoModalComponent } from "./components/modal/info-modal/info-modal.component";
import { InfoModalServiceService } from "./components/modal/info-modal/info-modal-service.service";
import { TitleService } from "./title.service";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { Routing } from "./routing";
import { ManageUsersComponent } from './components/user/manage-users/manage-users.component';
import { UserManagementService } from "./components/user/manage-users/user-management.service";
import { UserInfoModalComponent } from './components/modal/user-info-modal/user-info-modal.component';
import { AdverseEventsReportService } from "./components/user/manage-reports/report-services/adverse-events-report.service";
import { CaseTypeService } from "./components/user/manage-reports/report-services/case-type.service";
import { CharacteristicsService } from "./components/user/manage-reports/report-services/characteristics.service";
import { DateRangeService } from "./components/user/manage-reports/report-services/date-range.service";
import { HemoVariablesService } from "./components/user/manage-reports/report-services/hemo-variables.service";
import { RadiationService } from "./components/user/manage-reports/report-services/radiation.service";
import { RiskAdjustmentService } from "./components/user/manage-reports/report-services/risk-adjustment.service";
import { RiskTypeService } from "./components/user/manage-reports/report-services/risk-type.service";
import { ColorServiceService } from "./components/user/manage-reports/report-services/color-service.service";
import { ProcedureModalComponent } from './components/modal/procedure-modal/procedure-modal.component';
import { AlertComponent } from './components/modal/alert/alert.component';
import { LoginCardComponent } from './components/login/login-card/login-card.component';
import { MissingFieldsComponent } from "./components/user/add-case/missing-fields/missing-fields.component";
import { CaseFieldsService } from "./components/user/add-case/case-fields.service";
import { ValidationPipe } from './pipes/validation.pipe';
import { AgeComponent } from './components/calculator/age/age.component';
import { SectionValidatePipe } from './pipes/section-validate.pipe';
import { PublicationsComponent } from './components/publications/publications.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundComponent,
    SitesComponent,
    CalculatorComponent,
    ContactComponent,
    LoginComponent,
    C3poComponent,
    C3poQiComponent,
    C3poR3Component,
    UserMenuComponent,
    AddCaseComponent,
    ManageReportsComponent,
    CaseLookupComponent,
    PreCalcComponent,
    CaseIdComponent,
    ClinicalCharacteristicsComponent,
    ProcedureCharacteristicsComponent,
    HemodynamicsComponent,
    CaseTypesComponent,
    AdverseEventsComponent,
    IndicatorsComponent,
    EocComponent,
    C3poCharmComponent,
    CalcCharacteristicsComponent,
    CaseTypesEntryComponent,
    HemosComponent,
    HemoModalComponent,
    ModalComponent,
    StsModalComponent,
    CrispCatComponent,
    StsTreeComponent, 
    InfoModalComponent,
    ForgotPasswordComponent,
    ManageUsersComponent,
    UserInfoModalComponent,
    ProcedureModalComponent,
    AlertComponent,
    LoginCardComponent,
    MissingFieldsComponent,
    ValidationPipe,
    AgeComponent,
    SectionValidatePipe,
    PublicationsComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TreeModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    Routing,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [
    TitleService,
    LoginService,
    CalculatorService,
    HemosService,
    CaseTypesEntryService,
    CrispCatSelectService,
    InfoModalServiceService,
    UserManagementService,
    AdverseEventsReportService,
    CaseTypeService,
    CharacteristicsService,
    DateRangeService,
    HemoVariablesService,
    RadiationService,
    RiskAdjustmentService,
    RiskTypeService,
    ColorServiceService,

    CaseFieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
