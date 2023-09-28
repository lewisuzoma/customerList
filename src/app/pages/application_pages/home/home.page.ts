import { Component, OnInit } from '@angular/core';
import { FullModalPage } from 'src/app/modals/full-modal/full-modal.page';
import { GlobalsService } from 'src/app/services/core/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public global: GlobalsService) { }

  ngOnInit() {
  }

  openModal(modalId: any, page: any, data?: any): void {
    this.global.openModal(
      FullModalPage,
      {
        page: page,
        modalId: modalId,
        data: data
      },
      100,
      true,
      '',
      modalId);
  }

}
