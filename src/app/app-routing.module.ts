import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}from"./home/home.component";
import {HaederSectionComponent} from "./haeder-section/haeder-section.component";
import{FooterComponent}from"./footer/footer.component";
import{MartComponent}from"./mart/mart.component";
import{ManShoppingComponent}from"./man-shopping/man-shopping.component";
import{WomenShoppingComponent}from"./women-shopping/women-shopping.component";
import{MenuComponent}from"./menu/menu.component";
import{RegisterComponent}from"./register/register.component";
import{LoginComponent} from"./login/login.component";
import {OtpComponent} from"./otp/otp.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {FreshVegetablesComponent} from"./fresh-vegetables/fresh-vegetables.component";
import {VerificationPageComponent} from "./verification-page/verification-page.component";
import{PincodeComponent} from "./pincode/pincode.component";
import {CartPopupComponent} from "./cart-popup/cart-popup.component";
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";
import {ComboProductsComponent} from "./combo-products/combo-products.component"
import { ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import { SliderComponent} from "./slider/slider.component";
import {BestSellerComponent} from "./best-seller/best-seller.component";
import {TranckingTimelineComponent} from "./trancking-timeline/trancking-timeline.component";
import {ShoppingComponent} from "./shopping/shopping.component";
import {TodayOffComponent} from './today-off/today-off.component';
import {CategoriesComponent} from './categories/categories.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path: 'HaederSection',component:HaederSectionComponent},
{path:'timeline',component:TranckingTimelineComponent},
{path:'bestseller',component:BestSellerComponent},
{path: 'footer',component:FooterComponent},
{path:'mart',component:MartComponent},
{path:'AddToCart',component:AddToCartComponent},
{path:'man-shopping',component:ManShoppingComponent},
{path:'women-shopping',component:WomenShoppingComponent},
{path:'menu',component:MenuComponent},
{path:'shopping',component:ShoppingComponent},
{path:'register',component:RegisterComponent},
{path:'vegetables',component:FreshVegetablesComponent},
{path:'login',component:LoginComponent},
{path:"offer" ,component:TodayOffComponent},
{ path:'verification-page',component:VerificationPageComponent},
{path:'forgot-password', component:ForgotPasswordComponent},
{ path:'reset-password',component:ResetPasswordComponent},
{path:'otp',component:OtpComponent},
{path:'pincode',component:PincodeComponent},
{path:'cart-popup',component:CartPopupComponent},
{path:'Combo',component:ComboProductsComponent},
{path:'slider',component:SliderComponent},
{path: 'Categories' , component:CategoriesComponent},
{ path: '',   redirectTo: 'pincode', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
