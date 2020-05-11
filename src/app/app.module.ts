import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTooltipModule } from '@angular/material/tooltip'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { JPDateAdapter } from './adapter/jp-date-adapter';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './components/resume/resume.component';
import { ResumeBoardComponent } from './components/resume/resume-board/resume-board.component';
import { OutFrameComponent } from './components/common/out-frame/out-frame.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { IconComponent } from './components/control/icon/icon.component';
import { IconButtonComponent } from './components/control/icon-button/icon-button.component';
import { IconDropdownComponent } from './components/control/icon-dropdown/icon-dropdown.component';
import { ResumeGridComponent } from './components/resume/resume-grid/resume-grid.component';
import { DateComponent } from './components/control/date/date.component';
import { TextboxComponent } from './components/control/textbox/textbox.component';
import { TextareaComponent } from './components/control/textarea/textarea.component';
import { CustomCheckboxComponent } from './components/control/custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './components/control/custom-radio/custom-radio.component';
import { MatChipsModule } from '@angular/material/chips';

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
    CustomCheckboxComponent,
    CustomRadioComponent,
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
    MatChipsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: JPDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
