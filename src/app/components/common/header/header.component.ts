import { Component, OnInit } from '@angular/core';
import { IconConstants } from 'src/app/constants/icon-constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
