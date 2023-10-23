import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() field!: AbstractControl<any, any> | null;
  @Input() message: string = '';
  @Input() error: string = '';
  constructor() {}

  ngOnInit() {}
  shouldShowComponent() {
    if (this.field?.touched && this.field.errors?.[this.error]) return true;

    return false;
  }
}
