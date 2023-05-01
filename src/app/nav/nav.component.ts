import { Component, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() logoUrl: string = '../../assets/img/Mikmo 3.PNG';

  constructor(private authService: AuthService) { }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    return this.authService.logout();
  }
}
