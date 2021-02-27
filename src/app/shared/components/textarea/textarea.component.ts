import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  /**
   * type of input field
   */
  @Input('formGroup') formGroup: FormGroup;
  
  /**
   * type of input field
   */
  @Input('controlName') controlName;

  /**
   * name of textarea
   */
  @Input('name') name: string;

  /**
   * placeholder of textarea
   */
  @Input('placeholder') placeholder: string;

  /**
   * number of columns of textarea
  */
  @Input('cols') cols: string;

  /**
   * number of rows of textarea
   */
  @Input('rows') rows: string = '6';


  /**
   * value of textarea
   */
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formGroup)
  }
}
