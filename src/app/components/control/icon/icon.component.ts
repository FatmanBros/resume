import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  @Input()
  public iconClass: string;

  @Input()
  public tooltipText: string;

  @Input()
  public size: 'small' | 'middle' | 'large' = 'small';

  constructor() { }

  ngOnInit(): void {

  }

}
