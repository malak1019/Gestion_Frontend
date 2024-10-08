import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent {
  username: string | null = null;

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('username');
  }
}
