import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { BackgroundComponent } from "./components/background/background.component";
import { C3poCharmComponent } from "./components/background/c3po-charm/c3po-charm.component";
import { C3poQiComponent } from "./components/background/c3po-qi/c3po-qi.component";
import { C3poR3Component } from "./components/background/c3po-r3/c3po-r3.component";
import { SitesComponent } from "./components/sites/sites.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LoginComponent } from "./components/login/login.component";
import { UserMenuComponent } from "./components/user/user-menu/user-menu.component";
import { AddCaseComponent } from "./components/user/add-case/add-case.component";
import { PreCalcComponent } from "./components/user/add-case/pre-calc/pre-calc.component";
import { CaseIdComponent } from "./components/user/add-case/case-id/case-id.component";
import { ClinicalCharacteristicsComponent } from "./components/user/add-case/clinical-characteristics/clinical-characteristics.component";
import { ProcedureCharacteristicsComponent } from "./components/user/add-case/procedure-characteristics/procedure-characteristics.component";
import { HemodynamicsComponent } from "./components/user/add-case/hemodynamics/hemodynamics.component";
import { CaseTypesComponent } from "./components/user/add-case/case-types/case-types.component";
import { AdverseEventsComponent } from "./components/user/add-case/adverse-events/adverse-events.component";
import { IndicatorsComponent } from "./components/user/add-case/indicators/indicators.component";
import { EocComponent } from "./components/user/add-case/eoc/eoc.component";
import { CaseLookupComponent } from "./components/user/case-lookup/case-lookup.component";
import { ManageReportsComponent } from "./components/user/manage-reports/manage-reports.component";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { ManageUsersComponent } from "./components/user/manage-users/manage-users.component";
import { C3poComponent } from "./components/background/c3po/c3po.component";
import { MissingFieldsComponent } from "./components/user/add-case/missing-fields/missing-fields.component";
import { PublicationsComponent } from "./components/publications/publications.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
    data: { title: "Home" }
  },
  {
    path: "about",
    children: [
      { path: "", redirectTo: "background", pathMatch: "full" },
      {
        path: "background",
        component: BackgroundComponent,
        data: { title: "Background" },
        children: [
          {
            path: "",
            redirectTo: "c3po",
            pathMatch: "full",
            data: { title: "Background" }
          },
          {
            path: "c3po",
            component: C3poComponent,
            pathMatch: "full",
            data: {
              title: "Background",
              next: "/about/background/c3po-charm",
              prev: "/about/background/c3po-r3"
            }
          },
          {
            path: "c3po-charm",
            component: C3poCharmComponent,
            pathMatch: "full",
            data: {
              title: "Background",
              next: "/about/background/c3po-qi",
              prev: "/about/background/c3po"
            }
          },
          {
            path: "c3po-qi",
            component: C3poQiComponent,
            pathMatch: "full",
            data: {
              title: "Background",
              next: "/about/background/c3po-r3",
              prev: "/about/background/c3po-charm"
            }
          },
          {
            path: "c3po-r3",
            component: C3poR3Component,
            pathMatch: "full",
            data: {
              title: "Background",
              next: "/about/background/c3po",
              prev: "/about/background/c3po-qi"
            }
          }
        ]
      },
      {
        path: "sites",
        component: SitesComponent,
        data: { title: "Participating Sites" }
      }
    ]
  },

  {
    path: "calculator",
    component: CalculatorComponent,
    data: { title: "Calculator" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact" }
  },
  {
    path: "publications",
    component: PublicationsComponent,
    data: { title: "Publications" }
  },
  {
    path: "login",
    children: [
      {
        path: "",
        pathMatch: "full",
        data: { title: "Login" },
        component: LoginComponent
      },
      {
        path: "forgot-password",
        pathMatch: "full",
        component: ForgotPasswordComponent,
        data: { title: "Forgot Password" }
      }
    ]
  },
  {
    path: "user-portal",

    children: [
      { path: "", redirectTo: "user-menu", pathMatch: "full" },
      {
        path: "user-menu",
        pathMatch: "full",
        component: UserMenuComponent,
        data: { title: "User Home" }
      },
      {
        path: "add-case",
        component: AddCaseComponent,
        data: { title: "Add Case" },
        children: [
          {
            path: "",
            redirectTo: "pre-calc",
            pathMatch: "full",
            data: { title: "Add Case" }
          },
          {
            path: "pre-calc",
            component: PreCalcComponent,
            data: {
              title: "Add Case",
              pathMatch: "full",
              next: "/user-portal/add-case/case-id",
              prev: "./"
            }
          },
          {
            path: "case-id",
            component: CaseIdComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/clinical-characteristics",
              prev: "/user-portal/add-case/pre-calc"
            }
          },
          {
            path: "clinical-characteristics",
            component: ClinicalCharacteristicsComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/procedure-characteristics",
              prev: "/user-portal/add-case/case-id"
            }
          },
          {
            path: "procedure-characteristics",
            component: ProcedureCharacteristicsComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/hemodynamics",
              prev: "/user-portal/add-case/clinical-characteristics"
            }
          },
          {
            path: "hemodynamics",
            component: HemodynamicsComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/case-types",
              prev: "/user-portal/add-case/procedure-characteristics"
            }
          },
          {
            path: "case-types",
            component: CaseTypesComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/adverse-events",
              prev: "/user-portal/add-case/hemodynamics"
            }
          },
          {
            path: "adverse-events",
            component: AdverseEventsComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/indicators",
              prev: "/user-portal/add-case/case-types"
            }
          },
          {
            path: "indicators",
            component: IndicatorsComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/eoc",
              prev: "/user-portal/add-case/adverse-events"
            }
          },
          {
            path: "eoc",
            component: EocComponent,
            data: {
              title: "Add Case",
              next: "/user-portal/add-case/save",
              prev: "/user-portal/add-case/indicators"
            }
          },
          {
            path: "save",
            component: MissingFieldsComponent,
            data: {
              title: "Add Case",
              next: "./",
              prev: "/user-portal/add-case/eoc"
            }
          }
        ]
      },
      {
        path: "case-lookup",
        component: CaseLookupComponent,
        data: { title: "Case Lookup" },
        pathMatch: "full"
      },
      {
        path: "manage-reports",
        component: ManageReportsComponent,
        data: { title: "Manage Reports" },
        pathMatch: "full"
      },
      {
        path: "manage-users",
        component: ManageUsersComponent,
        data: { title: "Manage Users" },
        pathMatch: "full"
      }
    ]
  },

  { path: "**", redirectTo: "home" }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true
});
