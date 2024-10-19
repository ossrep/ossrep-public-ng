import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLinkActive, NgbCollapse, RouterLink ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  appTitle = environment.app.title;
  isCollapsed: boolean = false;
}
