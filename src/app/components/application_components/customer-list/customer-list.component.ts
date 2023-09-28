import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-customer-list',
  imports: [
    CommonModule,
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerListComponent  implements OnInit {
@Input() customer:any | undefined

  constructor() { }

  ngOnInit() {}

}
