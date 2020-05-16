import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Validators } from 'src/app/validators/validators';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCheckboxComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public listItem: ListItem[] = [];

  @Input()
  public control: FormControl;

  constructor(
    private detector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  /**
   * チェックボックス選択
   * 
   * @param chip 
   */
  public select(chip) {
    // トグル
    chip.isSelected = !chip.isSelected;

    if (chip.isSelected) {
      this.control.value.push(chip);
    } else {
      this.control.setValue(this.control.value.filter(e => e !== chip));
    }
  }

  /**
   * 新規選択肢追加
   * 
   * @param event 
   */
  public add(event: MatChipInputEvent): void {
    let value = event.value.trim();
    if (!value) {
      return;
    }
    // 入力内容リセット
    event.input.value = '';

    // 既にある場合は有効にして終了
    if (!Validators.isNullOrLengthZero(this.listItem)) {
      let exist = this.listItem.filter(item => item.label.toLowerCase() === value.toLowerCase());
      if (!Validators.isNullOrLengthZero(exist)) {
        exist[0].isSelected = true;
        return;
      }
    }

    let newItem = { label: value, value: value, isSelected: true, isAdded: true };

    // リスト追加
    this.listItem.push(newItem);
  }

  /**
   * リスト削除
   * 
   * @param event 
   */
  public remove(chip) {
    const index = this.listItem.indexOf(chip);

    if (index >= 0) {
      this.listItem.splice(index, 1);
    }
  }
}
