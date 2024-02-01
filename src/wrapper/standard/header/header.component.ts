import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconButton } from '../../../components/buttons/icon_button/IconButton';
import { StandardAsideComponent } from '../aside/aside.component';
import { StandardModalAsideComponent } from '../modal-aside/modal-aside.component';

@Component({
  selector: 'wrapper-standard-header',
  standalone: true,
  imports: [
    StandardAsideComponent,
    StandardModalAsideComponent,
    MatIconModule,
    IconButton,
  ],
  templateUrl: './header.component.html',
})
export class StandardHeaderComponent {
  is_aside_modal = false;
}
