import { Component, Input } from '@angular/core';
import { StandardAsideComponent } from '../aside/aside.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'wrapper-standard-modal-aside',
  templateUrl: './modal-aside.component.html',
  imports: [StandardAsideComponent, MatIconModule],
})
export class StandardModalAsideComponent {
  @Input() showModal = false;
}
