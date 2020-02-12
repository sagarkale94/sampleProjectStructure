import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


@NgModule({
    declarations: [AuthenticationComponent, LoginComponent, TermsAndConditionsComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule { }
