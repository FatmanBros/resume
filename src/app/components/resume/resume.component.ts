import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../common/base/base.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
