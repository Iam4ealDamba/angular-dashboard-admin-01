import { Component } from '@angular/core';
import { StandardComponent as StandardWrapperComponent } from '../../wrapper/standard/standard.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StandardWrapperComponent, MatIconModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
