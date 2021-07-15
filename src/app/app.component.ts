import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container fullscreen style="background-color: #ffffff">
      <mat-sidenav-content fxLayout="column">
          <!-- header -->
          <app-header></app-header>

          <!-- routes will be rendered here -->
            <router-outlet></router-outlet>

        <br>
          <!-- footer -->
           <app-footer></app-footer> 
        </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class AppComponent {
  title = 'chart';
}
