import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: any;

  constructor(private auth: Auth) { }

  async login()  {
    const credentials = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.currentUser = credentials.user;
    console.log(credentials);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
