import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,  RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule , RouterModule, NavbarComponent  ],
  template: `
    <div>
      <app-navbar></app-navbar>
      <h1>Welcome to Bookstore</h1>
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = "book"
}

