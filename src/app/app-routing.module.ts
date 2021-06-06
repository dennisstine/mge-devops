import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ToolsComponent } from "./tools/tools.component";
import { EnvironmentsComponent } from "./environments/environments.component";
import { DocumentationComponent } from "./documentation/documentation.component";
import { ExternalComponent } from "./external/external.component";
import { OtherComponent } from "./other/other.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'tools', component: ToolsComponent },
  { path: 'envs', component: EnvironmentsComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'external', component: ExternalComponent },
  { path: 'other', component: OtherComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
