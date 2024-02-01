import { Component } from '@angular/core';
import { StandardHeaderComponent } from './header/header.component';
import { StandardAsideComponent } from './aside/aside.component';

@Component({
  selector: 'wrapper-standard',
  standalone: true,
  imports: [StandardHeaderComponent, StandardAsideComponent],
  templateUrl: './standard.component.html',
})
export class StandardComponent {}
