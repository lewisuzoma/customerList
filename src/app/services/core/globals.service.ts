import { Injectable } from '@angular/core';
import {
  ModalController,
  Platform,
} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  defaultModalConfig: any = {
    // enterAnimation: modalEnterAnimation,
    component: null,
    id: null,
    mode: "md",
    // initialBreakpoint: 1.0,
    // breakpoints: [0, 1.0],
    canDismiss: true,
    cssClass: "",
    componentProps: {},
  };


  constructor(
    public platform: Platform,
    public modalCtrl: ModalController,
  ) { }

  isNative() {
    return this.platform.is('capacitor');
  }

  async openModal(
    page: any,
    data: object,
    height: number = 100,
    isCenter: boolean = false,
    cssClass: string = "modal-right",
    id?: any
  ) {
    let modalConfig = this.defaultModalConfig;
    if (height == 100 ||  (this.platform.is('tablet') && this.isNative())) {
      delete modalConfig.initialBreakpoint;
      delete modalConfig.breakpoints;
    } else {
      modalConfig.breakpoints = [0, height / 100];
      modalConfig.initialBreakpoint = height / 100;
    }
    if ( (this.platform.is('tablet'))) {
      modalConfig.cssClass = isCenter == false ? cssClass : `modal-center`;
    } else {
      modalConfig.cssClass = isCenter == false ? cssClass : cssClass;
    }
    modalConfig.componentProps = data;
    modalConfig.component = page;
    modalConfig.id = id;
    let modal: any = await this.modalCtrl.create(modalConfig);
    await modal.present();
  }

  closeModal(id?: string, data?: any , role?: string) {
    this.modalCtrl.dismiss(null, undefined, id);
  }

  checkTime() {
    var hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Good Afternoon";
    } else if (hour >= 17 && hour <= 24) {
      return "Good Evening";
    }
    return true;
  }
}
