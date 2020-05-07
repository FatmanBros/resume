import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../model/resume';

@Component({
  selector: 'app-resume-board',
  templateUrl: './resume-board.component.html',
  styleUrls: ['./resume-board.component.scss']
})
export class ResumeBoardComponent implements OnInit {

  @Input()
  public resume: Resume;

  constructor() { }

  ngOnInit(): void {
  }
}
