import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/core/globals.service';

@Component({
  selector: 'app-full-modal',
  templateUrl: './full-modal.page.html',
  styleUrls: ['./full-modal.page.scss'],
})
export class FullModalPage implements OnInit {
  data: any = this.params.get("data") || '';
  page: any = this.params.get("page");
  modal_Id: any = this.params.get("modalId");

  constructor(
    public global: GlobalsService,
    private params: NavParams,
  ) { }

  ngOnInit() {
  }

  closeModal(modalId?: string) {
    this.global.closeModal(modalId, null,undefined)
  }

}
