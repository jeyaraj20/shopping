import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { NgImageSliderModule } from "ng-image-slider";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MartComponent } from './mart/mart.component';
import { ManShoppingComponent } from './man-shopping/man-shopping.component';
import { WomenShoppingComponent } from './women-shopping/women-shopping.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HaederSectionComponent } from './haeder-section/haeder-section.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { FreshVegetablesComponent } from './fresh-vegetables/fresh-vegetables.component';
import { OtpComponent } from './otp/otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { PincodeComponent } from './pincode/pincode.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ComboProductsComponent } from './combo-products/combo-products.component';
import { SliderComponent } from './slider/slider.component';
import { TranckingTimelineComponent } from './trancking-timeline/trancking-timeline.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { AllViewComponent } from './all-view/all-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TodayOffComponent } from './today-off/today-off.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MartComponent,
    ManShoppingComponent,
    WomenShoppingComponent,
    FooterComponent,
    MenuComponent,
    HaederSectionComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerificationPageComponent,
    FreshVegetablesComponent,
    OtpComponent,
    ResetPasswordComponent,
    CartPopupComponent,
    PincodeComponent,
    AddToCartComponent,
    ComboProductsComponent,
    SliderComponent,
    TranckingTimelineComponent,
    ShoppingComponent,
    BestSellerComponent,
    AllViewComponent,
    TodayOffComponent,
    CategoriesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    NgxTypeaheadModule,
    NgbModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
      ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
