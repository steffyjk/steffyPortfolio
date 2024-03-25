import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsModule } from 'primeng/chips';
import { FieldsetModule } from 'primeng/fieldset';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RippleModule } from 'primeng/ripple';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { SplitterModule } from 'primeng/splitter';
import { TimelineModule } from 'primeng/timeline';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    ServiceComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    RatingModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    ToolbarModule,
    TagModule,
    AvatarGroupModule,
    AvatarModule,
    TooltipModule,
    AccordionModule,
    BrowserAnimationsModule,
    ChipsModule,
    FieldsetModule,
    AnimateOnScrollModule,
    RippleModule,
    OrganizationChartModule,
    SplitterModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
