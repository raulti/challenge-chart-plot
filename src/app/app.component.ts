import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container fullscreen>
      <mat-sidenav-content fxLayout="column">
          <!-- header -->
          <app-header></app-header>

          <!-- routes will be rendered here -->
          <main class="container mat-app-background">
            <router-outlet></router-outlet>
          </main>

          <!-- footer -->
          <!-- <app-footer></app-footer> -->
        </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ['html, body {height: 100%; box-sizing: border-box; margin: 0;}']
})
export class AppComponent {
  title = 'chart';
}
