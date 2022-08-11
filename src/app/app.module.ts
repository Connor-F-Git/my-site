import { TabsModule } from 'ngx-tabset';
import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PartnerComponent } from './common/partner/partner.component';
import { CtaComponent } from './common/cta/cta.component';
import { WorkProcessComponent } from './common/work-process/work-process.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { FunfactsComponent } from './common/funfacts/funfacts.component';
import { PortfolioAgencyDemoComponent } from './pages/portfolio-agency-demo/portfolio-agency-demo.component';
import { PaBannerComponent } from './pages/portfolio-agency-demo/pa-banner/pa-banner.component';
import { PaProjectsComponent } from './pages/portfolio-agency-demo/pa-projects/pa-projects.component';
import { PaFunfactsComponent } from './pages/portfolio-agency-demo/pa-funfacts/pa-funfacts.component';
import { InstagramComponent } from './common/instagram/instagram.component';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { PersonalPortfolioDemoComponent } from './pages/personal-portfolio-demo/personal-portfolio-demo.component';
import { PpBannerComponent } from './pages/personal-portfolio-demo/pp-banner/pp-banner.component';
import { PpServicesComponent } from './pages/personal-portfolio-demo/pp-services/pp-services.component';
import { PpProjectsComponent } from './pages/personal-portfolio-demo/pp-projects/pp-projects.component';
import { PpSkillsComponent } from './pages/personal-portfolio-demo/pp-skills/pp-skills.component';
import { PpExperienceComponent } from './pages/personal-portfolio-demo/pp-experience/pp-experience.component';
import { PpTestimonialsComponent } from './pages/personal-portfolio-demo/pp-testimonials/pp-testimonials.component';
import { PpClientsComponent } from './pages/personal-portfolio-demo/pp-clients/pp-clients.component';
import { PpBlogComponent } from './pages/personal-portfolio-demo/pp-blog/pp-blog.component';
import { PpContactComponent } from './pages/personal-portfolio-demo/pp-contact/pp-contact.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PartnerComponent,
        CtaComponent,
        WorkProcessComponent,
        NotFoundComponent,
        FunfactsComponent,
        PortfolioAgencyDemoComponent,
        PaBannerComponent,
        PaProjectsComponent,
        PaFunfactsComponent,
        InstagramComponent,
        SubscribeComponent,
        PersonalPortfolioDemoComponent,
        PpBannerComponent,
        PpServicesComponent,
        PpProjectsComponent,
        PpSkillsComponent,
        PpExperienceComponent,
        PpTestimonialsComponent,
        PpClientsComponent,
        PpBlogComponent,
        PpContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        StickyNavModule,
        NgxSmartModalModule.forRoot(),
        NgxScrollTopModule,
        TabsModule.forRoot(),
        AccordionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }