import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PersonalPortfolioDemoComponent } from './pages/personal-portfolio-demo/personal-portfolio-demo.component';
import { PortfolioAgencyDemoComponent } from './pages/portfolio-agency-demo/portfolio-agency-demo.component';

const routes: Routes = [
    {path: 'portfolio-agency', component: PortfolioAgencyDemoComponent},
    {path: '', component: PersonalPortfolioDemoComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }