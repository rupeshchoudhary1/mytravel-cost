// app.component.ts
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CostCalculatorComponent } from './cost-calculator/cost-calculator.component';
import { BookingComponent } from './booking/booking.component';
import { TravelPlansComponent } from './travel-plans/travel-plans.component';

// Define the routes for your app
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cost-calculator', component: CostCalculatorComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'travel-plans', component: TravelPlansComponent },
];

// Define the root component with the routing functionality
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-travel-cost';
}
