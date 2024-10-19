import { Routes } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component";
import { SignupComponent } from "./pages/signup/signup.component";

export const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "signup", component: SignupComponent },
];
