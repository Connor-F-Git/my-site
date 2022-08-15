import { TabsModule } from 'ngx-tabset';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NoopAnimationPlayer } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PartnerComponent } from './common/partner/partner.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PersonalPortfolioDemoComponent } from './pages/personal-portfolio-demo/personal-portfolio-demo.component';
import { PpBannerComponent } from './pages/personal-portfolio-demo/pp-banner/pp-banner.component';
import { PpServicesComponent } from './pages/personal-portfolio-demo/pp-services/pp-services.component';
import { PpProjectsComponent } from './pages/personal-portfolio-demo/pp-projects/pp-projects.component';
import { PpSkillsComponent } from './pages/personal-portfolio-demo/pp-skills/pp-skills.component';
import { PpExperienceComponent } from './pages/personal-portfolio-demo/pp-experience/pp-experience.component';
import { PpClientsComponent } from './pages/personal-portfolio-demo/pp-clients/pp-clients.component';
import { PpContactComponent } from './pages/personal-portfolio-demo/pp-contact/pp-contact.component';

import { ContactService } from './contact-service/contact.service';
import { environment } from '../environments/environment'

console.log("If you came to the console looking for errors, sorry to disappoint.")

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PartnerComponent,
        NotFoundComponent,
        PersonalPortfolioDemoComponent,
        PpBannerComponent,
        PpServicesComponent,
        PpProjectsComponent,
        PpSkillsComponent,
        PpExperienceComponent,
        PpClientsComponent,
        PpContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxSmartModalModule.forRoot(),
        TabsModule.forRoot(),
        CarouselModule,
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ContactService, NoopAnimationPlayer],
    bootstrap: [AppComponent]
})
export class AppModule { }