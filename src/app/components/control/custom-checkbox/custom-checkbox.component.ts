import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from 'src/app/model/list-item';
import { FormControl } from '@angular/forms';

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

  public select(chip) {
    // トグル
    chip.isSelected = !chip.isSelected;
    
    if (chip.isSelected) {
      this.control.value.push(chip);
    } else {
      this.control.setValue(this.control.value.filter(e => e !== chip));
    }
  }

  public add(event) {

  }
}
