import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { OutFrameComponent } from './common/out-frame/out-frame.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { IconComponent } from './control/icon/icon.component';
import { IconButtonComponent } from './control/icon-button/icon-button.component';
import { IconDropdownComponent } from './control/icon-dropdown/icon-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    OutFrameComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    IconComponent,
    IconButtonComponent,
    IconDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
