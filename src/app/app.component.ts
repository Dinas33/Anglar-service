import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { NavFooterComponent } from "./nav-footer/nav-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, NavFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anglarservice';
}
