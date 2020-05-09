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
import { ResumeBoardComponent } from './resume-board/resume-board.component';
import { MatTooltipModule } from '@angular/material/tooltip'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeGridComponent } from './resume-grid/resume-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './control/date/date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { JPDateAdapter } from './adapter/jp-date-adapter';
import { TextboxComponent } from './textbox/textbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ResumeBoardComponent,
    OutFrameComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    IconComponent,
    IconButtonComponent,
    IconDropdownComponent,
    ResumeGridComponent,
    DateComponent,
    TextboxComponent,
    TextareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: JPDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
