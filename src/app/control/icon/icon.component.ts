import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  public iconClass: string;

  @Input()
  public tooltipText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
