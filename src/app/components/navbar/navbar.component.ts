import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RouterLink} from "@angular/router";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public authService: AuthService,
              public storeService: StoreService) {
  }
}
