import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-out-frame',
  templateUrl: './out-frame.component.html',
  styleUrls: ['./out-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutFrameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
