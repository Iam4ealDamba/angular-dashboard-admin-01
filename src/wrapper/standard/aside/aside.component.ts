import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AsideLinkButton } from '../../../components/buttons/aside_link_button/AsideLinkButton';

@Component({
  selector: 'wrapper-standard-aside',
  standalone: true,
  imports: [MatIconModule, AsideLinkButton],
  templateUrl: './aside.component.html',
})
export class StandardAsideComponent {}
