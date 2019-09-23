import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LeftNavigationComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftNavigationComponent, HeaderComponent, FooterComponent]
})
export class CommonSharedModule { }
