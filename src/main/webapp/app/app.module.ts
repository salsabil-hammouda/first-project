import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FitrstProjetJhipsterSharedModule } from 'app/shared/shared.module';
import { FitrstProjetJhipsterCoreModule } from 'app/core/core.module';
import { FitrstProjetJhipsterAppRoutingModule } from './app-routing.module';
import { FitrstProjetJhipsterHomeModule } from './home/home.module';
import { FitrstProjetJhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FitrstProjetJhipsterSharedModule,
    FitrstProjetJhipsterCoreModule,
    FitrstProjetJhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FitrstProjetJhipsterEntityModule,
    FitrstProjetJhipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class FitrstProjetJhipsterAppModule {}
