import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon-constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  /** ユーザーアイコン */
  public userIcon = IconConstants.user;

  /** 設定アイコン */
  public settingIcon = IconConstants.setting;

  constructor() { }

  ngOnInit(): void {
  }

}
