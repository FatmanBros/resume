import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { ListItem } from '../model/list-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 技術情報のリストを取得する
   * 
   * project
   * process
   * tool
   * language{ option : { framework: []}}
   */
  public getCode(): Observable<any> {
    return of({
      position: {
        
      },
      project: {
        label: "プロジェクト",
        listItem: [
          { label: "インフラ", value: "1" },
          { label: "Web開発", value: "2" },
          { label: "iOS", value: "3" },
          { label: "Android", value: "4" },
          { label: "組込", value: "5" },
          { label: "汎用機", value: "6" },
        ]
      },
      process: {
        label: "工程",
        listItem: [
          { label: "要件定義", value: "1" },
          { label: "基本設計", value: "2" },
          { label: "詳細設計", value: "3" },
          { label: "製造", value: "4" },
          { label: "単体テスト", value: "5" },
          { label: "結合テスト", value: "6" },
          { label: "総合テスト", value: "7" },
        ]
      },
      tool: {
        label: "ツール",
        listItem: [
        ]
      },
      language: {
        label: "言語",
        listItem: [
          {
            label: "C", value: "1", option: {
              frameworks: []
            }
          },
          {
            label: "C++", value: "2", option: {
              frameworks: []
            }
          },
          {
            label: "C#", value: "3", option: {
              frameworks: [
                { label: ".NET Framework", value: "1" },
                { label: ".NET Core", value: "2" },
              ]
            }
          },
          {
            label: "Java", value: "4", option: {
              frameworks: [
                { label: "Spling", value: "1" },
                { label: "Spling Boot", value: "2" },
              ]
            }
          },
          {
            label: "Kotlin", value: "5", option: {
              frameworks: [
                { label: "Spling", value: "1" },
                { label: "Spling Boot", value: "2" },
              ]
            }
          },
          {
            label: "PHP", value: "6", option: {
              frameworks: [
                { label: "Laravel", value: "1" },
                { label: "CakePHP", value: "2" },
                { label: "Symfony", value: "3" },
                { label: "CodeIgniter", value: "4" },
                { label: "ZendFramework", value: "5" },
                { label: "Phalcon", value: "6" },
                { label: "Slim", value: "7" },
              ]
            }
          },
          {
            label: "Ruby", value: "7", option: {
              frameworks: []
            }
          },
          {
            label: "Python", value: "8", option: {
              frameworks: [
                { label: "Django", value: "1" },
                { label: "Flask", value: "2" },
                { label: "Bottle", value: "3" },
                { label: "Tornado", value: "4" },
                { label: "web2Py", value: "5" },
              ]
            }
          },
          {
            label: "JavaScript", value: "9", option: {
              frameworks: [
                { label: "jQuery", value: "1" },
                { label: "AngularJS", value: "2" },
                { label: "Vue", value: "3" },
                { label: "React", value: "4" },
              ]
            }
          },
          {
            label: "TypeScript", value: "10", option: {
              frameworks: [
                { label: "Angular", value: "1" },
                { label: "Vue", value: "2" },
                { label: "React", value: "3" },
              ]
            }
          },
        ]
      }
    })
  }
}
