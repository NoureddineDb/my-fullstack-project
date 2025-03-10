import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToPage(page: string): void {

    if (page === 'list') {
      this.router.navigate(['/list']);
    } else if (page === 'add') {
      this.router.navigate(['/add']);
    } else if (page === 'edit') {
      this.router.navigate(['/edit']);
    }
  }
}
