import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CustomerListComponent } from "../../../components/application_components/customer-list/customer-list.component";

@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        CustomerListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
