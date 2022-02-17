import {NgModule} from "@angular/core"
import{Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component"
import { PeoplesComponent } from "./peoples/peoples.component";

const routes: Routes =[
  {path: "",component: HomeComponent},
  {path: "peoples",component: PeoplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
